export const AppTextInput = ({ ...props }) => {
	return (
		<div>
			<input {...props} />
			<div>{props.error}</div>
		</div>
	);
};
