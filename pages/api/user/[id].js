import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

// GET /api/user/:id - Gets user
export default async function handler(req, res) {
	const session = await getSession({ req });
	const { id } = req.query;
	const response = await prisma.user.findUnique({
		where: { id: id },
	});
	if (session && session.userId === id) {
		// Signed in
		res.status(200).json(response);
	} else {
		// Not Signed in
		res.status(401);
	}
	res.end();
}
