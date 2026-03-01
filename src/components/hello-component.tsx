import { type Attributes, useMemo } from "@rbxts/react";
import React from "@rbxts/react";

import { makeHello } from "../functions/make-hello";

interface HelloComponentProps extends Attributes {
	helloTo: string;
}

export function HelloComponent({ children, helloTo, key }: Readonly<HelloComponentProps>) {
	const helloText = useMemo(() => makeHello(helloTo), [helloTo]);

	return (
		<textlabel Size={UDim2.fromOffset(100, 100)} Text={helloText} key={key}>
			{children}
		</textlabel>
	);
}
