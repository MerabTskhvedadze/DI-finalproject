import { TUser_Roles } from 'types/user.types';
import { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRoutesProps = {
  roles: TUser_Roles[];
  currentRole: TUser_Roles;
};

export function ProtectedRoutes({
  roles,
  currentRole,
}: PropsWithChildren<ProtectedRoutesProps>) {
  if (roles.includes(currentRole)) {
    return <Outlet />;
  }

  return <Navigate to={'/'} replace />;
}
