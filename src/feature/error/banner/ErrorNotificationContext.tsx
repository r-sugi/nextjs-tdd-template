import type { AppErrorMessage } from "@/error/const";
import {
	type FC,
	type PropsWithChildren,
	createContext,
	useContext,
	useState,
} from "react";

type NotificationItem = {
	message: string;
	myErrorCode: string;
};

type ErrorNotificationStore = {
	items: Readonly<NotificationItem[]>;
	notify: (appErrorMessage: AppErrorMessage) => void;
	clear: () => void;
};

const initialState: ErrorNotificationStore = {
	items: [],
	notify: () => {},
	clear: () => {},
};

const useErrorNotification = (): ErrorNotificationStore => {
	const [items, setItems] = useState<NotificationItem[]>([]);

	const notify = (appErrorMessage: AppErrorMessage) => {
		const item = {
			message: appErrorMessage.message,
			myErrorCode: appErrorMessage.myErrorCode,
		};
		setItems([item]);
	};

	const clear = () => {
		if (items.length >= 1) {
			setItems([]);
		}
	};

	return {
		items,
		notify,
		clear,
	};
};

const ErrorNotificationContext =
	createContext<ErrorNotificationStore>(initialState);

type Props = {
	customId: string;
};

export const ErrorNotificationProvider: FC<PropsWithChildren<Props>> = ({
	customId,
	children,
}) => {
	return (
		// TODO: 要確認(ページ遷移時にDOMの初期化を行うため、id属性を設定している)
		<div key={customId}>
			<ErrorNotificationContext.Provider value={useErrorNotification()}>
				{children}
			</ErrorNotificationContext.Provider>
		</div>
	);
};

export const useErrorNotificationContext = () =>
	useContext(ErrorNotificationContext);
