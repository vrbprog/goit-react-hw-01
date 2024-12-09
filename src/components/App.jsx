
import User from './profile/Profile';

import userData from "../../userData.json";

export default function App() {
  return (
    <div>
      <User
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
    </div>
  );
}
