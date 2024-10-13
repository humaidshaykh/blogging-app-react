import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
// import css from '../../index.css';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section  className='bg-image'>
        {/* style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}> */}

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                            <img  style={{height:"120px"}} src="https://cdn-icons-png.flaticon.com/512/15270/15270502.png" alt="" />
                            </div>

                            {/* Text  */}
                            <h1 className=' text-3xl text-white font-bold'>HS Blogging App</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-1xl text-xl font-extralight sm:mx-auto ">
                            A Website where user can post valueable blogs and earn money.
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection