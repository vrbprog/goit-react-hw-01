import css from "./Friends.module.css";
import Friend from '../friend/friend';

export default function Friends({ friends }) {
    const listFriend = [];
    for (const friend of friends) {
        listFriend.push(
            <Friend
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