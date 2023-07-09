 //*filter data by artists
 export const FilterArtist = (list) => {
    const artists =new Set()
    list.map((artist)=>{
            artists.add(artist.artists[0].name)
    })
 return artists
}
 
//*filter music by each artist 
export const FilterMusic=(list,artists)=>{
    let data=[]
     for (let artist of artists) {
          const newList= list.filter((otherArtist)=>{
                if(otherArtist.artists[0].name===artist){
                    return otherArtist
                }
            })
          data.push(newList)
        } 
    return data
}
