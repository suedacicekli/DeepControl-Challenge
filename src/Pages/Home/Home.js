import React from 'react'
import homePage from '../../Assets/Images/homePage.svg';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="text-center">
                    <img src={homePage} alt="React Logo" className="mt-5" style={{ width: '40%' }} />
                    <h4 className="mt-5">Welcome to <b style={{ color: '#0C6EFD' }}>DeepControl</b></h4>
                </div>

            </div>
        </div>
    )
}

export default Home
