import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";

import s from "./style.module.sass";

function Pagination({data, changePage, activePage, loading}) {
  const [list, setList] = useState(null);

  useEffect(() => {
    setList(data);
  }, [data])

  const pagination = []
  const totalItems = data.count;
  const itemPerPage = 10;

  const handleChangePage = (page) => {
    if (!loading) changePage(page)
  }

  for (let i = 0, j = 1; i <= totalItems; i+=itemPerPage, j++) {
    pagination.push({
      number: j,
    })
  }

  return (
    <div className={s.pagination}>
      {pagination.map((i, indx) => (
        <div
          key={uuidv4()}
          onClick={(page) => handleChangePage(i.number)}
          className={activePage-1 === indx ? s.isActive : ''}
        >{i.number}</div>
      ))}
    </div>
  )
}

Pagination.propTypes = {
  data: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Pagination;