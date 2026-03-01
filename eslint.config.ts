import isentinel, { type TypedFlatConfigItem } from "@isentinel/eslint-config";

const config = isentinel(
	{
		name: "project/root",
		// disabled due to genuinely insane time taken for little benefit
		formatters: {
			lua: false,
		},
		namedConfigs: true,
		pnpm: true,
		// enable this if youre using react
		// react: true,

		roblox: true,
		spellCheck: false,
	},

	// {
	// 	files: ["**/*.md"],
	// 	name: "project/markdown-perfectionist",
	// 	rules: {
	// 		"perfectionist/sort-imports": "off",
	// 	},
	// } satisfies TypedFlatConfigItem,
	{
		// ignores: ["**.md"],
		name: "project/sort",
		rules: {
			"perfectionist/sort-classes": [
				"error",
				{
					partitionByNewLine: false,
				},
			],
			"perfectionist/sort-enums": [
				"error",
				{
					partitionByNewLine: true,
				},
			],
			"perfectionist/sort-objects": [
				"error",
				{
					partitionByComment: true,
					partitionByNewLine: true,
				},
			],
		},

		settings: {
			perfectionist: {
				partitionByComment: true,
				// would be nice to put it here but it destroys everything for
				// markdown files, perfectionist issue with sort-imports :c
				// partitionByNewLine: true,
			},
		},
	} satisfies TypedFlatConfigItem,
	{
		name: "project/rules",
		rules: {
			// Annoying, functions can be self-descriptive just with their names
			"jsdoc/require-description": "off",
			"ts/explicit-function-return-type": [
				"error",
				{
					allowFunctionsWithoutTypeParameters: true,
				},
			],
		},
	} satisfies TypedFlatConfigItem,
);

export default config;
