# XyzFrontie

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Requirements

- Node.js v23.11.1 or higher

## Getting Started

### Environment Variables

#### Development

The `.env.development` file contains environment variables that are used in development mode.

You will need to create a `.env.development` file in the root of your project to add environment variables specific to your local machine.
For example, if you add the following line to the `.env.development` file:

```bash
API_ENDPOINT=http://localhost:4000/api # Replace with your API endpoint
```

#### Production Mode

You will also need to create a `.env.production` file in the root of your project to add environment variables specific to your production environment.

The `.env.production` file should contain the same environment variables as the `.env.development` file, but with the values specific to your production environment.

## Running
Before running the development server, make sure to install all required packages with:

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
