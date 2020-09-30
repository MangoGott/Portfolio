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

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div className={blogTempStyles.posts} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
            </div>
            <Link to='/blog'> {'<<'} </Link>

        </Layout>
    )
}

export default Blog