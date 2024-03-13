import { NextApiRequest, NextApiResponse } from "next";
import { ServerLogger } from "@/lib/serverLogger";

const loggerMiddleware =
  (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>
  (req: NextApiRequest, res: NextApiResponse) => {
    new ServerLogger().info(`API route called: ${req.url}`);
    return handler(req, res);
  };

export default loggerMiddleware;
