var expect= require('expect'),
    React = require('react'),
    ReactDom = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it ('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it ('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy(),
            countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
            $el = $(ReactDom.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    })

    it ('should not call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy(),
            countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
            $el = $(ReactDom.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109b';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })

});