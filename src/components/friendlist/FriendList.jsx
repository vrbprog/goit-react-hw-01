import css from "./FriendList.module.css";
import Friend from '../friend/friend';

export default function FriendList({ friends }) {

    return (
        <ul className={css.friends}>
            {
                friends.map(friend => 
                    <Friend
                        key = {friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                )
            }
        </ul>
    );
};