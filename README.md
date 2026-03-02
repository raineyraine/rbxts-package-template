# rbxts-package-template

Template for roblox-ts packages

## Usage

1. Press `Use this template` on the GitHub website to make a new repository.
2. Clone the repository to your local machine.
3. Run `rokit install` and `pnpm install` (make sure you have both installed,
   these are important tools)
4. Use `pnpm build:dev` to build the test place or `pnpm dev` to serve it with
   Rojo and watch for changes
5. Have fun! 🎉

> [!NOTE]  
> [Flamework](https://flamework.fireboltofdeath.dev) is already automatically
> added to this project and will run during compilation. If you do not want to
> use Flamework, you'll have to:
>
> 1. Remove all Flamework packages (`@flamework/*` and
>    `rbxts-transformer-flamework`, make sure to do this in both `package.json`
>    and `pnpm-workspace.yaml`)
> 2. Remove the Flamework transformer from `tsconfig.json`'s `plugins` field
> 3. Remove the `@flamework` from `rbxts_include/node_modules` within
>    `test.project.json`.
> 4. Delete your `out` folder and `flamework.build`, if present.

## Publishing

When publishing for the first time, use the `pnpm publish` command. Make sure
the package name is `@rbxts/*`!

Future publishes can be done manually the same way. Have your commit messages
for publishing (changing the package.json) be `chore(release): vX.Y.Z`, where
X.Y.Z follows [Semantic Versioning](https://semver.org). Make sure you add a
version tag (`vX.Y.Z`) to the commit too, and don't forget to push the tag.

### GitHub Workflow Publishing

> [!NOTE]  
> If you are going to publish manually, it's safe to remove the
> `.github/workflows/publish.yaml` file.

> [!WARNING]  
> Make sure your npm package, when published, is
> [configured](https://docs.npmjs.com/trusted-publishers) for publishing with
> github workflows.

This template comes with a publishing workflow in `.github/workflows/`. This
runs when dispatched, or when a `v*` tag is pushed. If you are using this to
publish, follow the same steps for commiting as [Publishing](#publishing).

> [!IMPORTANT]  
> Remove the `--dry-run` in the workflow to actually publish to npm.
