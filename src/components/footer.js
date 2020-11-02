import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.content}>
                 <p><span>Built by {data.site.siteMetadata.author}, © 2020 </span></p>
            </div>
        </footer>   
    )
}

export default Footer