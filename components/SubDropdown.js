import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
	DotsVerticalIcon,
	PauseIcon,
	PlayIcon,
} from "@heroicons/react/outline";

export default function SubDropdown({ sub, updateSubStatus }) {
	return (
		<div>
			<Menu as="div" className="relative inline-block">
				<div>
					<Menu.Button>
						<DotsVerticalIcon
							className="w-5 h-5 text-gray-400"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg">
						<div className="px-1 py-1 ">
							{sub.active ? (
								<Menu.Item>
									{({ active }) => (
										<button
											onClick={() => {
												updateSubStatus(sub);
											}}
											className={`${
												active ? "bg-gray-100 text-gray-700" : "text-gray-600"
											} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
										>
											<PauseIcon className="w-5 h-5 mr-2" aria-hidden="true" />
											Pause
										</button>
									)}
								</Menu.Item>
							) : (
								<Menu.Item>
									{({ active }) => (
										<button
											onClick={() => {
												updateSubStatus(sub);
											}}
											className={`${
												active ? "bg-gray-100 text-gray-700" : "text-gray-600"
											} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
										>
											<PlayIcon className="w-5 h-5 mr-2" aria-hidden="true" />
											Activate
										</button>
									)}
								</Menu.Item>
							)}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
