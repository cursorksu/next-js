import React, {FC} from 'react';
import { card } from "./CardStyles";
import Link from 'next/link';

interface Props {
    id?: string;
    title?: string;
    children?: any;
}

export const Card: FC<Props> = ({id, title, children }) => {
    return (
        <card.Item>
            <card.ItemWrapper>
                <card.Title>
                    <Link href={`/posts/${id}`}>
                        <a title={ title} >{ title }</a>
                    </Link>
                </card.Title>
                { children }
            </card.ItemWrapper>
        </card.Item>
    );
}