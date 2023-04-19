import React from 'react'
import QR from '../Assets/QR.jpg'
import './QR.css'

const Qr = () => {
    return (
        <div className='QR_Code'>
            <h5>Scan this QR Code</h5>
            <img
                alt=""
                src={QR}
                height="250"
                width="250"
            />
            <p>Please enter your team name at the "Add Note" Box.</p>
        </div>
    )
}

export default Qr