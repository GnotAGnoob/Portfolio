export const Footer = () => {
	// string with copyright
	const copyright = "© 2020 GnoTagnoob";
	return (
		<footer className="w-full mt-auto">
			<div className="border-t-2 border-[color:var(--clr-primary-700)] py-5 px-3">
				{"Kontakt: "}
				<a href="mailto:danisvatek@gmail.com">
					<i className="ml-5 mr-2 fas fa-envelope"></i>
					danisvatek@gmail.com
				</a>
			</div>
		</footer>
	);
};
