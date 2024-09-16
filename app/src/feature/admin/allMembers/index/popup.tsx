import {
	type FocusEventHandler,
	type PropsWithChildren,
	useState,
} from "react";

type Props = {
	opener: React.ReactNode;
};

export const PopupMenu = ({ opener, children }: PropsWithChildren<Props>) => {
	const [visible, setVisible] = useState(false);

	const handleFocus = () => {
		setVisible(true);
	};

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleBlur = (event: any) => {
		console.log("handleBlur", event.currentTarget);

		// 非表示にする
		setVisible(false);
	};

	return (
		<nav className="flex items-center justify-between h-full p-3 m-auto">
			<div className="relative">
				<button
					id="user-menu"
					type="button"
					aria-haspopup="true"
					onClick={handleFocus}
				>
					{opener}
				</button>

				<div
					id="user-menu-dropdown"
					className={`absolute z-50 bg-white right-0 w-48 mt-2 origin-top-right rounded-lg shadow-lg transform ${
						visible
							? "scale-100 opacity-100 ease-in duration-100"
							: "scale-0 opacity-0 ease-out duration-75"
					} top-13`}
					// TODO: dropdown要素以外をクリックした時(blur)に現状とじない。ため一旦ここにイベントをつけている状態。要修正
					onBlur={handleBlur}
				>
					{/* onclickした */}
					{children}
				</div>
			</div>
		</nav>
	);
};
