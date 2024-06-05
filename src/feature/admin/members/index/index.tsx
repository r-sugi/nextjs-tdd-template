import { FC } from 'react';

import { memberStatus } from '@/core/domains/member/status';
import { useFetchMembers } from '@/core/usecases/member/useFetchMembers.query';

export const IndexTemplate: FC = () => {
  const { data, refetch, loading } = useFetchMembers();

  if (loading) {
    return <div>loading...</div>;
  }

  const memberListComponent = () => {
    return (
      <ul>
        {data.members.map((member) => (
          <li key={member.statusActivityId}>{JSON.stringify(member, null, 2)}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {/* TODO: styleに関するリファクタ */}
      <style jsx={true}>{`
        .tab-wrap {
          display: flex;
          flex-wrap: wrap;
        }
        .tab-label {
          color: White;
          background: LightGray;
          margin-right: 5px;
          padding: 3px 12px;
          order: -1;
        }
        .tab-content {
          width: 100%;
          display: none;
        }
        /* アクティブなタブ */
        .tab-switch:checked + .tab-label {
          background: DeepSkyBlue;
        }
        .tab-switch:checked + .tab-label + .tab-content {
          display: block;
        }
        /* ラジオボタン非表示 */
        .tab-switch {
          display: none;
        }
      `}</style>
      {/* TODO: componentsのリファクタ */}
      {/* メンバー一覧 */}
      <div className="tab-wrap">
        <input
          id={memberStatus.pendingActivation}
          type="radio"
          name="TAB"
          className="tab-switch"
          checked={data.queryMemberStatus === memberStatus.pendingActivation}
          onChange={() => refetch(memberStatus.pendingActivation)}
        />
        <label className="tab-label" htmlFor={memberStatus.pendingActivation}>
          認証前
        </label>
        <div className="tab-content">{memberListComponent()}</div>
        <input
          id={memberStatus.active}
          type="radio"
          name="TAB"
          className="tab-switch"
          checked={data.queryMemberStatus === memberStatus.active}
          onChange={() => refetch(memberStatus.active)}
        />
        <label className="tab-label" htmlFor={memberStatus.active}>
          アクティブ
        </label>
        <div className="tab-content">{memberListComponent()}</div>
        <input
          id={memberStatus.resigned}
          type="radio"
          name="TAB"
          className="tab-switch"
          checked={data.queryMemberStatus === memberStatus.resigned}
          onChange={() => refetch(memberStatus.resigned)}
        />
        <label className="tab-label" htmlFor={memberStatus.resigned}>
          退会済み
        </label>
        <div className="tab-content">{memberListComponent()}</div>
        <input
          id={memberStatus.banned}
          type="radio"
          name="TAB"
          className="tab-switch"
          checked={data.queryMemberStatus === memberStatus.banned}
          onChange={() => refetch(memberStatus.banned)}
        />
        <label className="tab-label" htmlFor={memberStatus.banned}>
          アカウント停止
        </label>
        <div className="tab-content">{memberListComponent()}</div>
      </div>
    </div>
  );
};