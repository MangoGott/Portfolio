import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from './about.module.scss'


const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <div className={aboutStyles.body}>
            <p> 
            I'm a recently graduated software engineer with both a bachelor and master’s in computer science.  
            </p>
            <p> 
            Currently, I’m part of a virtual production-research project at The Royal Institute of Technology in collaboration with Stockholm University of the Arts and Konstfack. 
            Exploring the technologies revolving Motion Capture and Virtual Reality. 
            I’m passionate about solving both technical and creative problems (luckily, they often coincide). The goal is to always face rewarding challenges. 
            </p>
            <p>
            I have experience with developing for both front- and backend, but I have also constructed more conceptual VR/AR projects throughout the years. 
            Apart from my technical background, I possess great leadership skills bringing mixed competencies together, as well as design and layout (both in digital and printed form). 
            All these skills came to excellent use during my two years as Editor in Chief for the magazine Osqledaren. 
            </p>
            <p> 
            When I'm not coding, I freelance on various creative projects. Most recently, I was payed to record several motion capture performances, film a remote segment i Göteborg for SweClockers, as well as cover different events.  
            </p>
            <p> 
            If I’ve peaked your interest, don’t hesitate, <Link to="/contact">contact me!</Link>
            </p>
            <p> 
            I’m always glad to discuss things further over a cup of coffee. 
            </p>

            <h2>-Robin Kammerlander</h2>
            </div>
        </Layout>
    )
}

export default AboutPage