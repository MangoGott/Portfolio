import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import Head from '../components/head'


import Layout from '../components/layout'
import blogStyles from './blog.module.scss'


const ProjectsPage = () => {
    let data = useStaticQuery(graphql`
    query{
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }
          ){
          edges{
            node {
              excerpt(pruneLength: 140)
              frontmatter{
                title
                date
                categories
                featuredImage {
                  childImageSharp{                  
                    fluid{
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
            <Head title="Projects"/>
            <h1>Projects</h1>

            <div className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                      <div key={edge.node.fields.slug} className={blogStyles.total}>
                            <Link to={`/projects/${edge.node.fields.slug}`}>
                            
                            <div className={blogStyles.post}>  
                              
                              <div className={blogStyles.featuredImage}>
                                  <Img style={{ maxHeight: "130px"}}
                                       objectFit="contain" fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                                  />
                              </div>

                              <div className={blogStyles.text}>    
                                      <h2> <span> {edge.node.frontmatter.title} </span> </h2>
                                      <p> <span> {edge.node.frontmatter.date} </span> </p>
                                      <p>{edge.node.excerpt}</p>  
                                      
                                      <div className={blogStyles.categories}>
                                          {edge.node.frontmatter.categories.map((category) => {
                                              return (
                                                <p>{category}</p>
                                              )
                                           })}

                                      </div>
                                      
                              </div>  
                            </div>
                            </Link>
                            
                      </div>




                    )
                })}
            </div>
        </Layout>
    )
}

export default ProjectsPage

//<p>{edge.node.featuredImage.relativePath}</p>

/*

fluid(maxWidth: 800, maxHeight: 400){
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }

*/