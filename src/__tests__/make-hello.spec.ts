import { expect, it } from "@rbxts/jest-globals";

import { makeHello } from "..";

it("should default to Hello, World!", () => {
	expect(makeHello()).toBe("Hello, World!");
});

it("should add the passed argument to the returned string", () => {
	expect(makeHello("World")).toBe("Hello, World!");
	expect(makeHello("Roblox")).toBe("Hello, Roblox!");
});
