// import prisma from "../../../../lib/prisma";
// import { getSession } from "next-auth/react";

// // DELETE /api/subscription/delete/:id - Delete existing subscription
// export default async function handler(req, res) {
// 	const session = await getSession({ req });
// 	const { id } = req.query;
// 	const { subscriberId } = req.body;
// 	if (session && session.userId === subscriberId) {
// 		// Signed in
// 		const response = await prisma.subscription.delete({
// 			where: { id: id },
// 		});
// 		res.status(200).json(response);
// 	} else {
// 		// Not Signed in
// 		res.status(401);
// 	}
// 	res.end();
// }
