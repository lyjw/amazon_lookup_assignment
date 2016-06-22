var Search = React.createClass({
  render: function() {
    return <div className="productSearch">
              <h3>Enter the Product URL</h3>
              <SearchForm authenticity_token={ this.props.authenticity_token } />
              <a href="/products" className="btn btn-default">See all Products</a>
            </div>;
  }
});

var SearchForm = React.createClass({
  render: function() {
    return <form id="search" action="/products/search" method="POST">
              <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
              <input type="text" name="product_url" />
              <br />
              <input type="submit" value="Submit" className="btn btn-primary" />
            </form>;
  }
});
