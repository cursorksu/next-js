import React, { useState } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import { List, PostBody } from './PostListStyles';
import { Card } from '../Card';
import { Modal } from '../Modal';
import { Form } from '../Form';
import { Buttons } from '../Buttons';
import { BASE_URL } from '../../utils/constants';

interface Props {
  postList: Post[];
}

export const PostList: NextPage<Props> = ({ postList }) => {
  const [posts, setPosts] = useState(postList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const deletePost = async (id): Promise<void> => {
    await axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);

    await axios.get(BASE_URL).then(({ data }) => {
      setPosts(data.reverse());
    });
  };

  const handleClickDelete = (id: string | number): void => {
    deletePost(id).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  const handleClickEdit = (id: string | number): void => {
    setIsModalOpen(true);
    setCurrentPost(postList.find((post) => post.id === id));
  };

  const editPost = async (post): Promise<void> => {
    await axios({
      method: 'PUT',
      url: `${BASE_URL}/${currentPost.id}`,
      data: post,
    }).then(() => {
      setIsModalOpen(false);
      setCurrentPost(null);
    });

    await axios.get(BASE_URL).then(({ data }) => {
      setPosts(data.reverse());
    });
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <List>
        {posts.map(({ id, title, body }) => (
          <Card key={id} title={title} id={id}>
            <Buttons
              onEdit={(): void => handleClickEdit(id)}
              onDelete={(): void => handleClickDelete(id)}
            />
            <PostBody>{body}</PostBody>
          </Card>
        ))}
      </List>
      {isModalOpen && (
        <Modal onClose={closeModal} title={currentPost.title}>
          <Form onSubmitForm={editPost} currentPost={currentPost} />
        </Modal>
      )}
    </>
  );
};
