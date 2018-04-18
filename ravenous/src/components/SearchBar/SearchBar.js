import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  //appaerntly parameters can be strings that match strings
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
  //added a callback function to the .map method as an argument with arrow syntax
  return Object.keys(sortByOptions).map(sortByOption => {
    let sortByOptionValue = sortByOptions[sortByOption];
    return <li key={sortByOptionValue}>{sortByOption}</li>;
  });
}
  render() {
    return (
      <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      this.renderSortByOptions()
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
  </div>
  </div>

    )
  }
}
export default SearchBar;
//sort_by, best_match - sort_by sorts the results by one of the modes
