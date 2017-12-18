var React = require('react');
var ReactDOM = require('react-dom');

class SearchBar extends React.Component {
    handleQuery(){
        console.log("Hi～It's time to bed");
    }

    render (){
      return(
          <div className="search-bar">
              <input onChange={this.handleQuery.bind(this)} placeholder="search" />
          </div>
      )
    }
}

class Search extends React.Component {
    render(){
      return(
          <div className="search">
              <SearchBar />
              <div className="results">
                  <div className="in-stock">
                     <h2><a href="#">Toothpaste</a></h2>
                     <p>$2.99</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor</p>
                  </div>
              </div>
          </div>

      )
    }
}

ReactDOM.render(<Search />, document.getElementById('app'));
