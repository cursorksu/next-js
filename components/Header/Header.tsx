import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { Nav, NavList, NavItem, NavLink } from './HeaderStyles';

export const Header = () => {
    const router = useRouter();

    return (
        <Nav>
            <NavList>
                <NavItem className={router.pathname === "/" ? "active" : ""}>
                    <Link href="/">
                        <NavLink title="Home">Home</NavLink>
                    </Link>
                </NavItem>
                <NavItem className={router.pathname.includes('/posts') ? "active" : ""}>
                    <Link href="/posts">
                        <NavLink title="List of posts">List of posts</NavLink>
                    </Link>
                </NavItem>
                <NavItem  className={router.pathname === "/new" ? "active" : ""}>
                    <Link href="/new">
                        <NavLink title="New post">New post</NavLink>
                    </Link>
                </NavItem>
            </NavList>
        </Nav>
    );
}