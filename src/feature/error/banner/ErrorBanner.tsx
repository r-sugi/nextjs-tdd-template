import { useErrorNotificationContext } from "./ErrorNotificationContext";

export const ErrorBanner = () => {
	const { items } = useErrorNotificationContext();

	if (items.length === 0) {
		return null;
	}
	return (
		<div data-testid="error-banner">
			{items.map((item) => (
				<div key={item.myErrorCode} style={{ color: "red" }}>
					<p>
						エラーコード:<span>{item.myErrorCode}</span>
					</p>
					<p>{item.message}</p>
				</div>
			))}
		</div>
	);
};
