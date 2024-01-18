import React from 'react'
import './Services.css'
function Services() {
    return (
        <div className='service-container'>
            <div className="main-service">
                <h2>My Awesome <span >Services</span></h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <div className='service'>

            
            <div className="web">
                <i class="fa-solid fa-code"></i>
                <h2>Web Development</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="desktop">
                <i class="fa-solid fa-desktop"></i>
                <h2>Desktop Development</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="tablet">
                <i class="fa-solid fa-tablet-screen-button"></i>
                <h2>U/X Design</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            </div>
            </div>

        </div>
    )
}

export default Services