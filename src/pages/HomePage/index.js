import List from "../../components/List";
import {useEffect, useState} from "react";
import {fetchDataFromSWApi} from "../../utils/swapi";
import Pagination from "../../components/Pagination";

function HomePage() {
  const [data, setData] = useState(null)
  const [activePage, setActivePage] = useState(1)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)

    fetchDataFromSWApi(`people?page=${activePage}`)
      .then(res => setData(res))
      .catch(err => setData({error: err.message}))
      .finally(() => {
        setTimeout(() => setLoading(false), 1000)
      })
  }, [activePage])

  const changePage = (page) => {
    setActivePage(page)
  }

  return (
    <>
      <List data={data} loading={loading}/>
      {data && <Pagination data={data} changePage={changePage} activePage={activePage} loading={loading}/> }
    </>);
}

export default HomePage;