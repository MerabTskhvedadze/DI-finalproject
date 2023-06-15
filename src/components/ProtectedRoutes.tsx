import { PropsWithChildren, useEffect, useState, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { TUser_Roles } from 'context/AuthContext';
import { Loading } from 'views/Loading';

const PageNotFound = lazy(() => import('views/PageNotFound'));

type ProtectedRoutesProps = {
  roles: TUser_Roles[];
  currentRole: TUser_Roles;
};

export function ProtectedRoutes({
  roles,
  currentRole,
}: PropsWithChildren<ProtectedRoutesProps>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (roles.includes(currentRole)) {
    return <Outlet />;
  }

  return <PageNotFound />;
}
