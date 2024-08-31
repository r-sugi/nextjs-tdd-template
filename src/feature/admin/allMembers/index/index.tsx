import { type FC, useEffect, useRef } from "react";

import { Button, Dialog } from "@/components";
import { DialogBody } from "@/components/dialog/Dialog";
import { useFetchAllMembers } from "@/core/usecases/member/useFetchAllMembers.query";

import { MemberTable } from "./table/table";

export const IndexTemplate: FC = () => {
	const { data, loading } = useFetchAllMembers();

	// TODO: データ型を変換しておく
	const ref = useRef<HTMLDialogElement>(null);

	// useEffect(() => {
	// 	if (!loading) {
	// 		ref?.current?.showModal();
	// 	}
	// }, [loading]);

	if (loading) {
		return <div>loading...</div>;
	}
	if (data?.members === null) {
		return (
			<div data-testid="admin-members-index-error">
				CSR リクエストエラー: データ取得に失敗しました
			</div>
		);
	}

	return (
		<div data-testid="admin-members-index">
			<button
				type="button"
				onClick={() => {
					ref.current?.showModal();
					// trueにする
				}}
			>
				show
			</button>

			<button
				type="button"
				onClick={() => {
					ref.current?.close();
				}}
			>
				close
			</button>

			{/* メンバー一覧 */}
			<div className="container mx-auto">
				<h1 className="text-2xl font-bold mb-4">Members</h1>
				<MemberTable members={data.members} />

				<Dialog ref={ref}>
					<DialogBody>
						<h2
							className="text-std-24B-5 desktop:text-std-28B-5"
							id="example-heading1"
						>
							ダイアログタイトル
						</h2>
						<p className="text-std-16N-7">
							ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
						</p>
						<div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
							<Button
								onClick={() => {
									ref.current?.close();
								}}
								size="lg"
								variant="primary"
							>
								中断する
							</Button>
							<Button
								onClick={() => {
									ref.current?.close();
								}}
								size="lg"
								variant="tertiary"
							>
								キャンセル
							</Button>
						</div>
					</DialogBody>
				</Dialog>
			</div>
		</div>
	);
};
