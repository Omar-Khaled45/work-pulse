const Heading = ({ title, children = null }) => {
	return (
		<div className="space-y-2">
			<h2 className="flex items-center gap-4 text-3xl font-bold">{title}</h2>

			{children && <p className="text-muted-foreground">{children}</p>}
		</div>
	);
};

export default Heading;
