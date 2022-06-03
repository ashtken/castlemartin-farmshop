import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

// POST /api/subscription
export default async function handle(req, res) {
	const session = await getSession({ req });
	const { size, contents, frequency, monthlyTotal } = req.body;
	if (session) {
		// Signed in
		const result = await prisma.subscription.create({
			data: {
				size: size,
				content: contents.join(", "),
				interval: frequency,
				active: true,
				amount_total: monthlyTotal,
				subscriber: {
					connect: { email: session?.user?.email },
				},
			},
		});
		res.status(200).json(result);
	} else {
		// Not Signed in
		res.status(401);
	}
	res.end();
}
