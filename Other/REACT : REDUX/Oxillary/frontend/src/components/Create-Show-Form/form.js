import { useState } from 'react';
import './form.css'

function NewShowForm() {

    const [artistName, setArtistName] = useState('')
    const [date, setDate] = useState('')
    const [genre, setGenre] = useState('')
    const [city, setCity] = useState('')
    const [price, setPrice] = useState('')
    const [partySize, setPartySize] = useState('')
    const [title, setTitle] = useState('')
    const [info, setInfo] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [rating, setRating] = useState('')
    const [youtubeURL, setYoutubeURL] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const newShowFormInformation = {
          artistName,
          date,
          genre,
          city,
          price,
          partySize,
          title,
          info,
          imageURL,
          rating,
          youtubeURL
        };
    };

    return (
      <div className="show-form">
        <h2>Create a Show</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor='artist-name'>Artist Name: </label>
            <input id='artist-name' type='text' onChange={(e) => setArtistName(e.target.value)} value={artistName}/>
          </div>
          <div>
            <label htmlFor='date'>Date: </label>
            <input id='date' type='text' onChange={(e) => setDate(e.target.value)} value={date}/>
          </div>
          <div>
            <label htmlFor='genre'>Genre: </label>
            <input id='genre' type='text' onChange={(e) => setGenre(e.target.value)} value={genre}/>
          </div>
          <div>
            <label htmlFor='city'>City: </label>
            <input id='city' type='text' onChange={(e) => setCity(e.target.value)} value={city}/>
          </div>
          <div>
            <label htmlFor='price'>Price: </label>
            <input id='price' type='text' onChange={(e) => setPrice(e.target.value)} value={price}/>
          </div>
          <div>
            <label htmlFor='party-size'>Party Size: </label>
            <input id='party-size' type='text' onChange={(e) => setPartySize(e.target.value)} value={partySize}/>
          </div>
          <div>
            <label htmlFor='title'>Title: </label>
            <input id='title' type='text' onChange={(e) => setTitle(e.target.value)} value={title}/>
          </div>
          <div>
            <label htmlFor='info'>Info: </label>
            <input id='info' type='text' onChange={(e) => setInfo(e.target.value)} value={info}/>
          </div>
          <div>
            <label htmlFor='image-URL'>Image URL: </label>
            <input id='image-URL' type='text' onChange={(e) => setImageURL(e.target.value)} value={imageURL}/>
          </div>
          <div>
            <label htmlFor='rating'>Rating: </label>
            <input id='rating' type='text' onChange={(e) => setRating(e.target.value)} value={rating}/>
          </div>
          <div>
            <label htmlFor='youtube-URL'>Youtube URL: </label>
            <input id='youtube-URL' type='text' onChange={(e) => setYoutubeURL(e.target.value)} value={youtubeURL}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
  
  export default NewShowForm;
  