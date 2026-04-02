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
        baseUrl: "",
        clientId: "",
        clientSecret: "",
        authenticationScheme: "body",
        redirectUri: "",
        logoutRedirectUri: "",
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
