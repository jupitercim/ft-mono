# lista-mono

## Before Start

1. **Fork** this repo into your repositories
2. Clone from your fork
3. Set upstream(`git remote add upstream https://github.com/lista-dao/lista-mono.git`)
4. Make sure your node version higher than 18(`nvm use 18`)
5. In the root: `pnpm i && pnpm run build` (about 2mins)

### Installation

- corepack enable
- corepack prepare pnpm@latest --activate
- pnpm i

### Start project

- pnpm run dev --filter=lista

### Warning

Turborepo **DO NOT** support build packages before yarn build. But we use a hack way to do it.

## How to add dep

Very simple

### from npm

1. cd apps/**xxx**
2. pnpm add **dep**

### from ./packages

1. In your `apps/xxx/packages.json`, add `"@lista/xxx": "workspace:*",`(actually it's the packages.json's name)
2. pnpm install

## How to push & merge

1. push your branch to `origin`
2. git push origin HEAD
3. create a PR for the changes
4. tell QA or FE to approve the PR.

## How to publish

For short: just like in mono, everything is the same.

### pr

Make a new pr and add label `DEPLOY_TESTING`, after job's finished, use fe-header browser plugin to check, like: lista-pr: 1

### testing

Whenever a PR is merged into the `main` branch, a prowjob (currently defined in mono/infra/prow/jobs/prowjobs-pr-publish-fe.yaml) will be triggered to publish the latest code to QA env. (If it doesn't work, please check if prowjob has defined the corresponding project directories with `run_if_change`.)

### prod


## Disadvantage

- Miss all the git commit log
- Slower cache build speed than mono, but still acceptable, close to bazel build.

## Further learn

[Official webpage](https://turborepo.org)

[Introduce Turborepo by Vercel](https://www.youtube.com/watch?v=YX5yoApjI3M)
