import React from 'react';

class IssueDataComponent extends React.Component {
  render() {
    return (
    <div id="data-table">
      <table border="1">
          <tbody>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Scrum Master</th>
                  <th>Team members</th>            
              </tr>
              <tr>
                  <td>101</td>
                  <td>TCI</td>
                  <td>John</td>
                  <td>12</td>
              </tr>
              <tr>
                  <td>
                    <a href="#">Edit</a> &nbsp;
                    <a href="#">Delete</a>                        
                  </td>
              </tr>
          </tbody>
      </table>
    </div> 
    );
  }
}

export default IssueDataComponent;