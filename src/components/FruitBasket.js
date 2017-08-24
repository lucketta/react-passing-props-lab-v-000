import React, { Component }  from 'react';
import PropTypes from 'prop-types';


import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({
  fruit,
  filters,
  currentFilter,
  onUpdateFilter}) => {
    return (
      <div className="fruit-basket">
        <Filter filters={filters}
                handleChange={onUpdateFilter} />
        <FilteredFruitList
          fruit={fruit}
          filter={currentFilter} />
      </div>
    );
  }

FruitBasket.defaultProps = {
  fruit: PropTypes.any,
  filters: PropTypes.any,
  currentFilter: PropTypes.any,
  updateFilterCallback: PropTypes.any,
}

export default FruitBasket;
