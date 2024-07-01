import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
	message: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) {
	console.log("Server API: articles/[id] called!!!");
	res.status(200).json({ message: "Hello from Next.js!" });
}
