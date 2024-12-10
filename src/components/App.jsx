
import User from './profile/Profile';
import userData from "../../userData.json";
import Friends from './friends/Friends';
import friendsList from "../../friends.json";


export default function App() {
  return (
    <main>
      <User
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <Friends
        friends={friendsList}
      />
    </main>
  );
}
