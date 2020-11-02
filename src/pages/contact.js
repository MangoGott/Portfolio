import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (        
            <Layout>
            <Head title="Contact"/>
            <h1>Reach out!</h1>

            <p>Email me at <a href="mailto:kammerlanderrobin@gmail.com" target="_blank"> kammerlanderrobin@gmail.com</a></p>
            <p>Check out my photography on <a href="https://www.instagram.com/Mangogott/" target="_blank"> Instagram</a></p>
            <p>or read more about me on <a href="https://www.linkedin.com/in/robinkam" target="_blank">LinkedIn</a></p>

            </Layout>
    )
}

export default ContactPage