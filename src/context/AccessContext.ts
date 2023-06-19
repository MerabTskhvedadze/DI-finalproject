import { SetStateAction, createContext, useContext } from 'react';

export enum TUser_Roles {
  GUEST = 'guest',
  USER = 'user',
  ADMIN = 'admin',
}

type AccessContextValues = {
  pending: boolean;
  currentRole: TUser_Roles;
  setCurrentRole: React.Dispatch<SetStateAction<TUser_Roles>>;
};

export const AccessContext = createContext<AccessContextValues | undefined>(
  undefined
);

export const useAccessContext = (): AccessContextValues => {
  const context = useContext(AccessContext);
  if (!context) {
    throw new Error(
      'useProtectedContext must be used within a ProtectedProvider'
    );
  }
  return context;
};
