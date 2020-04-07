import React, {FC} from 'react';
import { ItemWrapper, Item, Title } from "./CardStyles";
import Link from 'next/link';

interface Props {
    title?: string;
    children?: any;
    isLink: boolean;
}

export const Card: FC<Props> = ({ title, isLink, children }) => (
    <Item>
        <ItemWrapper>
            {isLink
                ?
                (<Title>
                    <Link href={`/post?title=${title}`}>
                        <a title={title}>{title}</a>
                    </Link>
                </Title>)
                :
                (<Title>
                    {title}
                </Title>)
            }
            { children }
        </ItemWrapper>
    </Item>
);