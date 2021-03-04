import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>20 performances · february 26 to february 30 · Any party size</p>
                <h1>Performances available</h1>
                <Button variant="outlined">Genre</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rating</Button>
                <Button variant="outlined">Party Size</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://i.ibb.co/cYCRKCR/Zhu-Dune-Tour.jpg"
                location="Private large party in Manhattan"
                title="Experience Zhu in Ringos Desert"
                description="100 guests · 6ft x 10ft · Wifi"
                star={5.00}
                price="$5000 / night"
                total="$5000 total"
            />

            <SearchResult
                img="https://i.ibb.co/sQVr6SP/Tchami-blue-dj-set.jpg"
                location="Private intimate party in Queens"
                title="Tchami performs Elevation Sunrise Liveset"
                description="30 guests · 8ft x 12 ft · Wifi"
                star={4.65}
                price="$3000 / night"
                total="$3000 total"
            />

            <SearchResult
                img="https://i.ibb.co/WxmNxvM/Tokimonsta-live-set.jpg"
                location="Private mid-size rooftop party in Brooklyn"
                title="TOKiMONSTA illustrates Cosmic Intoxication"
                description="75 guests · 6ft x 10 ft · Wifi"
                star={4.85}
                price="$4000 / night"
                total="$4000 total"
            />
            <SearchResult
                img="https://i.ibb.co/VjRN5Kn/odesza-purple.jpg"
                location="Private fraternity party in Charlottesville"
                title="Odesza performs space oddity live set"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="£55 / night"
                total="£320 total"
            />
            <SearchResult
                img="https://i.ibb.co/nPYVKMJ/Hayden-James.jpg"
                location="Hayden James performs his 2021 spectacle for live audience"
                title="Witness Hayden James live"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="£60 / night"
                total="£450 total"
            />
            <SearchResult
                img="https://i.ibb.co/ngp2rxB/rufus-du-sol-at-Joshua-tree.jpg"
                location="Private room in center of London"
                title="Rufus du Sol performs at a National Park"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="£65 / night"
                total="£480 total"
            />
            <SearchResult
                img="https://i.ibb.co/LkZ0dBG/kygo-south-korea.jpg"
                location="Private room in center of London"
                title="Kygo performs"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="£90 / night"
                total="£650 total"
            />
        </div>
    )
}

export default SearchPage
