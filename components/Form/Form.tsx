import React, { useState, FC } from 'react';
import { v4 } from 'uuid';
import { Label, Input, Textarea, Button, ErrorMess } from './FormStyles';

interface Props {
  onSubmitForm: (post: Post) => Promise<void>;
  currentPost?: Post;
}

export const Form: FC<Props> = ({ onSubmitForm, currentPost }) => {
  const [post, setPost] = useState(
    currentPost || { id: '', title: '', body: '' },
  );
  const [error, setError] = useState('');

  const handleSubmitCreate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!post.title || !post.body) {
      setError('Why do you want to send an empty posts? Write something!');

      return;
    }

    const preparedPost = {
      ...post,
      title: post.title.trim(),
      body: post.body.trim(),
    };

    onSubmitForm(preparedPost);
    setPost({ id: '', title: '', body: '' });
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const id = v4().substring(0, 6);

    setError('');
    setPost({
      ...post,
      id,
      title: event.target.value,
    });
  };

  const handleBody = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setError('');
    setPost({
      ...post,
      body: event.target.value,
    });
  };

  return (
    <form action="#" onSubmit={handleSubmitCreate}>
      {error && <ErrorMess>{error}</ErrorMess>}
      <Label htmlFor="title">
        <p>Post`s title</p>
        <Input
          placeholder="Input Title of Post"
          id="title"
          type="text"
          value={post.title}
          onChange={handleTitle}
        />
      </Label>
      <Label htmlFor="body">
        <p>Post`s text</p>
        <Textarea
          placeholder="Input Body of Post"
          id="body"
          value={post.body}
          onChange={handleBody}
        />
      </Label>
      <Button type="submit">{currentPost ? 'Edit posts' : 'Create posts'}</Button>
    </form>
  );
};
