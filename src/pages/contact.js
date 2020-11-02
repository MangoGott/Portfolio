import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    return (        
            <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <div className={contactStyles.body}>
            <p>Email me at <a href="mailto:kammerlanderrobin@gmail.com" target="_blank"> kammerlanderrobin@gmail.com</a></p>
            <p>Read more about me on <a href="https://www.linkedin.com/in/robinkam" target="_blank">LinkedIn</a></p>
            <p>or why not check out my photography on <a href="https://www.instagram.com/Mangogott/" target="_blank"> Instagram</a></p>
            </div>
            </Layout>
    )
}

export default ContactPage