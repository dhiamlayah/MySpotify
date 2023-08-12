import '../css/bg.css'
const User = ({user}) => {
    return ( 
        <div className="flex bg-lime-200 bgProfile ml-3 p-12   ">
              {user.images.length>0 &&   <img className=" rounded-full shadow-4xl " src={user.images[1].url} alt="user"  />}
             <div className="text-white mt-32 ml-5 font-bold">
                <p>Profile</p>
                <h1 className="text-8xl	font-bold  ">{user.display_name}</h1>
                <p className="pt-4">Product : {user.product}</p>
              </div>
        </div>
     );
}
 
export default User;