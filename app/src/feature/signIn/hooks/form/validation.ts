import { z } from "zod";

export const email = () =>
	z.string().trim().email({ message: "You must enter valid email" });

export const password = () =>
	z.string().trim().min(1, { message: "You must enter a password" });
