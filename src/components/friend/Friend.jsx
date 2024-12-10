import css from "./Friend.module.css";
import clsx from "clsx";

export default function Friend({avatar, name, isOnline}) {
  return (
    <li className={css.friend}>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className=
            {clsx(
                css.onlineStatus,
                isOnline ? css.isOnline : css.isOffline
            )}>
              {isOnline ? "online" : "offline"}
        </p>
    </li>
  );
};