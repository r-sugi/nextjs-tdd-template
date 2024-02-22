import { setupServer } from "msw/node";
import { handlers } from "./rest/restHandlers";

export const server = setupServer(...Object.values(handlers));
