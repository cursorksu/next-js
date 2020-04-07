import React, { useState } from 'react';
import axios from 'axios';
import { Modal  } from '../components/Modal';
import { Layout  } from '../components/Layout';
import { Form  } from '../components/Form';
import { Card  } from '../components/Card';

const BASE_URL ='https://simple-blog-api.crew.red/posts';

export default function New() {
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[currentTitle, setCurrentTitle] = useState('');

    const setNewPost = async (post) => {
        setCurrentTitle(post.title);
        setIsModalOpen(true);
        await axios({
            method: 'post',
            url: `${BASE_URL}`,
            data: post,
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentTitle('');
    };

    return (
        <Layout>
            <Card title="Create new post now!" isLink={false}>
              <Form onSubmitForm={setNewPost} />
            </Card>
            {isModalOpen &&
                <Modal onClose={closeModal} title={currentTitle}>
                    <p>Success!!!</p>
                    <p>The post was successfully added!</p>
                </Modal>
            }
        </Layout>
    );
}
