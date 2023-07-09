import TopTrackUser from '../components/TopTracksUser';
import User from '../components/user';
import {user} from '../fakeData/user'
const Profil = () => {
      const data=user
    return (
            <div >
                  <User user={data}/>
                  <TopTrackUser/>
            </div>
      );
}
 
export default Profil;