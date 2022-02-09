import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const {description, image, location} = listing
  const [isFav, setIsFav] = useState(false)

  function handleFavClick() {
    setIsFav(() => !isFav)
  }

  function handleDeleteListing() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
