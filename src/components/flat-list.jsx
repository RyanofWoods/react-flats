/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectFunction }) => {
  return (
    <div className="flat-list">
      {
        flats.map((flat) => {
          const { name, imageUrl, price, priceCurrency, lat, lng } = flat;
          return <Flat key={imageUrl} name={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} lat={lat} lng={lng} selectFunction={selectFunction} />;
        })
      }
    </div>
  );
};

export default FlatList;
