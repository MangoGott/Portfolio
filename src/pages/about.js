import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>Who am I?</p>
            <p><Link to="/contact">Contact me?</Link></p>
        </Layout>
    )
}

export default AboutPage