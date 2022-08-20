import Image from "next/image";
import Link from "next/link";
import { more, nav } from "./MenuItems";

export default function MainFooter() {
	return (
		<footer className="flex justify-center bg-primaryBackground">
			<div className="flex flex-col md:flex-row justify-evenly max-w-7xl p-8">
				<div className="relative flex flex-col pl-5 pr-24 py-6">
					<Link href="/">
						<a>
							<Image
								className="h-8 w-auto sm:h-10"
								src="/vercel.svg"
								alt="Techii Logo"
								width={75}
								height={50}
							/>
						</a>
					</Link>
					<div className="mb-2 text-sm">
						<h2>Mon - Fri 7:00 - 20:00</h2>
						<h2>Sat - Sun 7:00 - 17:00</h2>
					</div>
					<div className="mb-2 text-sm">
						<h2>Castlemartin Farmshop</h2>
						<h2>Pembrokshire, West Wales</h2>
					</div>
				</div>
				<div className="relative flex flex-col pl-5 pr-24 py-6">
					<h1 className="uppercase ml-4 font-semibold pb-6">Quicklinks</h1>
					{nav.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="-m-3 mb-3 p-3 flex items-start"
						>
							<div className="ml-4 w-full">
								<h2 className="text-base font-medium text-gray-400">
									{item.name}
								</h2>
							</div>
						</a>
					))}
				</div>
				<div className="relative flex flex-col px-5 py-6">
					<h1 className="uppercase pl-6 font-semibold">Connect</h1>
					<div className="flex mt-6 pl-6">
						<p className="mr-4">@</p>
						<p className="mr-4">@</p>
						<p>@</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
