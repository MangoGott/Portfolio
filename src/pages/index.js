import React from 'react'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'


import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'
import picture from './img/profile.jpg'

const IndexPage = () => {

return (
      <Layout>
        <Head title="Home"/>
        <div className={indexStyles.container}>            
              <img className={indexStyles.picture} src={picture}/>

            <div className={indexStyles.topLeft}>
              
              <p><span> 
                Software engineer with both a bachelor and master’s in computer science.  
                I thrive in the cross-section between creative and tech-oriented work.
                Always aiming to improve and further develop my abilities. 
              </span></p>              
            </div>       

            <h1>-Robin Kammerlander</h1>
     
        </div>


      </Layout>
  )

}

export default IndexPage