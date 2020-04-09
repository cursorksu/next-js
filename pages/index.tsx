import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { Layout } from '../components/Layout';
import { PostList } from '../components/PostList';
import { BASE_URL } from '../utils/constants';

interface Props {
  posts: Post[];
}

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <PostList postList={posts} />
    </Layout>
  );
};

Index.getInitialProps = async function (): Promise<{ posts: Post[] }> {
  const res = await axios.get(BASE_URL);

  return {
    posts: res.data.reverse(),
  };
};

export default Index;
