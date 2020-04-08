import React, { FC } from 'react';
import Link from 'next/link';
import { ItemWrapper, Item, Title } from './CardStyles';

interface Props {
  heading?: string;
  title?: string;
  id?: string | number;
}

export const Card: FC<Props> = ({ heading, title, id, children }) => (
  <Item>
    <ItemWrapper>
      <div>
        <Title>
          {heading && <span>{heading}</span>}
          {title && (
            <Link href="/post/[id]" as={`/post/${id}`}>
              <a href="/post">{`${title}`}</a>
            </Link>
          )}
        </Title>
        {children}
      </div>
    </ItemWrapper>
  </Item>
);
