import type { TypedFlatConfigItem } from "@isentinel/eslint-config";
import isentinel from "@isentinel/eslint-config";

export default isentinel(
	// Base rules for the project
	{
		name: "project/base",
		namedConfigs: true,
		type: "package",

		pnpm: true,
		roblox: true,
		// react: true // Enable if you are going to use react - you will have to install dependencies for this
	},
	{
		name: "project/roblox-rules",
		files: ["src/**"],
		rules: {
			"ts/explicit-function-return-type": "off",
		},
	} satisfies TypedFlatConfigItem,
	{
		name: "project/sort-ignore",
		files: [
			"eslint.config.ts",
			"pnpm-workspace.yaml",
			"package.json",
			"pnpm-lock.yaml",
			"tsconfig.json",
		],
		rules: {
			"perfectionist/sort-objects": "off",
			"jsonc/sort-keys": "off",
		},
	} satisfies TypedFlatConfigItem,
	{
		name: "project/package-json",
		files: ["package.json"],
		rules: {
			"package-json/require-exports": "off",
		},
	} satisfies TypedFlatConfigItem,
);
