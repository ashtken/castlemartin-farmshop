import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, more, recentPosts } from "./MenuItems";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import AuthDetails from "../AuthDetails";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Header = () => {
	return (
		<Popover className="relative">
			{({ open }) => (
				<>
					<div className="max-w- mx-auto px-4 sm:px-6">
						<div className="flex justify-between items-center py-6 l">
							{/* Logo */}
							<div>
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
							{/* Nav */}
							<div>
								<Popover.Group as="nav" className="hidden lg:flex space-x-10">
									{nav.map((item) => (
										<Link key={item.name} href={item.href}>
											<a className="text-base font-medium text-primaryGray hover:text-lightGray">
												{item.name}
											</a>
										</Link>
									))}

									<Popover className="relative">
										{({ open }) => (
											<>
												<Popover.Button
													className={classNames(
														open ? "text-lightGray" : "text-primaryGray",
														"group rounded-md inline-flex items-center text-base font-medium hover:text-lightGray"
													)}
												>
													<span>MORE</span>
													<ChevronDownIcon
														className={classNames(
															open ? "text-lightGray" : "text-primaryGray",
															"ml-2 h-5 w-5 group-hover:text-lightGray"
														)}
														aria-hidden="true"
													/>
												</Popover.Button>

												<Transition
													show={open}
													as={Fragment}
													enter="transition ease-out duration-200"
													enterFrom="opacity-0 translate-y-1"
													enterTo="opacity-100 translate-y-0"
													leave="transition ease-in duration-150"
													leaveFrom="opacity-100 translate-y-0"
													leaveTo="opacity-0 translate-y-1"
												>
													<Popover.Panel
														static
														className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
													>
														<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
															<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
																{more.map((item) => (
																	<a
																		key={item.name}
																		href={item.href}
																		className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
																	>
																		<item.icon
																			className="flex-shrink-0 h-6 w-6 text-lightGray"
																			aria-hidden="true"
																		/>
																		<div className="ml-4">
																			<p className="text-base font-medium text-primaryGray">
																				{item.name}
																			</p>
																			<p className="mt-1 text-sm text-lightGray">
																				{item.description}
																			</p>
																		</div>
																	</a>
																))}
															</div>
															<div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
																<div>
																	<h3 className="text-sm tracking-wide font-medium text-lightGray uppercase">
																		Recent Posts
																	</h3>
																	<ul className="mt-4 space-y-4">
																		{recentPosts.map((post) => (
																			<li
																				key={post.id}
																				className="text-base truncate"
																			>
																				<a
																					href={post.href}
																					className="font-medium text-primaryGray hover:text-lightGray"
																				>
																					{post.name}
																				</a>
																			</li>
																		))}
																	</ul>
																</div>
																<div className="mt-5 text-sm">
																	<a
																		href="#"
																		className="font-medium text-primaryGray hover:text-lightGray"
																	>
																		View all posts
																		<span aria-hidden="true">&rarr;</span>
																	</a>
																</div>
															</div>
														</div>
													</Popover.Panel>
												</Transition>
											</>
										)}
									</Popover>
								</Popover.Group>
							</div>
							{/* Menu */}
							<div>
								<div className="-mr-2 my-2">
									<Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-primaryGray hover:text-lightGray">
										<span className="sr-only">Open menu</span>
										<MenuIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
								<Transition
									show={open}
									as={Fragment}
									enter="duration-200 ease-out"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="duration-100 ease-in"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Popover.Panel
										focus
										static
										className="absolute top-0 inset-x-0 p-2 transition transform z-40 md:max-w-md md:left-auto md:w-full"
									>
										<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
											<div className="pt-5 pb-6 px-5">
												<div className="flex items-center justify-between">
													<div>
														<Image
															className="h-8 w-auto sm:h-10"
															src="/vercel.svg"
															alt=""
															width={75}
															height={50}
														/>
													</div>
													<div className="-mr-2">
														<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
															<span className="sr-only">Close menu</span>
															<XIcon className="h-6 w-6" aria-hidden="true" />
														</Popover.Button>
													</div>
												</div>
												<div className="mt-6">
													<nav className="grid gap-y-3">
														{nav.map((item) => (
															<Link key={item.name} href={item.href}>
																<a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
																	<span className="ml-3 text-base font-medium text-primaryGray">
																		{item.name}
																	</span>
																</a>
															</Link>
														))}
													</nav>
												</div>
											</div>
											<div className="py-6 px-5 space-y-6">
												<div className="grid grid-cols-2 gap-y-4 gap-x-8">
													{more.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className="text-base font-medium text-primaryGray hover:text-lightGray"
														>
															{item.name}
														</a>
													))}
												</div>
												<div>
													<AuthDetails />
												</div>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</div>
						</div>
					</div>
				</>
			)}
		</Popover>
	);
};

export default Header;
