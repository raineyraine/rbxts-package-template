# Contributing

## Commit Messages

Cmdi uses the
[Angular commit format](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md)
for commit messages. It should be made up of a header, body, and footer:

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
