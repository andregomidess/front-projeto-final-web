export interface Book {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    ISBN?: string;
    pageCount?: number;
    averageRating?: number;
    thumbnail?: string;
    language?: string;
    amount?: number;
    buyLink?: string;
    categories?: string;
  }
