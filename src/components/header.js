import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import headerStyles from './header.module.scss'
const Header = () => {
   const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
   `)

    return (
    <div className={headerStyles.rowTime}>
        <header>
            
            <div className={headerStyles.header}>
            
                <div className={headerStyles.title}>   
                    <h1>
                        <Link to='/'>
                            {data.site.siteMetadata.title} 
                        </Link>
                    </h1>
                </div>

                <nav>
                    <ul className={headerStyles.navList}>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                
            </div>

        </header>
    </div>  
    )
}

export default Header