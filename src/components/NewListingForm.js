import React, { useState } from 'react'

function NewListingForm({ onSubmitNewListing }) {
    const [formData, setFormData] = useState({
        description: '',
        image: '',
        location: ''
    })

    function handleNewListingSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(listing => onSubmitNewListing(listing))
    }

    function handleListingChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


  return (
    <div style={{'paddingTop': '15px'}}>
        <form onSubmit={handleNewListingSubmit} className='column'>
            <label>Description: </label>
            <input onChange={handleListingChange} 
                name='description'
                type="text"
                value={formData.description} />
            <label>Image Link: </label>
            <input onChange={handleListingChange} 
                name='image'
                type="text" 
                value={formData.image}/>
            <label>Location: </label>
            <input onChange={handleListingChange} 
                name='location'
                type="text" 
                value={formData.location}/>
            <button type="submit" >Add a new listing</button>
        </form>
        
    </div>
  )
}

export default NewListingForm