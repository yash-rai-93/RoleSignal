# Contributing to RoleSignal

RoleSignal is maintained by [@yash-rai-93](https://github.com/yash-rai-93).

## Development

Use Node.js 24 and PostgreSQL 18. Clone this repository, run `npm ci`, copy `.env.example` to `.env`, and configure `DATABASE_URL`, `AUTH_SECRET`, and `ENCRYPTION_KEY`.

```sh
git clone https://github.com/yash-rai-93/RoleSignal.git
cd RoleSignal
npm ci
npx prisma generate
npx prisma migrate deploy
npm run dev
```

## Checks

Before submitting changes, run:

```sh
npx tsc --noEmit
npm run lint
npm test
npm run build
```

Integration and browser tests require a configured test database. See [tests/README.md](./tests/README.md).

## Pull requests

Keep each change focused, explain the resulting behavior, and include relevant validation. Follow the [code of conduct](./CODE_OF_CONDUCT.md). Preserve existing license notices.

## Questions and bug reports

The GitHub issue tracker is disabled for this repository. Contact [yashrai4426@gmail.com](mailto:yashrai4426@gmail.com) with a description, steps to reproduce, expected behavior, and relevant logs without secrets.
