import {useState} from "react";
import {useParams} from "react-router-dom";

const ItemDetail = () =>   {

  let {itemId} = useParams();

  const [item, setItem] = useState({});

  const [itemImgSrc, setItemImgSrc] = useState("");

  const fetchItem = async (id) => {
    const fetchedItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
    const itemJson = await fetchedItem.json();
    setItem(itemJson.data.item);
    setItemImgSrc(itemJson.data.item.images.icon);
  }
  
  fetchItem(itemId);

  console.log(item);

  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <img src={itemImgSrc} alt={item.name} />
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
