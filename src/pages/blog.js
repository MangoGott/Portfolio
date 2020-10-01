import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import { LoremIpsum } from 'react-lorem-ipsum';
import Head from '../components/head'


import Layout from '../components/layout'
import blogStyles from './blog.module.scss'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node {
              frontmatter{
                title
                date
                featuredImage {
                    childImageSharp {
                      fixed(width: 250) {
                        ...GatsbyImageSharpFixed_withWebp
                      }
                    }
                  }
              }
              fields{
                slug
              }
            }
          }
        }
      }
    `)
    
    //console.log("HEJ MANNEN")
    //console.log(data.allMarkdownRemark.edges[0].node.frontmatter.title)
    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.total}>
                            
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                                          
                              <div>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>  
                              </div>

                              <div className={blogStyles.post}>

                                  <LoremIpsum p={1} />

                                  <div className={blogStyles.featuredImage}>                        
                                      <Img 
                                        fixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed}
                                      />
                                  </div>

                              </div>

                            

                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage

//<p>{edge.node.featuredImage.relativePath}</p>