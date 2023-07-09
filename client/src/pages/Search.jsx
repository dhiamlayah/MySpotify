import React,{useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';
import MusicFound from '../components/MusicFound';
import Data from '../fakeData/music'
const Search = () => {
    const musics = Data
    // console.log(musics)

    
    //* we post this search data to backend
    const [musicSearch,setMusicSearch]=useState('')
    const getSearchMusic=(e)=>{
        setMusicSearch(e.target.value)
    }
  useEffect(()=>{
    console.log(musicSearch)
  },[musicSearch])
 
    return (
        <div className=' w-full h-full pl-3'>
            <SearchBar onSearchMusic={getSearchMusic}/>
            <MusicFound musicData={musics} />
        </div>
      );
}
 
export default Search;