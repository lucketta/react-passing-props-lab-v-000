import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

  render() {
    return (
      <div>
        <FruitBasket fruit={this.state.fruit}
                    filters={this.state.filters}
                    currentFilter={this.state.currentFilter}updateFilterCallback={this.updateFilter} />;
      </div>
    )
  }
}

export default App;
