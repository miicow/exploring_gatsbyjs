import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
/* 
1) using css module is being very explicit in how we are using styles.
2) explicitly importing specific file and set of style
3) applying directly to the element
4) prevent the possibility of collision with other global components from other files 
*/

const Header = () => {
  return (
    <header>
      <h1>Michael Su</h1>

      <nav>
        <ul>
          <li>
            <Link to="/" className={headerStyles.link}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
