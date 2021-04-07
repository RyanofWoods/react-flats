import React from 'react';
import PropTypes from 'prop-types';
import Flat from './flat';

const FlatList = ({ flats, selectFunction }) => {
  return (
    <div className="flat-list">
      {
        flats.map((flat) => {
          const { name, imageUrl, price, priceCurrency, lat, lng } = flat;
          return (
            <Flat
              key={imageUrl}
              name={name}
              imageUrl={imageUrl}
              price={price}
              priceCurrency={priceCurrency}
              lat={lat}
              lng={lng}
              selectFunction={selectFunction}
            />
          );
        })
      }
    </div>
  );
};

FlatList.propTypes = {
  flats: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FlatList;
