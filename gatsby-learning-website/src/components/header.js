import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
/* 
1) using css module is being very explicit in how we are using styles.
2) explicitly importing specific file and set of style
3) applying directly to the element
4) prevent the possibility of collision with other global components from other files 
5) when you inspect the element - {headerStyles.link} generates a unique class name
*/

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Michael Su
        </Link>
      </h1>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            {/* using activeClassName allows your web page to display visual cue for users */}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
