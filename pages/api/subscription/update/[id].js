import { getSession } from "next-auth/react";
import prisma from "../../../../lib/prisma";

// PUT /api/subscription/update/:id - Update existing subscription
export default async function handle(req, res) {
	const { size, content, interval, active, amount_total, subscriberId } =
		req.body;
	const session = await getSession({ req });
	const id = req.query.id;
	if (session && session.userId === subscriberId) {
		// Signed in
		const result = await prisma.subscription.update({
			where: { id: id },
			data: {
				// size: size,
				// content: content,
				// interval: interval,
				active: active,
				// amount_total: amount_total,
			},
		});
		res.status(200).json(result);
	} else {
		// Not Signed in
		res.status(401);
	}
	res.end();
}
