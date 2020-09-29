import React from 'react'
import ImageFadeIn from "react-image-fade-in";


import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = () => {

  const boat = require('./img/boat.png')

  return (
      <Layout>
        <Head title="Home"/>
        <div className={indexStyles.container}>
        <ImageFadeIn width={710} height={480} src={boat} />
            <div className={indexStyles.topLeft}>
              <h1>Consectetur adipiscing,</h1>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
            </div>
        </div>
        
      </Layout>
  )

}

export default IndexPage