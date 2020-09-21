import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (        
            <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <p>tel: XXX XXX XXX</p>
            <p>adress: XXX XXX XXX</p>
            <p>mail: XXX@XXX.XXX</p>
            <p>Instagram: <a href="https://www.instagram.com/Mangogott/" target="_blank">MangoGott</a></p>
            </Layout>
    )
}

export default ContactPage