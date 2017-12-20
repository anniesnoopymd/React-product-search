var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./component/search.jsx');
var products = require('./products.js');


ReactDOM.render(<Search product={products}/>, document.getElementById('app'));
