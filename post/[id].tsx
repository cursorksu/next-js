import React, { FC } from 'react';
import { NextPageContext } from 'next';
import axios from 'axios';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';
import { Title } from '../../components/Card/CardStyles';

interface Post {
  id: string | number;
  title: string;
  body: string;
  comments?: Comment[];
}

interface Props {
  post: Post;
}

const Post: FC<Props> & {
  getInitialProps?(context: NextPageContext): Promise<Props> | Props;
} = ({ post }) => {
  return (
    <Layout>
      <Card heading={post.title}>
        <div>{post.body}</div>
        {post.comments.length > 0 && <Title>Comments</Title>}
        <ul>
          {post.comments.map((item) => (
            <li key={item.id}>{item.body}</li>
          ))}
        </ul>
      </Card>
    </Layout>
  );
};

Post.getInitialProps = async (context): Promise<{ post: Post }> => {
  const { id } = context.query;
  const postWithComments = await axios.get(
    `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`,
  );
  const post = postWithComments.data;

  return {
    post,
  };
};

export default Post;
