import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import s from "./style.module.sass";

function List({data, loading}) {
  const [list, setList] = useState(data);

  useEffect(() => {
    setList(data)
  }, [data])

  if (loading === true) {
    return (
      <div className="loading">
        Loading...
      </div>
    )
  }

  if (data?.error !== undefined) {
    return (
      <div className="loading">
        Error: {data.error}
      </div>
    )
  }

  if (list?.results === undefined) {
    return(
      <div className="noElem">
        Empty list
      </div>
    )
  }

  return (
    <div className={s.list}>
      {list.results.map(({name, height, mass, gender, url}) => (
        <div className={s.oneItem} key={uuidv4()}>
          <div className={s.info}>
            <div className={s.name}>{name}</div>
            <div className={s.height}>Height: {height}</div>
            <div className={s.mass}>Mass: {mass}</div>
            <div className={s.gender}>Gender: {gender}</div>
            <div className={s.more}>
              <Link className={s.moreLink} to={`/item${url.slice(url.lastIndexOf('/', url.length-2), url.length)}`}>More info</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

List.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired
}

export default List;