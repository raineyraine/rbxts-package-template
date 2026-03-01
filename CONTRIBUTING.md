# Contributing

This is a personal template, and contributions aren't actively sought out. Pull
requests or issues are permitted, though, if you find a bug or have a
suggestion!

## Commit Messages

Cmdi uses the [Conventional Commits format](www.conventionalcommits.org/en/) for
commit messages. Commitlint is used for validating commits -- you should have
the extension installed! It should be made up of a header, body, and footer:

```txt
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

...where the header looks like:

```txt
<type>[scope]: <short summary>
```

A body is optional when a short summary explains everything. Footers are
required to show what issues the commit is related to.

### Types/Scopes

| Type     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| build    | Changes that affect the build system or external dependencies |
| ci       | Changes to our CI configuration files and scripts             |
| docs     | Documentation only changes (including JSDoc comments)         |
| feat     | A new feature                                                 |
| fix      | A bug fix                                                     |
| perf     | A code change that improves performance                       |
| refactor | A code change that neither fixes a bug nor adds a feature     |
| test     | Adding missing tests or correcting existing tests             |
| chore    | Another misc change, e.g. releases or generating files        |
| revert   | A commit that reverts a change                                |
| style    | A commit making a stylistic change (lints included)           |

#### Notes

- Dependencies\
  In the case of a dependency change, you must supply the `deps` scope. For
  documentation dependencies, use `docs(deps)`. For any other dependencies, use
  `build(deps)`

For certain commit types, a scope is required:

| Scope   | Description                                    |
| ------- | ---------------------------------------------- |
| dev     | Changes to development tools and documentation |
| deps    | Changes to dependencies                        |
| assets  | Changes to any assets (images, audio, etc.)    |
| release | Releasing a new version                        |
