import Image from "next/image";
import Link from "next/link";
import { more } from "./MenuItems";

export default function MainFooter() {
	return (
		<div className="flex justify-center bg-gray-200">
			<div className="flex flex-col md:flex-row justify-evenly max-w-7xl p-8">
				<div className="relative flex flex-col px-5 py-6">
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
				</div>
				<div className="relative flex flex-col px-5 py-6">
					{more.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="-m-3 mb-3 p-3 flex items-start"
						>
							<div className="ml-4 w-full">
								<p className="text-base font-medium text-gray-400">
									{item.name}
								</p>
								<p className="mt-1 text-sm text-lightGray">
									{item.description}
								</p>
							</div>
						</a>
					))}
				</div>
				<div className="relative flex flex-col px-5 py-6">
					{more.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="-m-3 mb-3 p-3 flex items-start"
						>
							<item.icon
								className="flex-shrink-0 h-6 w-6 text-lightGray"
								aria-hidden="true"
							/>
							<div className="ml-4 w-full">
								<p className="text-base font-medium text-gray-400">
									{item.name}
								</p>
								<p className="mt-1 text-sm text-lightGray">
									{item.description}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
