export const InMinut =(ms)=>{
    let min=Math.floor(ms/60000)
    let s=Math.floor((ms/1000)-(min*60))
    const time ={
        min,
        s,
    }
    return time
}
 
 