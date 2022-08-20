import { useContext } from "react";
import { SubscriptionContext } from "../../contexts/SubscriptionContext";
import Layout from "../../components/Layout";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import SubscriptionStep from "../../components/SubscriptionStep";

function Frequency() {
	const { frequency, addFrequency } = useContext(SubscriptionContext);

	const handleChange = (data) => {
		addFrequency(data);
		console.log(data);
	};

	const frequencyData = ["weekly", "fortnightly", "monthly", "quarterly"];

	return (
		<Layout title="Step 3 - Delivery Frequency">
			<SubscriptionStep step={3} />
			<h1 className="text-4xl font-semibold text-center">
				Choose Your Delivery Frequency
			</h1>
			<h2 className="text-sm text-center text-gray-500 mt-5 mb-20">
				Select one...
			</h2>
			<form className="text-center max-w-xl m-auto pb-24">
				<div className="flex flex-col m-auto max-w-xs md:max-w-full md:grid md:grid-cols-2 md:gap-10">
					{frequencyData.map((data) => (
						<label
							key={data}
							className="mb-20 md:mb-0 text-2xl uppercase font-semibold bg-slate-100 rounded-xl cursor-pointer"
						>
							<input
								className="hidden peer"
								value={data}
								type="radio"
								checked={data === frequency}
								onChange={() => handleChange(data)}
							/>
							<div className="py-20 peer-checked:bg-primaryGreen shadow peer-checked:text-white peer-checked:border-primaryGreen rounded-xl border-2 hover:border-slate-800">
								{data}
							</div>
						</label>
					))}
				</div>
				<div>
					{frequency.length > 0 ? (
						<Link href="/subscription/summary" passHref>
							<a className="flex justify-center m-auto mt-24 items-center border-2 rounded-md border-gray-900 w-32 h-12 text-lg font-semibold hover:bg-gray-100">
								Next
								<ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
							</a>
						</Link>
					) : (
						<button onClick={() => alert("Select one...")}>
							<span className="flex justify-center m-auto mt-24 items-center border-2 rounded-md border-gray-100 text-gray-100 w-32 h-12 text-lg font-semibold">
								Next
								<ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
							</span>
						</button>
					)}
				</div>
			</form>
		</Layout>
	);
}

export default Frequency;
