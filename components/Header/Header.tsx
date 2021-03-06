import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Nav, NavList, NavItem, NavLink } from './HeaderStyles';

export const Header: FC = () => {
  const router = useRouter();

  return (
    <Nav>
      <NavList>
        <NavItem className={router.pathname === '/' ? 'active' : ''}>
          <Link href="/">
            <NavLink title="List of posts">List of posts</NavLink>
          </Link>
        </NavItem>
        <NavItem className={router.pathname === '/posts/new' ? 'active' : ''}>
          <Link href="/posts/new">
            <NavLink title="New post">New post</NavLink>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};
