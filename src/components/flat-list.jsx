/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectFunction }) => {
  return (
    <div className="flat-list">
      {
        flats.map((flat) => {
          const { name, imageUrl, price, priceCurrency } = flat;
          return <Flat key={imageUrl} name={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} selectFunction={selectFunction} />;
        })
      }
    </div>
  );
};

export default FlatList;
