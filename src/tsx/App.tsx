import { FunctionComponent } from "react";
import { Footer } from "./common/Footer";
import { Portfolio } from "./pages/Portfolio";

export const App: FunctionComponent = () => {
	return (
		<div className="px-20">
			<main className="flex flex-col justify-center md:mt-16 mb-32 ">
				<Portfolio />
			</main>
			<Footer />
		</div>
	);
};
