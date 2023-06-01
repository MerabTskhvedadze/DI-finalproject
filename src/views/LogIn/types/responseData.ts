type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type responseData = {
  User: User;
  AccessToken: string;
};
