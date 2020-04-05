import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import axios from "axios";

const BASE_URL ='https://simple-blog-api.crew.red/posts';

export default function Posts() {
    const router = useRouter();
    const[currentPost, setCurrentPost] = useState<Post>( {
        id: '',
        title: '',
        body: '',
    });

    const getPost = async () => {
       await axios.get( BASE_URL, {
            params: {
                title: router.query.title,
            }
        }).then(response => {
            console.log(response);

            const post = {
                id: response.data[0].id,
                title: response.data[0].title,
                body: response.data[0].body,
            };

            setCurrentPost(post)
        });
    };

    useEffect(() => {
        getPost();
    }, []);


    return (
        <Layout>
            <Card title={router.query.title.toString()}>
                <h1>{router.query.title}</h1>
                <p>{currentPost.body}</p>
            </Card>
        </Layout>
    );
}