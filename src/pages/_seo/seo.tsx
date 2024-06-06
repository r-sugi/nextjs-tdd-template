import Head from "next/head";
import type { FC } from "react";

type SeoOptions = {
	robots?: "all" | "noindex" | "nofollow" | "none" | "noarchive" | "nosnippet";
};

export type SeoPops = {
	title: string;
	description: string;
	path: string;
	options?: SeoOptions;
};

export const Seo: FC<SeoPops> = ({ title, description, path, options }) => {
	const NEXT_HOST_URI = process.env.NEXT_HOST_URI;
	const defaultSeoOptions: SeoOptions = {
		robots: "all",
	};
	return (
		<Head>
			{
				<meta
					name="robots"
					content={options?.robots ?? defaultSeoOptions.robots}
				/>
			}

			<title>{title}</title>
			{description && (
				<meta key="description" name="description" content={description} />
			)}
			{/* og */}
			<meta property="og:url" content={`${NEXT_HOST_URI}${path}`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content={title} />
			<meta
				property="og:image"
				content={`${NEXT_HOST_URI}/this_is_og_image.png`} // イメージパスを指定する
			/>
			<meta property="og:image:alt" content="this_is_og_image" />
			<meta property="og:image:width" content={String(1200)} />
			<meta property="og:image:height" content={String(630)} />
			{/* twitter */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
		</Head>
	);
};
