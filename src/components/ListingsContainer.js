import React from "react";
import ListingCard from "./ListingCard";
import NewListingForm from "./NewListingForm";

function ListingsContainer({ listings, onDeleteListing, onCheckboxChange, onSubmitNewListing }) {
  return (
    <main>
      <NewListingForm onSubmitNewListing={onSubmitNewListing}/>
      <div style={{'paddingTop': '15px'}}>
        <label>Sort Alphabetically By Location: </label>
        <input onChange={onCheckboxChange} type="checkbox"/>
      </div>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map(listing => {
          return <ListingCard 
            key={listing.id} 
            listing={listing}
            onDeleteListing={onDeleteListing} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
