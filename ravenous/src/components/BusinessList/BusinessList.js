import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList"> {
        //access businesses prop and call map method on it.
        this.props.businesses.map(function(business) {
          return <Business business= {business}/>;
        })
      }
      </div>
    )
  }
}

export default BusinessList;
