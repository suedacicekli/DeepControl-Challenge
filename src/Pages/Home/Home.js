import React from 'react'
import homePage from '../../Assets/Images/homePage.svg';

function Home() {
    return (
        <div className="container  " style={{ height: '100vh' }}>
            <div className="row ">
                <div className="text-center " style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    webkitTransform: 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)'
                }} >
                    <img src={homePage} alt="React Logo" style={{ width: '35%' }} />
                    <h4 className="mt-5">Welcome to <b style={{ color: '#0C6EFD' }}>DeepControl</b></h4>

                </div>

            </div>
        </div >
    )
}

export default Home
