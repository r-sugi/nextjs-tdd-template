import { createPortal } from "react-dom";
import { useRef, useEffect, useState, type ReactNode } from "react";

export type IProps = {
	selector: string;
	children: ReactNode;
};

export default function ClientOnlyPortal(props: IProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector(props.selector);
		setMounted(true);
	}, [props.selector]);

	return mounted && ref?.current
		? createPortal(props.children, ref.current)
		: null;
}
