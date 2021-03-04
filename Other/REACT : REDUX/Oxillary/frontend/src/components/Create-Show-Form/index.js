import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const CreateShowForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [artistName, setArtistName] = useState('');
    const [date, setDate] = useState('');
    const [genre, setGenre] = useState('');
    const [city, setCity] = useState('');
    const [price, setPrice] = useState('');
    const [partySize, setPartySize] = useState(1);
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [rating, setRating] = useState(1);
    const [youtubeURL, setYoutubeURL] = useState('');

    const updateArtistName = (e) => setArtistName(e.target.value)
    const updateDate = (e) => setDate(e.target.value)
    const updateGenre = (e) => setGenre(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updatePrice = (e) => setPrice(e.target.value)
    const updatePartySize = (e) => setPartySize(e.target.value)
    const updateTitle = (e) => setTitle(e.target.value)
    const updateInfo = (e) => setInfo(e.target.value)
    const updateImageURL = (e) => setImageURL(e.target.value)
    const updateRating = (e) => setRating(e.target.value)
    const updateYoutubeURL = (e) => setYoutubeURL(e.target.value)
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        let createdShow;
        if (createdShow) {
          history.push(`/shows/${createdShow.id}`);
          hideForm();
        }
    };

    return (
        <section className="new-form-holder centered middled">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Artist Name"
              required
              value={artistName}
              onChange={updateArtistName} />
            <input
              type="text"
              placeholder="Date"
              required
              value={date}
              onChange={updateDate} />
            <input
              type="text"
              placeholder="Genre"
              required
              value={genre}
              onChange={updateGenre} />
            <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={updateCity} />
            <input
              type="text"
              placeholder="Price"
              required
              value={price}
              onChange={updatePrice} />
            <input
              type="text"
              placeholder="Party Size"
              required
              value={partySize}
              onChange={updatePartySize} />
            <input
              type="text"
              placeholder="Title"
              required
              value={title}
              onChange={updateTitle} />
            <input
              type="text"
              placeholder="Info"
              required
              value={info}
              onChange={updateInfo} />
            <input
              type="text"
              placeholder="ImageURL"
              required
              value={imageURL}
              onChange={updateImageURL} />
            <input
              type="text"
              placeholder="Rating"
              required
              value={rating}
              onChange={updateRating} />
            <input
              type="text"
              placeholder="Youtube URL"
              required
              value={youtubeURL}
              onChange={updateYoutubeURL} />

            <button type="submit">Create new Show</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
          </form>
        </section>
      );
}   