export type User = {
  username: string;
  email: string;
  token: string;
  bio: string;
  image: string;
};

export type UserResponse = {
  user: User;
};
