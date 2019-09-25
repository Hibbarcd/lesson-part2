import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
//This section could be setup differently, with a selector that would work with a clickable arrow feature to display all items, not just a max of 4, depending on 
// needs of company, desired design of sales pages.
export default CollectionPreview;