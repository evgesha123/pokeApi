import './items-list.css';
import React, { useState, useEffect } from 'react';
import Error from "../Error/error";



function ItemsList(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setItems] = useState({});

  console.log('data', data);
  console.log('isLoaded', isLoaded);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${1}/`)
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

  if (error) {
    return <Error error={error.message}/>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className='items-list-left-header'>Choose your pokemon</div>
          <div className='items-container'>
            {data.pokemon.map(item => (
              <div className='item' key={item.pokemon.name} onClick={()=>{console.log('item.pokemon.name', item.pokemon)}}>
                {item.pokemon.name}
              </div>
            ))}
          </div>
        </>
    );
  }
}

export default ItemsList;
