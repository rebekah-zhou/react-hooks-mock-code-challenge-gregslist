import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filterBy, setFilterBy] = useState(false)
  let searchVal = ''
  

  useEffect(() => {
    fetch(' http://localhost:6001/listings')
    .then(res => res.json())
    .then(listings => setListings(listings))
  }, [])

  function handleSearchChange(e) {
    searchVal = e.target.value
  }

  function handleSearchSubmit() {
    setSearchValue(searchVal)
  }

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter(listing => {
      return listing.id !== deletedListing.id
    })
    setListings(updatedListings)
  }

  function handleCheckboxChange() {
    setFilterBy(() => !filterBy)
  }

  function handleNewListingSubmit(newListing) {
    setListings([...listings, newListing])
  }

  const listingsToDisplay = listings.filter(listing => {
        return listing.description.toLowerCase().includes(searchValue.toLowerCase())
      })
    
  if (filterBy) {
    listingsToDisplay.sort(function(a, b) {
      const locationA = a.location.toLowerCase()
      const locationB = b.location.toLowerCase()
      if (locationA < locationB) {
        return -1
      } 
      if (locationA > locationB) {
        return 1
      }
      return 0
    })}
 
 
  

  return (
    <div className="app">
      <Header onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit} />
      <ListingsContainer 
        listings={listingsToDisplay}
        onDeleteListing={handleDeleteListing}
        onCheckboxChange={handleCheckboxChange}
        onSubmitNewListing={handleNewListingSubmit} />
    </div>
  );
}

export default App;
