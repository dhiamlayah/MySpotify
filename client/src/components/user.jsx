const User = ({user}) => {
    return ( 
        <div className="flex bg-navColor ml-3 p-12">
            <div >
                <img className=" rounded-full " src={user.images[0].url} alt="user"  />
            </div>
            <div className="text-white mt-32 ml-5">
                <p>Profile</p>
                <h1 className="text-7xl	">Ml-Dhia</h1>
            </div>
        </div>
     );
}
 
export default User;