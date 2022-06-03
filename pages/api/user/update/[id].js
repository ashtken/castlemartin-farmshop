import { getSession } from "next-auth/react";
import prisma from "../../../../lib/prisma";

// PUT /api/user/update/:id - Updates user
export default async function handle(req, res) {
	const { name, address } = req.body;
	const { id } = req.query.id;
	const session = await getSession({ req });
	const result = await prisma.user.update({
		where: { id: id, email: session.user.email },
		data: {
			name: name,
			address: address,
		},
	});
	res.json(result);
}
