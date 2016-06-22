var Notification = React.createClass({
  render: function() {
    return <div className="alert alert-warning">
              { this.props.notification }
            </div>;
  }
});
