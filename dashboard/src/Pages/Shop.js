import React from 'react';
import Screen from '../Component/Screen/Screen';
import Popular from '../Component/Popular/Popular';
import Offers from '../Component/Offers/Offers';
import NewCollections from '../Component/NewCollections/NewCollections';
import NewsLetter from '../Component/NewsLetter/NewsLetter';
import Footer from '../Component/Footer/Footer';

const Shop = () => {
  return (
    <div>
      <Screen />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
