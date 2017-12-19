var React = require('react');
var ReactDOM = require('react-dom');
var products = require('./products.js');
console.log(products);

class Result extends React.Component {
    render(){
      return(
          <div className="results">
             {console.log(this.state.foundProducts)}
         </div>
      )
    }
}

class Results extends React.Component {
    constructor (props) {
       super(props);
       this.state = {
         foundProducts: props.products
       }
     }

     componentWillReceiveProps (nextProps) {
        var foundProducts = nextProps.products.filter(product => {
          return product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
                 product.description.toLowerCase().match(nextProps.query.toLowerCase());
        });
        this.setState({
          foundProducts: foundProducts
        });
      }

    render(){
      return(
        <div className="results">
            <div className="in-stock">
               <h2><a href="#">Toothpaste</a></h2>
               <p>$2.99</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor</p>
            </div>
        </div>
      )
    }

}

class SearchBar extends React.Component {
    handleQuery(event){
        this.props.onQuery(event.target.value);
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
    constructor(props) {
      super(props);
      this.state = {
        query: ''
      };
    }

    handleQuery(query){
      console.log(query);
        this.setState({'query': query.toLowerCase().trim()})
    }

    render(){
      return(
          <div className="search">
              <SearchBar onQuery={this.handleQuery.bind(this)}/>
              <Results products={this.props.product} query={this.state.query}/>
          </div>

      )
    }
}

ReactDOM.render(<Search product={products}/>, document.getElementById('app'));
