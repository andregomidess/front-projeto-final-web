export interface User {
    _id: string;
    name: string;
    email: string;
    permission: string | undefined;
    image: string;
    booksFavorite: string[];
  }