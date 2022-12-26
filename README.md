This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, you need to create `.env` file in root directory with next variables:

```sh
DABASE_URL="postgresql://postgres:[password].???.supabase.co:5432/postgres"
SHADOW_DABASE_URL="postgresql://postgres:[password].???.supabase.co:5432/postgres_shadow"

```

Check [Supabase docs for Prisma](https://supabase.com/docs/guides/integrations/prisma#configuring-the-project-to-use-postgresql) on how to create shadow db.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
