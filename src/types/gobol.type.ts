export type TBlogs = {
  title: string;
  image: string;
  content: string;
  author: string;
  email: string;
  authorImage?: string;
  date: string;
  _id: string;
};

export type TProject = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  github: string;
  liveSite: string;
  date: string;
  _id: string;
};

export type TMessages = {
  name: string;
  email: string;
  message: string;
  _id: string;
};
