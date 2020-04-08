// <reference types="next" />
// <reference types="next/types/global" />

interface Post {
  id: number | string;
  title: string;
  body: string;
  comments?: Comment[] | [];
}

interface Comment {
  id: number | string;
  postId: number;
  body: string;
}