import { setupWorker } from "msw/browser";
import { handlers } from "./rest/restHandlers";

export const worker = setupWorker(...Object.values(handlers));
