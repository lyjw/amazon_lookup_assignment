var ProductList = React.createClass({
  render: function() {
    var products = this.props.products.map(function(product) {
      return <SingleProduct product={ product } />
    }.bind(this));

    return <div>
              <h3>Products</h3>
              <ul>
                { products }
              </ul>
              <a href="products/new" className="btn btn-default">
                Add Product
              </a>
            </div>;
  }
});

var SingleProduct = React.createClass({
  render: function() {
    return <li>
              { this.props.product.name }
            </li>;
  }
});
