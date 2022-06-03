import { useContext } from "react";
import { SubscriptionContext } from "../../contexts/SubscriptionContext";
import Layout from "../../components/Layout";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";

function Content() {
	const { contents, addContents } = useContext(SubscriptionContext);

	const handleCheckbox = (data) => {
		const isChecked = contents.some((content) => content === data);
		if (isChecked) {
			addContents(contents.filter((content) => content !== data));
		} else {
			addContents(contents.concat(data));
		}
	};

	const contentData = ["veg", "meat", "fish", "milk", "cheese", "eggs"];

	return (
		<Layout title="Step 1 - Content">
			<h1 className="text-4xl font-semibold text-center">
				Choose Your Contents
			</h1>
			<h2 className="text-sm text-center text-gray-500 mt-5 mb-20">
				Select one or more...
			</h2>
			<form className="text-center max-w-3xl m-auto">
				<div className="flex flex-col m-auto max-w-xs md:max-w-full md:grid md:grid-cols-3 md:gap-10">
					{contentData.map((data) => (
						<label
							key={data}
							className="mb-20 md:mb-0 text-5xl uppercase font-semibold bg-slate-100 rounded-xl cursor-pointer"
						>
							<input
								className="hidden peer"
								value={data}
								type="checkbox"
								checked={contents.some((content) => content === data)}
								onChange={() => handleCheckbox(data)}
							/>
							<div className="py-20 peer-checked:bg-primaryGreen shadow peer-checked:text-white peer-checked:border-primaryGreen rounded-xl border-2 hover:border-slate-800">
								{data}
							</div>
						</label>
					))}
				</div>
				<div>
					{contents.length > 0 ? (
						<Link href="/subscription/size" passHref>
							<a className="flex justify-center m-auto my-24 items-center border-2 rounded-md border-gray-900 w-32 h-12 text-lg font-semibold hover:bg-gray-100">
								Next
								<ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
							</a>
						</Link>
					) : (
						<button onClick={() => alert("Select one or more...")}>
							<span className="flex justify-center m-auto my-24 items-center border-2 rounded-md border-gray-100 text-gray-100 w-32 h-12 text-lg font-semibold">
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

export default Content;
