/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectFunction }) => {
  return (
    <div className="flat-list">
      {
        flats.map((flat) => {
          const { imageUrl } = flat;
          return <Flat key={imageUrl} imageUrl={imageUrl} selectFunction={selectFunction} />;
        })
      }
    </div>
  );
}

export default FlatList;
