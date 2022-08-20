import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { signIn, useSession } from "next-auth/react";
import { SubscriptionContext } from "../../contexts/SubscriptionContext";
import AccountDetails from "../../components/AccountDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import SubscriptionStep from "../../components/SubscriptionStep";

function Summary() {
	const { contents, size, frequency, clearSubscription } =
		useContext(SubscriptionContext);
	const [user, setUser] = useState({});
	const router = useRouter();

	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			signIn(null, { callbackUrl: "/subscription/summary" });
		},
	});

	useEffect(() => {
		try {
			if (session) {
				const fetchUser = async () => {
					const response = await fetch(`/api/user/${session.userId}`);
					const data = await response.json();
					setUser(data);
				};
				fetchUser();
			}
		} catch (error) {
			console.log(error);
		}
	}, [session]);

	const submitSub = async () => {
		try {
			const monthlyTotal = monthlyTotalCalc(total(size), frequency);
			const body = { size, contents, frequency, monthlyTotal };
			const response = await fetch(`/api/subscription`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			if (response.status >= 200 && response.status <= 299) {
				clearSubscription();
				router.push("/subscription/success");
			} else {
				router.push("/subscription/unsuccessful");
			}
		} catch (error) {
			console.error(error);
			router.push("/subscription/unsuccessful");
		}
	};

	const total = (size) => {
		if (size === "small") {
			return 20;
		} else if (size === "medium") {
			return 40;
		} else if (size === "large") {
			return 60;
		} else if (size === "extra large") {
			return 80;
		}
	};

	const monthlyTotalCalc = (total, frequency) => {
		if (frequency === "weekly") {
			let num = total * 4;
			return num.toFixed(2);
		} else if (frequency === "fortnightly") {
			let num = total * 2;
			return num.toFixed(2);
		} else if (frequency === "quarterly") {
			let num = total / 3;
			return num.toFixed(2);
		} else if (frequency === "monthly") {
			return total.toFixed(2);
		}
	};

	return (
		<Layout title="Step 4 - Summary">
			<SubscriptionStep step={4} />
			<h1 className="text-4xl font-semibold text-center mb-14">
				Subscription Summary
			</h1>
			<div className="flex flex-col md:grid md:grid-cols-2 divide-y-2 md:divide-x-2 md:divide-y-0 divide-gray-900 max-w-7xl m-auto">
				<div className="flex justify-center">
					{status === "loading" ? (
						<div>
							<h1 className="text-2xl font-bold p-12">Loading...</h1>
						</div>
					) : (
						<AccountDetails
							name={user.name}
							email={user.email}
							address={user.address}
						/>
					)}
				</div>
				<div className=" flex justify-center px-12 pt-5">
					{contents.length >= 1 && size && frequency ? (
						<div className="font-semibold text-2xl md:text-4xl text-center md:text-left">
							<p className="mb-32 mt-16 md:mt-0">
								I want my subscription to contain a
								<span className="text-primaryGreen capitalize"> {size} </span>{" "}
								box, containing
								<span className="text-primaryGreen capitalize">
									{" "}
									{contents.join(", ")}{" "}
								</span>
								delivered
								<span className="text-primaryGreen capitalize">
									{" "}
									{frequency}
								</span>
								.
							</p>
							<p className="mb-3">
								1 x <span className="text-primaryGreen capitalize">{size}</span>{" "}
								box - £{total(size)}
							</p>
							<p className="mb-12">
								Delivered -
								<span className="text-primaryGreen capitalize">
									{frequency}
								</span>
							</p>
							<p className="mb-12">
								Total per month - £{monthlyTotalCalc(total(size), frequency)}
							</p>
							<div className="flex justify-center md:justify-start">
								<button
									onClick={submitSub}
									className="md:w-64 flex items-center justify-center mt-16 mb-12 px-4 py-2 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out"
								>
									Confirm Order
								</button>
							</div>
						</div>
					) : (
						<div className="font-semibold text-2xl md:text-4xl text-center md:text-left pb-96">
							<p>
								Missing subscription items. Please complete the subscription
								builder
								<Link href={"/subscription/content"}>
									<a className="text-primaryGreen"> here</a>
								</Link>
							</p>
						</div>
					)}
				</div>
			</div>
			<button onClick={clearSubscription}>Clear</button>
		</Layout>
	);
}

export default Summary;
