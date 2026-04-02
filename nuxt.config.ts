// https://nuxt.com/docs/api/configuration/nuxt-config

const keycloakBaseUrl = process.env.NUXT_KEYCLOAK_BASE_URL;
const keycloakRealm = process.env.NUXT_KEYCLOAK_REALM;
const keycloakOidc = `${keycloakBaseUrl}/realms/${keycloakRealm}/protocol/openid-connect`;
const appBaseUrl = process.env.NUXT_PUBLIC_APP_BASE_URL;

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "nuxt-oidc-auth", "@nuxtjs/i18n"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-01-15",

  oidc: {
    defaultProvider: "keycloak",
    providers: {
      keycloak: {
        clientId: process.env.NUXT_OIDC_PROVIDERS_KEYCLOAK_CLIENT_ID || "",
        authenticationScheme: "none",
        authorizationUrl: `${keycloakOidc}/auth`,
        tokenUrl: `${keycloakOidc}/token`,
        userInfoUrl: `${keycloakOidc}/userinfo`,
        redirectUri: `${appBaseUrl}/auth/keycloak/callback`,
        scope: ["openid", "profile", "email"],
        pkce: true,
        state: true,
        nonce: true,
        userNameClaim: "preferred_username",
        exposeAccessToken: true,
      },
    },
    middleware: {
      globalMiddlewareEnabled: false,
      redirect: false,
      customLoginPage: true,
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", language: "en", file: "en.json" },
      { code: "sv", name: "Svenska", language: "sv", file: "sv.json" },
    ],
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      redirectOn: "root",
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
