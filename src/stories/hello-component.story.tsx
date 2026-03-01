import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";

import { HelloComponent } from "../hello-component";

const story = CreateReactStory(
	{
		controls: {
			helloTo: "World",
		},
		react: React,
		reactRoblox: ReactRoblox,
	},
	({ controls }) => {
		return <HelloComponent helloTo={controls.helloTo} />;
	},
);

export = story;
