import React, {FC} from 'react';
import { card } from "./CardStyles";
import Link from 'next/link';

interface Props {
    title?: string;
    children?: any;
}

export const Card: FC<Props> = ({ title, children }) => {
    return (
        <card.Item>
            <card.ItemWrapper>
                <card.Title>
                    <Link href={`/post?title=${title}`}>
                        <a title={ title} >{ title }</a>
                    </Link>
                </card.Title>
                { children }
            </card.ItemWrapper>
        </card.Item>
    );
}