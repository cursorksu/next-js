import React, {useState, FC} from 'react';
import {errorMess, newPost} from "../../pages/styles/PostStyles";
import axios from "axios";
import { v4 } from 'uuid';


interface Props {
    onSubmitForm: (post?: Post) => void;
    currentPost?: Post;
}

export const Form: FC<Props> = ({ onSubmitForm, currentPost }) => {
    const[post, setPost] = useState(currentPost ? currentPost : { id: '', title: '', body: ''});
    const[error, setError] = useState('');

    const handleSubmitCreate = async (e) => {
        e.preventDefault();

        if(!post.title || !post.body) {
            setError('Why do you want to send an empty post? Write something!');
            return;
        }

        onSubmitForm(post);
        setPost({ id: '', title: '', body: ''});
    };

    const handleTitle = (event) => {
        const id = v4().substring(0, 6);
        setError('');
        setPost({
            ...post,
            id: id,
            title: event.target.value,
        });
    };

    const handleBody = (event) => {
        setError('');
        setPost({
            ...post,
            body: event.target.value,
        });
    };


    return (
        <form action="#" onSubmit={handleSubmitCreate}>
            {error && <errorMess.TitleError>{error}</errorMess.TitleError>}
            <newPost.Label htmlFor="title">
                <p>Post`s title</p>
                <newPost.Input
                    placeholder="Input Title of Post"
                    id="title"
                    type="text"
                    value={post.title}
                    onChange={handleTitle}
                />
            </newPost.Label>
            <newPost.Label htmlFor="body">
                <p>Post`s text</p>
                <newPost.Textarea
                    placeholder="Input Body of Post"
                    id="body"
                    value={post.body}
                    onChange={handleBody}
                />
            </newPost.Label>
            <newPost.Button type="submit">{currentPost ? 'Edit post' : 'Create post'}</newPost.Button>
        </form>
    );
}