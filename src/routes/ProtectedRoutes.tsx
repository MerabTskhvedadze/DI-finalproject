import { PropsWithChildren, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { TUser_Roles, useAccessContext } from 'context/AccessContext';

import { Loading } from 'views/Loading';

const PageNotFound = lazy(() => import('views/PageNotFound'));

type ProtectedRoutesProps = {
  roles: TUser_Roles[];
};

export function ProtectedRoutes({
  roles,
}: PropsWithChildren<ProtectedRoutesProps>) {
  const { pending, currentRole } = useAccessContext();

  if (pending) {
    return <Loading />;
  }

  if (roles.includes(currentRole)) {
    return <Outlet />;
  }

  return <PageNotFound />;
}
