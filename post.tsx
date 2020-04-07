import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { BASE_URL } from '../utils/constants';
import axios from "axios";

export default function Posts() {
    const router = useRouter();
    const[currentPost, setCurrentPost] = useState( {
        id: '',
        title: '',
        body: '',
    });


    useEffect(() => {
        const getPost = async () => {
            await axios.get( BASE_URL, {

                params: {
                    title: router.query.title,
                }
            }).then(response => {
                const post = {
                    id: response.data[0].id,
                    title: response.data[0].title,
                    body: response.data[0].body,
                };

                setCurrentPost(post)
            });
        };
    }, []);


    return (
        <Layout>
            <Card title={router.query.title.toString()} isLink={false}>
                <h1>{router.query.title}</h1>
                <p>{currentPost.body}</p>
            </Card>
        </Layout>
    );
}