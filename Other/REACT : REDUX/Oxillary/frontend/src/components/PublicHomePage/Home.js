import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import NewShowForm from '../Create-Show-Form/form.js'

import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getShow } from '../../store/show';
// const { User } = require('../../db/models');

// ES7 snippets to do 'rfce'

function Home() {
    // const dispatch = useDispatch();
    // // const sessionUser = useSelector((state) => state.session.user);

    // const {userId} = useParams();

    // const showItems = useSelector((state) => state.show);
    // // const showItems = {
    // //     1: { userId: 1, artistName:"U2", date:"02-28-2021", genre: "Rock", city: "New York", Price: "$5000", partySize:"100", title:"See U2 Live", info:"Experience U2", imageURL:"", rating:5, youtubeURL:""},
    // //     2: { userId: 2, artistName:"Flume", date:"03-01-2021", genre: "Electronic", city: "Richmond", Price: "$7500", partySize:"150", title:"See Flume Live", info:"Experience Flume", imageURL:"", rating:4, youtubeURL:""},
    // //     3: { userId: 3, artistName:"Coldplay", date:"08-18-2021", genre: "Alternative", city: "Charlotte", Price: "$10000", partySize:"200", title:"See Coldplay Live", info:"Experience Coldplay", imageURL:"", rating:3, youtubeURL:""},
    // // };

    // const showItemsArray = Object.values(showItems);

    // useEffect(() => {
    //     dispatch(getShow(showId));
    // }, [dispatch, showId])

    return (
        <div className='home'>

            {/* <h1>Hardcoded Shows</h1>
            <ul>
                {showItemsArray.map(item => (
                    <li key={item.id}>
                        <div>{item.genre}</div> 
                        <div>{item.artistName}</div> 
                        <div>{item.date}</div> 
                        </li>
                ))}
            </ul> */}
            
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
                price="$500/night"
            />
            <Card
                src="https://i.ibb.co/vVSSWdV/Beatles-rooftop-concert.jpg"
                title="Rooftop Performance"
                description="Enjoy the amazing sights of New York on this stunning penthouse"
                price="$600/night"
            />
            <Card
                src="https://i.ibb.co/bmKY8Rs/barNight.jpg"
                title="Bar Night"
                description="Book live performers hassle-free"
                price="$800/night"
            />
            <NewShowForm />

            </div>
        </div>
    )
}

export default Home
