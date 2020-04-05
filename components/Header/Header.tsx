import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { s } from './HeaderStyles';

export const Header = () => {
    const router = useRouter();

    return (
        <s.Nav>
            <s.NavList>
                <s.NavItem className={router.pathname === "/" ? "active" : ""}>
                    <Link href="/">
                        <s.NavLink title="Last Post">Last Post</s.NavLink>
                    </Link>
                </s.NavItem>
                <s.NavItem className={router.pathname === "/posts" ? "active" : ""}>
                    <Link href="/posts">
                        <s.NavLink title="List of posts">List of posts</s.NavLink>
                    </Link>
                </s.NavItem>
                <s.NavItem  className={router.pathname === "/new" ? "active" : ""}>
                    <Link href="/new">
                        <s.NavLink title="New post">New post</s.NavLink>
                    </Link>
                </s.NavItem>
            </s.NavList>
        </s.Nav>
    );
}