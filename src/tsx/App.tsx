import { FunctionComponent } from "react";
import { Footer } from "./common/Footer";
import { Portfolio } from "./pages/Portfolio";

export const App: FunctionComponent = () => {
	return (
		<div className="px-5 md:px-20 mx-auto w-full max-w-[1920px]">
			<main className="flex flex-col justify-center mt-8 md:mt-16 mb-32 ">
				<Portfolio />
			</main>
			<Footer />
		</div>
	);
};
