import "@testing-library/jest-dom";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

import { configure } from "@testing-library/react";
configure({
	testIdAttribute: "data-testid",
});
