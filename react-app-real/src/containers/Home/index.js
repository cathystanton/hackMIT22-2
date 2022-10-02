import React, {useState} from "react";

export default function Home() {
    return (
        <Content />
    )
}

function Content(){
    // React states
    const [searchInput, setSearchInput] = useState(false)

    // Handles search
    const handleSearch = (event) => {
        event.preventDefault();

        // var song-search = document.forms[0];

        setSearchInput(event.target.value);
    };

    const img = (
        <img src="./src/containers/Home/musicnotes.png" alt="MusicNotes Logo"></img>
    )

    const searchBar = (
        <div className="search">
            <form onSubmit={handleSearch}>
                <div className="search-input-container">
                    <input type ="text" name="song-search" placeholder="Search for a song!" />
                </div>
                <div className="search-submit-button-container">
                    <input type="submit" value="Search"/>
                </div>
            </form>
      </div>
    )
    
    return (
        <div className="home">
            {/* {img} */}
            <div className="home-search">
                <div className="search">
                {searchBar}
                </div>
            </div>
        </div>
      );
}