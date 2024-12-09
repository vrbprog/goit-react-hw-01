import css from "./Profile.module.css";
import Stats from '../stats/Stats';

export default function Profile({followers, views, likes}) {
  return (
      <div className={css.profile}>
          <div className={css.userInfo}>
              <img className={css.avatar}
                src="./src/assets/img/avatar.png"
                alt="User avatar"
            />
              <p>Rivaldo</p>
              <p>@jkrivaldo</p>
              <p>Santo Del Pedro, Argentina</p>
          </div>
          <ul className={css.boxProperties}>
              <Stats name="Followers" value={followers} />
              <Stats name="Views" value={views} />
              <Stats name="Likes" value={likes} />
          </ul>
    </div>
  );
};