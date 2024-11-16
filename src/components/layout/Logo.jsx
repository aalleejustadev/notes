export const Logo = ({ link, className }) => {
	return (
		<a
			href={link}
			className={`font-adobeCleanBold text-3xl text-tana-800 cursor-pointer ${className}`}
		>
			notes
		</a>
	);
};
