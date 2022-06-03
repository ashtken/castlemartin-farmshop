import Layout from "../../components/Layout";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";

function Unsuccessful() {
	return (
		<Layout title="Error, Please Try Again | Castlemartin Farmshop">
			<div className="flex justify-center my-24">
				<div className="inline-flex items-center flex-col">
					<div>
						<XIcon
							className="h-36 w-36 bg-red-500 text-white rounded-full"
							aria-hidden="true"
						/>
					</div>

					<h1 className="capitalize text-3xl font-semibold mt-12 mb-6">
						unfortunately, an error has occurred
					</h1>
					<h2 className="capitalize text-3xl font-semibold">
						please try again{" "}
						<span className="text-primaryGreen font-bold">
							<Link href={"/subscription/summary"}>
								<a>here</a>
							</Link>
						</span>
					</h2>
				</div>
			</div>
		</Layout>
	);
}

export default Unsuccessful;
