import React from 'react';

class HeaderComponent extends React.Component {
  render() {
    return (
    <div id="header">
      <div id="logo">Logo</div>
      <div id="navigation">
          <a href="#">Home</a>|
          <a href="#">About</a>|
          <a href="#">Service</a>|
          <a href="#">Contact</a>|
      </div>
    </div>
    );
  }
}

export default HeaderComponent;