import React, { useState, useEffect } from 'react';
import ItemsList from "../ui/ItemsList/ItemsList";
import ItemDetails from "../ui/ItemDetails";
import './PagePocemons.css';

function PagePokemons(){
  // const initialItemValue = window.localStorage.getItem('item') || null;
  // window.localStorage.setItem("item", JSON.stringify(item)); // set to localStorage

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setItems] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentItem, getActiveItemData] = useState(null);

  console.log('data', data);
  // console.log('isLoaded', isLoaded);
  // console.log('activeIndex', activeIndex);
  // console.log('error', error);
  console.log('currentItem', currentItem);

  const handleItemClick = (index, item) => {
    setActiveIndex(index);
    getActiveItemData(item);
  };

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${2}/`)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [])




  return (
    <div className='pokemons-list-container'>
      <ItemsList
        error={error}
        isLoaded={isLoaded}
        data={data}
        activeIndex={activeIndex}
        handleItemClick={handleItemClick}
      />
      {currentItem && (
        <ItemDetails
          item={currentItem}
        />
      )}
    </div>
  );
}

export default PagePokemons;
