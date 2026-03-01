import type { Storybook } from "@rbxts/ui-labs";

const storybook: Storybook = {
	groupRoots: true,
	name: "Stories",
	// eslint-disable-next-line ts/no-non-null-assertion -- Must always exist
	storyRoots: script.Parent!.GetChildren(),
};

export = storybook;
