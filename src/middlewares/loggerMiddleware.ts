import { NextApiRequest, NextApiResponse } from "next";
import { Logger } from "@/lib/logger";

const loggerMiddleware =
  (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>
  (req: NextApiRequest, res: NextApiResponse) => {
    new Logger().info(`API route called: ${req.url}`);
    return handler(req, res);
  };

export default loggerMiddleware;
