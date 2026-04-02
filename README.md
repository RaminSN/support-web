# Support Portal

A web-based support portal for end users, built with [Nuxt 4](https://nuxt.com), [Nuxt UI](https://ui.nuxt.com), and [Tailwind CSS](https://tailwindcss.com). Authentication is handled via [Keycloak](https://www.keycloak.org/) using OpenID Connect (PKCE).

## Features

- **Keycloak SSO** — OpenID Connect login with PKCE for public clients, including logout with session termination
- **Internationalization** — English and Swedish, auto-detected from browser language
- **Dark/light mode** — via Nuxt UI

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) 10+
- A running Keycloak instance with a configured realm and client

## Setup

```bash
pnpm install
```

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

### Environment variables

| Variable | Required | Description |
|---|---|---|
| `NUXT_KEYCLOAK_BASE_URL` | Yes | Keycloak server URL (e.g. `https://auth.example.com`) |
| `NUXT_KEYCLOAK_REALM` | Yes | Keycloak realm name |
| `NUXT_OIDC_PROVIDERS_KEYCLOAK_CLIENT_ID` | Yes | Client ID of your Keycloak public client |
| `NUXT_OIDC_SESSION_SECRET` | Yes | Session encryption secret (min 48 characters). Generate with `openssl rand -base64 48` |
| `NUXT_PUBLIC_APP_BASE_URL` | Yes | Public URL of this app (e.g. `http://localhost:3000`) |
| `NUXT_OIDC_PROVIDERS_KEYCLOAK_LOGOUT_REDIRECT_URI` | No | URL to redirect to after logout (defaults to `<APP_BASE_URL>/login`) |

### Keycloak client configuration

1. Create a new client with **Client authentication** set to **OFF** (public client)
2. Set **Valid Redirect URIs** to `<APP_BASE_URL>/auth/keycloak/callback`
3. Set **Valid Post Logout Redirect URIs** to `<APP_BASE_URL>/login`
4. Set **Web Origins** to your app's base URL

## Development

```bash
pnpm dev
```

## Production

```bash
pnpm build
pnpm preview
```

## Linting & type checking

```bash
pnpm lint
pnpm typecheck
```
