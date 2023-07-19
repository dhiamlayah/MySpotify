import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import SinglePlaylist from '../components/SinglePlaylist';
const Playlist = () => {
    const params = useParams()
    const [data,setData]=useState([])
    const getPlaylist =async()=>{
        axios.get(`http://localhost:8000/playlist/${params.id}`).then((res)=>{
            console.log('data from axios',res.data)
            setData(res.data)
        }).catch((err)=>{
            console.log('there is an err',err.response)
        })
    } 
    useEffect(()=>{
        getPlaylist()
    },[setData])
    if(data.length!==0){   
    return (
        <div className='block'>
            <div className='block sm:flex   '>
                <Navbar/>
            </div>
            <div className=' sm:ml-72 rounded-3xl '>
                {data!==[] && <SinglePlaylist data={data}/>}
            </div>
        </div>
      );}

    }
 
export default Playlist;


 