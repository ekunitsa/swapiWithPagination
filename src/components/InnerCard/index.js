import s from "./style.module.sass";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function InnerCard({data}) {
  const {name, birth_year, eye_color, gender, hair_color, height, mass, skin_color } = data;

  return (
    <div className={s.innerCard}>
      <div className={s.name}>{name}</div>
      <ul className={s.listOfParams}>
        <li>Birth year: {birth_year}</li>
        <li>Eye color: {eye_color}</li>
        <li>Gender: {gender}</li>
        <li>Hair Color: {hair_color}</li>
        <li>Height: {height}</li>
        <li>Mass: {mass}</li>
        <li>Skin color: {skin_color}</li>
      </ul>

      <Link className={s.btn} to="/">Back to list</Link>
    </div>
  )
}

InnerCard.propTypes = {
  data: PropTypes.object.isRequired,
}


export default InnerCard;