import React from 'react';
import './list.css';

const List = ({ Components }) => {
  const componentNames = Object.keys(Components);
  return (
    <div className='list'>
      {componentNames.map(name => {
        const Component = Components[name];
        return (
          <div className='list-item'>
            <div className='component-wrap'>
              <Component />
            </div>
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default List;
