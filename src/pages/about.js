import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>Who am I?</p>
            <p><Link to="/contact">Contact me?</Link></p>
        </Layout>
    )
}

export default AboutPage