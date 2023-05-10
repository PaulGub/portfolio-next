import * as React from "react"
import Head from "next/head";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export interface LayoutProps {
    children: any;
}

export default function Layout(props: LayoutProps) {

    const children = props.children

    return (
        <>

            <Head>
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <title>Paul Gubbiotti</title>
                <meta name="description" content="Paul Gubbiotti" />
            </Head>

            <Navbar />

            <main>{children}</main>

            <Footer />


        </>
    )
}