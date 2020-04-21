import React from 'react';

class SearchComponent extends React.Component {
  render() {
    return (
    <div id="search-form">
      <form>
        <table>
            <tbody>
            <tr>
                <td>
                    <input type="text" name="search-issue" /> &nbsp;
                    <button type="submit">Search</button>
                </td>
            </tr> 
            </tbody>
        </table>  
      </form>
    </div> 
    );
  }
}

export default SearchComponent;