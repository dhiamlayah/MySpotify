import axios from "axios"

const axiosGet = async (access_token :string,url:string,errMessege:string):Promise<any>=>{
    var errExist : {value:boolean}={value:false}
    var data: { value: any }={value:null}
     
    await axios.get(url ,{
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }).then((res:any )=>{
         data.value = res.data;
         errExist.value = false
        }).catch((err:any)=>{
        console.log(errMessege,err.response)
        errExist.value = true
        data.value=err.response.data
      })
    
      return {data:data.value,errExist:errExist.value }
    }


module.exports={axiosGet}

//there a prblem to add data and errj