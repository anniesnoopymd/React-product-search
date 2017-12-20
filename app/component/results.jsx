var React = require('react');
var SearchBar = requires('./search_bar.jsx');
var Result = requires('./results.jsx');

class Results extends React.Component {
    constructor (props) {
       super(props);
       this.state = {
         foundProducts: props.products
       }
     }

     componentWillReceiveProps(nextProps) {
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
          {this.state.foundProducts.map(function(product,i){
            return (
                <Result product={product} key={i}/>
            )
          })}
        </div>
      )
    }

}

module.exports = Search;
