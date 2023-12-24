import React from 'react';
import LeftSection from './LeftSection';
import Header from './Header';


// eslint-disable-next-line react/display-name
const Layout = React.memo(({ children }) => {

    return (
        <div className="flex flex-col">
            {/* Heading Section */}
            <Header />

            {/* Content Section */}

            {children ? (
                <div className='flex gap-10 my-2 sm:mx-10 lg:mx-4 xl:mx-12 2xl:mx-16  flex-col sm:flex-row lg:justify-around xl:justify-between md:p-0 lg:p-0 items-start'>
                    <LeftSection />
                    {/* Render children only if they exist */}
                    {children}
                </div>
            ) : <div className='flex gap-10 my-2 sm:mx-10 lg:mx-4 xl:mx-12 2xl:mx-16   md:p-0 lg:p-0 items-start'><LeftSection /></div>}



        </div>
    );
});

export default Layout;
