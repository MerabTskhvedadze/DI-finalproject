import { AuthContext, TAuthorizationStage } from 'context/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export default function Settings() {
  const { status } = useContext(AuthContext);

  if (status !== TAuthorizationStage.AUTHORIZED) {
    return <Navigate to={'/'} />;
  }

  return <div>Settings page</div>;
}
