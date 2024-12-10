import css from "./FriendList.module.css";
import Friend from '../friend/friend';

export default function FriendList({ friends }) {
    const listFriend = [];
    for (const friend of friends) {
        listFriend.push(
            <Friend
                key = {friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />)
    }

    return (
        <ul className={css.friends}>
            {listFriend}
        </ul>
    );
};