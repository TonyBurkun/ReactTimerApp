var React = require('react'),
    Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
        <Nav/>
        {props.children}
    </div>
  );
};

module.exports = Main;
