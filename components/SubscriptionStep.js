function SubscriptionStep({ step }) {
	return (
		<div className="flex justify-center items-center pb-4">
			{step === 1 ? (
				<div className="bg-white px-3.5 py-1 rounded-full border-2 border-black">
					<h1 className="text-black text-3xl">1</h1>
				</div>
			) : (
				<div className="bg-black px-3.5 py-1 rounded-full border-2 border-black">
					<h1 className="text-white text-3xl">1</h1>
				</div>
			)}
			<div>
				<hr className="bg-black w-7 m-auto h-1" />
			</div>
			{step === 2 ? (
				<div className="bg-white px-3.5 py-1 rounded-full border-2 border-black">
					<h1 className="text-black text-3xl">2</h1>
				</div>
			) : (
				<div className="bg-black px-3.5 py-1 rounded-full border-2 border-black">
					<h1 className="text-white text-3xl">2</h1>
				</div>
			)}
			<div>
				<hr className="bg-black w-7 m-auto h-1" />
			</div>
			{step === 3 ? (
				<div className="bg-white px-3.5 py-1 rounded-full border-2 border-black">
					<h1 className="text-black text-3xl">3</h1>
				</div>
			) : (
				<div className="bg-black px-3.5 py-1 rounded-full border-2 border-black">
					<h1 className="text-white text-3xl">3</h1>
				</div>
			)}
			<div>
				<hr className="bg-black w-7 m-auto h-1" />
			</div>
			{step === 4 ? (
				<div className="bg-white px-3.5 py-1 rounded-full border-2 border-black">
					<h1 className="text-black text-3xl">4</h1>
				</div>
			) : (
				<div className="bg-black px-3.5 py-1 rounded-full border-2 border-black">
					<h1 className="text-white text-3xl">4</h1>
				</div>
			)}
		</div>
	);
}

export default SubscriptionStep;
