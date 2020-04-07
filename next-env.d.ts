// / <reference types="next" />
// / <reference types="next/types/global" />

import { Action } from 'react-redux';

interface Post {
  id: string|number;
  title: string;
  body: string;
}


interface PostsState {
  posts: [],
  isLoading: false,
  isLoaded: false,
  modal: false,
}

interface PostsAction extends Action {
  type: string;
}
