import {useState, useEffect} from "react";
import {Link, useRouteMatch} from "react-router-dom";

function Shop() {

  useEffect(()=>{
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");

    const items = await data.json();
    setItems(items.data);
  }

  let match = useRouteMatch();

  return (
    <div>
      <h1>Shop page</h1>
      {items.map((item,index)=>
        <h3 key={index}>
          <Link to={`${match.url}/${item.itemId}`}>{item.item.name}</Link>
        </h3>
      )}
    </div>
  );
}

export default Shop;
