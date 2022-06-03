import { createContext, useState } from "react";

export const SubscriptionContext = createContext();

const setLocalContentState = (contents) => {
	if (typeof window !== "undefined") {
		localStorage.setItem(
			"contents",
			JSON.stringify(contents.length > 0 ? contents : [])
		);
	}
};

const initialContentState =
	typeof window !== "undefined"
		? localStorage.getItem("contents")
			? JSON.parse(localStorage.getItem("contents"))
			: []
		: [];

const setLocalSizeState = (size) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("size", JSON.stringify(size.length > 0 ? size : ""));
	}
};

const initialSizeState =
	typeof window !== "undefined"
		? localStorage.getItem("size")
			? JSON.parse(localStorage.getItem("size"))
			: ""
		: "";

const setLocalFrequencyState = (frequency) => {
	if (typeof window !== "undefined") {
		localStorage.setItem(
			"frequency",
			JSON.stringify(frequency.length > 0 ? frequency : "")
		);
	}
};

const initialFrequencyState =
	typeof window !== "undefined"
		? localStorage.getItem("frequency")
			? JSON.parse(localStorage.getItem("frequency"))
			: ""
		: "";

export const SubscriptionContextProvider = ({ children }) => {
	const [contents, setContents] = useState(initialContentState);
	const [size, setSize] = useState(initialSizeState);
	const [frequency, setFrequency] = useState(initialFrequencyState);

	const addContents = (data) => {
		try {
			setLocalContentState(data);
			setContents(data);
		} catch (error) {
			console.log(error);
		}
	};

	const addSize = (data) => {
		try {
			setLocalSizeState(data);
			setSize(data);
		} catch (error) {
			console.log(error);
		}
	};

	const addFrequency = (data) => {
		try {
			setLocalFrequencyState(data);
			setFrequency(data);
		} catch (error) {
			console.log(error);
		}
	};

	const clearSubscription = () => {
		try {
			setLocalContentState([]);
			setContents([]);
			setLocalSizeState("");
			setSize("");
			setLocalFrequencyState("");
			setFrequency("");
		} catch (error) {
			console.log(error);
		}
	};

	const value = {
		contents,
		setContents,
		size,
		setSize,
		frequency,
		setFrequency,
		addContents,
		addSize,
		addFrequency,
		clearSubscription,
	};

	return (
		<SubscriptionContext.Provider value={value}>
			{children}
		</SubscriptionContext.Provider>
	);
};
