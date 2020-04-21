import React from 'react';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import IssueDataComponent from './IssueDataComponent';

class IssueComponent extends React.Component {
  render() {
    return (
      <div id="Issue-container">
        <HeaderComponent />
        <SearchComponent />
        <IssueDataComponent />
      </div>
      );
    }
  }

  export default IssueComponent;
