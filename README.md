# Support Portal

A web-based support portal for end users, built with Nuxt and Nuxt UI. Authentication is handled via Keycloak (OpenID Connect).

## Features

- Keycloak SSO login (PKCE, public client)
- Internationalization (English and Swedish, auto-detected from browser)
- Dark/light mode

## Setup

```bash
pnpm install
```

Copy the environment file and fill in your Keycloak details:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `NUXT_KEYCLOAK_BASE_URL` | Keycloak server URL (e.g. `https://auth.example.com`) |
| `NUXT_KEYCLOAK_REALM` | Keycloak realm name |
| `NUXT_OIDC_PROVIDERS_KEYCLOAK_CLIENT_ID` | Client ID of your Keycloak public client |
| `NUXT_PUBLIC_APP_BASE_URL` | Public URL of this app (e.g. `http://localhost:3000`) |

### Keycloak client configuration

1. Create a client with **Client authentication** set to **OFF** (public client)
2. Set **Valid Redirect URIs** to `<APP_BASE_URL>/auth/keycloak/callback`
3. Set **Web Origins** to your app's base URL

## Development

```bash
pnpm dev
```

## Production

```bash
pnpm build
pnpm preview
```
