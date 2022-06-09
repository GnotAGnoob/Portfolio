import { IDataPortfolio } from "../data/DataPortfolio";

export const CardPortfolio = (props: IDataPortfolio) => {
	return (
		<a
			href={props.link}
			className="hover:scale-[103%] border-2 rounded-t-2xl border-[color:var(--clr-primary-600)] hover:border-[color:var(--clr-accent-400)] bg-[color:var(--clr-primary-800)] transition-all duration-200 pb-10 overflow-hidden w-full max-w-[50ch] mx-auto"
			target="_blank"
		>
			<article className="flex flex-col h-full">
				<div>
					<img
						className="object-cover object-top h-64"
						src={props.image}
						alt={props.alt}
					/>
				</div>
				<div className="flex flex-col h-full justify-center mt-7 mx-7">
					<h1 className="text-center capitalize">{props.title}</h1>
					<p className="mt-6 mb-9 whitespace-pre-wrap">{props.description}</p>
					<p className="primary-hover mt-auto text-sm">
						Zobtazit projekt
						<i className="ml-3 fas fa-external-link-alt"></i>
					</p>
				</div>
			</article>
		</a>
	);
};
