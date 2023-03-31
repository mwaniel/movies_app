import React from 'react'

const SearchForm = () => {
  return (
    <div class="jumbotron jumbotron-fluid mt-5 text-center">
        <div class="container">
            <h1 class="display-4 mb-3">
                <i class="fa fa-search" /> Search for movies,Tv searies ...
            </h1>
            <form id="searchform">
                <input 
                        type='text'
                        class="form-control"
                        name="searchText"
                        placeholder='Search Movies,TV Series ...' 
                     />
                <button type='submit' cla="btn btn-primary btn-bg mt-3">
                    Search
                </button>
                
            </form>
        </div>
    </div>
  )
}

export default SearchForm