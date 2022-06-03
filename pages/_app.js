import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { SubscriptionContextProvider } from "../contexts/SubscriptionContext";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<SubscriptionContextProvider>
				<Component {...pageProps} />
			</SubscriptionContextProvider>
		</SessionProvider>
	);
}
