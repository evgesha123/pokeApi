import './ItemsList.css';
import Error from "../Error/error";



function ItemsList({error, isLoaded, data, activeIndex, handleItemClick}){
  if (error) {
    return <Error error={error.message}/>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='items-list-block'>
        <div className='items-list-block-title'>
          Choose your pokemon
        </div>
        <div className='items-container'>
          {data.pokemon.map((item, index) => (
            <div
              className={activeIndex === index ? "active-item" : "inactive-item"}
              key={index}
              onClick={() => handleItemClick(index, item.pokemon)}
            >
              {item.pokemon.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ItemsList;
