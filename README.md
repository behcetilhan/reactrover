

<div style="display: flex; gap: 8px">
 <img src="/public/rrLogo.png" alt="ReactRover Logo" width=100>

# ReactRover
</div>

ReactRover aims to ease the initiation phase of any React project, presenting one of many possible solutions to streamline the process. It brings together a selection of tools and libraries—like Vite, Bun, MUI, and Tanstack—that have proven useful in reducing setup times and complexity. This toolkit is offered as a starting point, a way to quickly transition from concept to development, allowing you to focus more on creating and less on configuring.


## What's Included ?

ReactRover incorporates a carefully curated set of tools and libraries essential for modern React development. Below are the key components included in the toolkit, along with links to their official documentation:

- **[Vite](https://vitejs.dev/)**: A modern frontend build tool that significantly improves the development experience with faster rebuilds and a lot of out-of-the-box features.
- **[Bun](https://bun.sh/)**: A fast all-in-one JavaScript runtime that includes a package manager and bundler.
- **[MUI (Material-UI)](https://mui.com/)**: MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
- **[Tanstack React Router](https://tanstack.com/router/latest)**: A flexible and lightweight routing library for React.
- **[Tanstack Query](https://tanstack.com/query/latest)**: A powerful data fetching and server state management tool in React applications.
- **[Formik](https://formik.org/)**: A small library that helps you with the 3 most annoying parts: getting values in and out of form state, validation and error messages, handling form submission.
- **[i18next](https://www.i18next.com/)**: An internationalization-framework written in and for JavaScript.
- **[React Toastify](https://fkhadra.github.io/react-toastify/)**: Allows you to add notifications to your app with ease.
- **[Zod](https://zod.dev/)**: TypeScript-first schema validation with static type inference.
- **[Axios](https://axios-http.com/)**: Promise based HTTP client for the browser and node.js.
- **[Axios Auth Refresh](https://www.npmjs.com/package/axios-auth-refresh)**: A small library that intercepts failed requests and retries them after refreshing an auth token.


Additionally, ReactRover supports built-in theme toggling for dark and light modes, as well as language switching capabilities, enhancing usability and customization for a diverse user base.


## Prerequisites

Before installing ReactRover, ensure that your system meets the following requirements:
- **Node.js**: You'll need [Node.js](https://nodejs.org/) version 16 or newer installed on your system.
- **Bun**: [Bun](https://bun.sh/) is crucial for some of ReactRover's build processes. Ensure it is installed on your system.
- **HTTPS Local Development**: For integration with the Mock Server, setting up HTTPS for local development is recommended. Tools like [mkcert](https://github.com/FiloSottile/mkcert) can assist in managing local certificates

## Installation & Usage

```sh
git clone https://github.com/behcetilhan/reactrover.git reactrover
cd reactrover
bun install
```

Create `.env` file in root directory with `VITE_BACKEND_ENDPOINT` defined. For [Testing Server](https://github.com/behcetilhan/mock-auth), you can use the port defined in `.env.dist`. 

```sh
bun run dev
```

## Tool for Testing

### Dedicated Mock Server for Authentication and Authorization

For an optimal testing experience with ReactRover, you can use this simple mock server. This server is specifically designed to complement ReactRover by providing a minimalistic backend environment for authentication and authorization. By using this server, you can effectively test secure login flows, token refresh mechanisms, and access controls as implemented in ReactRover.

**Key features include**:
- JWT-based authentication and HttpOnly cookie management.
- Secure refresh token implementation for maintaining sessions.
- HTTPS and HTTP configurations.
- Pre-configured protected routes to simulate access control.

For detailed setup instructions and how to integrate this server with ReactRover, please visit the [Testing Server](https://github.com/behcetilhan/mock-auth).

### Please Note!
If you are planning to use the test server with HTTP, don't forget to update the `VITE_BACKEND_ENDPOINT` in `.env` file


## Some upcoming features

- vitest implementation
- SSO integration
- RTL support
- [Tanstack Table](https://tanstack.com/table/latest) integration 
- [React Charts](https://react-charts.tanstack.com/) integration
- [React Select](https://react-select.com) integration
- Basic mui grid,container and drawer examples
- Support for [Tailwind](https://tailwindcss.com/)
- Configuration support for customizable boilerplate, like enabling/disabling third party packages as i18Next or Axios 
