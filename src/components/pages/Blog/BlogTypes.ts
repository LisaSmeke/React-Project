export interface BlogContentProps {
  content: {
    posts: {
      id: number;
      category: string;
      title: string;
      by: string;
      date: string;
      body: string;
      img: string;
      href: string;
      share: string;
    }[];
  };
}
