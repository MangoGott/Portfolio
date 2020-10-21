import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import blogTempStyles from './blogTemp.module.scss'


export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug} }) {
            frontmatter {
                title
                date
            }
            html
        }
    }

`

const Projects = (props) => {
    return (
        <Layout>
            <div className={blogTempStyles.header}>
                <h1><Link className={blogTempStyles.posts} to='/projects'> {'Projects'}</Link>{ ' / ' + props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
            </div>
           
            <div className={blogTempStyles.body} 
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
            </div>
            
            <div className={blogTempStyles.return}>
                <Link to='/projects'> {'<<'} </Link>
            </div>
        </Layout>
    )
}

export default Projects