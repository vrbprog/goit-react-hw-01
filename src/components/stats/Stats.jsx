import css from "./Stats.module.css";

export default function Stats({name, value}) {
  return (
    <li className={css.stats}>
          <span>{name}</span>
          <span>{value}</span>
    </li>
  );
};