import React from "react";
import Head from 'next/head';

type Props = {
    title?: string
    metaDesc?: string
    metaKeywords?: string
}

const Header = ({title, metaDesc, metaKeywords}: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={metaDesc} />
            <meta name="keywords" content={metaKeywords} />

            <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0" />
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        </Head>
    );
}

export default Header;