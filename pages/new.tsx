import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Modal } from '../components/Modal';
import { Layout } from '../components/Layout';
import { Form } from '../components/Form';
import { Card } from '../components/Card';

const BASE_URL = 'https://simple-blog-api.crew.red/posts';

const New: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const router = useRouter();

  const setNewPost = async (post): Promise<void> => {
    setCurrentTitle(post.title);
    setIsModalOpen(true);
    await axios({
      method: 'post',
      url: `${BASE_URL}`,
      data: post,
    });
  };

  const closeModal = async (): Promise<void> => {
    await router.push('/');
    setIsModalOpen(false);
    setCurrentTitle('');
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/explicit-function-return-type
    function handleRemoveClick() {
      document.removeEventListener('click', closeModal);
    }
  }, []);

  return (
    <Layout>
      <Card heading="Create new post now!">
        <Form onSubmitForm={setNewPost} />
      </Card>
      {isModalOpen && (
        <Modal onClose={closeModal} title={currentTitle}>
          <p>Success!!!</p>
          <p>The post was successfully added!</p>
        </Modal>
      )}
    </Layout>
  );
};

export default New;
