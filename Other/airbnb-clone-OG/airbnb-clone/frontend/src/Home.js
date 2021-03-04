import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://i.ibb.co/1f7kycp/ben-bohmer-Home-card.jpg"
                title="Online DJ Sets"
                description="Enjoy live music in a world silenced by COVID."
            />
            <Card
                src="https://i.ibb.co/805Qh88/Chromeo.jpg"
                title="Unique performances"
                description="Catered live performance just for your party."
            />
            <Card
                src="https://i.ibb.co/z77qvHw/intimate-concert.jpg"
                title="Intimacy"
                description="World reknowned artist inside your home."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://i.ibb.co/WGw63Nz/Harry-Styles.jpg"
                title="Live Concert"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://i.ibb.co/vVSSWdV/Beatles-rooftop-concert.jpg"
                title="Rooftop Performance"
                description="Enjoy the amazing sights of New York on this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://i.ibb.co/bmKY8Rs/barNight.jpg"
                title="Bar Night"
                description="Book live performers hassle-free"
                price="£70/night"
            />
            </div>
        </div>
    )
}

export default Home
