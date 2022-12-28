import React from 'react'
import teamPng from '../../Assets/Images/Team.png'
import { Button } from "react-bootstrap";

function LoginMessage() {
    const fontSize = { fontSize: '25px' }
    return (
        <div className="container">
            <div className="col">
                <div className="row mx-auto text-center mt-5">
                    <div className="col-md-6">
                        <br /> <br />
                        <h3 className='mt-5'>Join Us</h3>
                        <p className='mt-4' style={fontSize}>Control any thing from anywhere</p>
                        <Button href="/login" size="lg" className=" mt-5" type="submit">
                            LOGIN
                        </Button>
                    </div>
                    <div className="col-md-6">
                        <img src={teamPng} alt="React Logo" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginMessage
