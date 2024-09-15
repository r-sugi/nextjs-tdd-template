import type { ReactElement } from "react";

import { toSpyWithMock } from "./helper";

export function mockNextHead() {
	toSpyWithMock(
		require("next/head"),
		"default",
		({ children }: { children: Array<ReactElement> }) => {
			return <>{children}</>;
		},
	);
}

export function assertSeoTags({
	titleText,
	descriptionText,
	ogUrlText,
}: {
	titleText: string;
	descriptionText: string;
	ogUrlText: string;
}) {
	const titleTag = document.querySelector("title");
	expect(titleTag).toBeInTheDocument();
	expect(titleTag?.textContent).toBe(titleText);

	// description
	const metaDescription = document.querySelector("meta[name='description']");
	expect(metaDescription).toBeInTheDocument();
	expect(metaDescription?.attributes?.getNamedItem("content")?.value).toBe(
		descriptionText,
	);

	// og:url
	const ogUrl = document.querySelector("meta[property='og:url']");
	expect(ogUrl).toBeInTheDocument();
	expect(ogUrl?.attributes?.getNamedItem("content")?.value).toBe(ogUrlText);
}
