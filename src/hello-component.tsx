import { type Attributes, useMemo } from "@rbxts/react";
import React from "@rbxts/react";

import { makeHello } from ".";

interface HelloComponentProps extends Attributes {
	helloTo: string;
}

export function HelloComponent({ key, helloTo, children }: Readonly<HelloComponentProps>) {
	const helloText = useMemo(() => makeHello(helloTo), [helloTo]);

	return (
		<textlabel Size={UDim2.fromOffset(100, 100)} Text={helloText} key={key}>
			{children}
		</textlabel>
	);
}
