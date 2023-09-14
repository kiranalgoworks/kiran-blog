import React from "react";
import { Link } from "gatsby";
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css';

const Layout = ({ pageTitle, children }: { pageTitle: String; children: JSX.Element|JSX.Element[] }) => {
  const activeRoute = window.location.pathname;
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
        <li className={navLinkItem}>
            <Link to="/" className={navLinkText} activeStyle={{ color: "blue" }} activeClassName="active"> Home </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText} activeStyle={{ color: "blue" }} activeClassName="active"> About </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText} activeStyle={{ color: "blue" }} activeClassName="active"> Blog </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{ pageTitle }</h1>
        { children }
      </main>
    </div>
  )
}

export default Layout;
