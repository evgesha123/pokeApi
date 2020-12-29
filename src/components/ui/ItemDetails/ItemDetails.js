import './ItemDetails.css';
import mkCapitalize from "../../../lib/mkCapitalize";
import React, { useState, useEffect } from 'react';
import Error from "../Error/error";
import {_BASE_URL_} from "../../../const/system";


function ItemDetails({ item }){
  const [details, setItemDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`${_BASE_URL_}pokemon/${item.name}/`)
      .then(res => res.json())
      .then(
        (result) => {
          setItemDetails(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [item])


  console.log('ITEM DETAILS', details);

  if (error) {
    return <Error error={error.message}/>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
      return (
        <>
          <div className='item-details-container'>
            <div className='item-details-header'>
              {`${mkCapitalize(details.name)} details`}
            </div>
            <div className='item-details-data'>
              <div>Height: {details.height}</div>
              <div>Weight: {details.weight}</div>
              <div>
                Abilities:
                {details.abilities.map((item, index) => (
                  <div key={index}> {item.ability.name} </div>
                ))}
              </div>

            </div>
          </div>
        </>
      );
  }
}

export default ItemDetails;
