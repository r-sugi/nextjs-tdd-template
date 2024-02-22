import { setupWorker } from "msw";
import { handlers } from "./rest/restHandlers";

export const worker = setupWorker(...Object.values(handlers));
