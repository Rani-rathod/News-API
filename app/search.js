import React from 'react';
const Search=()=>{
    return (
        <div className='search'>
                <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
                <button class="button" type="submit">Go</button>
        </div>
    );
};
export default Search;