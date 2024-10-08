/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/tokens
 */

export const AspectRatio = () => {
	return (
		<section className="flex flex-col gap-8">
			<div>
				<h2 className="text-std-28B-5">Aspect Ratio</h2>
			</div>
			<div className="flex flex-wrap gap-8">
				<div className="flex flex-col gap-2">
					<div className="aspect-16/9 w-[300px] bg-solid-grey-400" />
					<span className="text-dns-14N-3">16:9</span>
				</div>

				<div className="flex flex-col gap-2">
					<div className="aspect-3/2 w-[300px] bg-solid-grey-400" />
					<span className="text-dns-14N-3">3:2</span>
				</div>

				<div className="flex flex-col gap-2">
					<div className="aspect-1/1 w-[300px] bg-solid-grey-400" />
					<span className="text-dns-14N-3">1:1</span>
				</div>
			</div>
		</section>
	);
};
