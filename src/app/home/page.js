import Head from 'next/head';
import React from 'react'
import Layout from '../components/Layout';
import RightSection from '../components/RightSection';

function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className='px-10'>
                <Layout>
                    {/* Pass RightSectionHome as a child to Layout */}
                    <RightSection />
                </Layout>
            </div>
        </>
    );
}

export default Home