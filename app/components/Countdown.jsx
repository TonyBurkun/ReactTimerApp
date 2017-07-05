var React = require('react'),
    Clock = require('Clock');

var Countdown = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Countdown component</h1>
                <Clock totalSeconds={129}/>
            </div>
        );
    }
});

module.exports = Countdown;