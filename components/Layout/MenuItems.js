import {
	BookmarkAltIcon,
	CalendarIcon,
	ShieldCheckIcon,
	SupportIcon,
} from "@heroicons/react/outline";

export const nav = [
	{
		name: "HOME",
		href: "/",
	},
	{
		name: "SUBSCRIPTION",
		href: "/subscription/content",
	},
	{
		name: "ABOUT",
		href: "/about",
	},
];

export const more = [
	{
		name: "Blog",
		description: "Find us on your favourite social media platform.",
		href: "/blog",
		icon: BookmarkAltIcon,
	},
	{
		name: "Events",
		description: "See what meet-ups and other events we might be planning.",
		href: "/events",
		icon: CalendarIcon,
	},
	{
		name: "FAQs",
		description: "Get all of your questions answered.",
		href: "/faq",
		icon: SupportIcon,
	},
	{
		name: "Contact Us",
		description: "If you would like a chat then get in touch here.",
		href: "/contactus",
		icon: ShieldCheckIcon,
	},
];

export const recentPosts = [
	{ id: 1, name: "Find out more about local nature", href: "/blog/1" },
	{
		id: 2,
		name: "How to improve farming productivity",
		href: "/blog/2",
	},
	{
		id: 3,
		name: "Find out more about the farms we work with",
		href: "/blog/3",
	},
];

export const social = [
	{
		name: "Facebook",
		href: "www.Facebook.com",
		icon: SupportIcon,
	},
	{
		name: "Twitter",
		href: "www.twitter.com",
		icon: SupportIcon,
	},
	{
		name: "Instagram",
		href: "www.instagram.com",
		icon: SupportIcon,
	},
];
