import type { Storybook } from "@rbxts/ui-labs";

const storybook: Storybook = {
	name: "Stories",
	groupRoots: true,
	// eslint-disable-next-line ts/no-non-null-assertion -- Will always exist
	storyRoots: script.Parent!.FindFirstChild("stories")!.GetChildren(),
};

export = storybook;
