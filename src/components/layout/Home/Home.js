import React from 'react'
import { bodyStyle, imgStyle } from './homeStyles'
import logo from './demo.gif'
export default function Home() {
    return (
        <div style={bodyStyle}>
            <h2>
                Track the stat leaders for any game! Click on track games to
                begin
            </h2>
            <img src={logo} alt="Project Demo" style={imgStyle} />
        </div>
    )
}
