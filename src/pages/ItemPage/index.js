import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchDataFromSWApi} from "../../utils/swapi";
import InnerCard from "../../components/InnerCard";

import s from "./style.module.sass";

function ItemPage() {
  let { id } = useParams();
  let [data, setData] = useState(null)

  useEffect(() => {
    fetchDataFromSWApi(`people/${id}`)
      .then(res => setData(res))
      .catch(err => setData({error: err.message}))
  }, [])

  if (data === null) {
    return (
      <div className="loading">
        Loading...
      </div>
    )
  }

  if (data?.error !== undefined) {
    return (
      <div className="noElem">
        There is no item with id = {id}
      </div>
    )
  }

  return (
    <div className={s.innerInfo}>
      <InnerCard data={data} />
    </div>
  );
}

export default ItemPage;