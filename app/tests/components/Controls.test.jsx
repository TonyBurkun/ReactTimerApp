var expect= require('expect'),
    React = require('react'),
    ReactDom = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });


    describe('render', () => {
       it('should render pause when started', () => {
           var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>),
               $el = $(ReactDom.findDOMNode(controls)),
               $pauseButton = $el.find('button:contains(Pause)');

           expect($pauseButton.length).toBe(1);

       });

        it('should render start when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>),
                $el = $(ReactDom.findDOMNode(controls)),
                $pauseButton = $el.find('button:contains(Start)');

            expect($pauseButton.length).toBe(1);

        });



    });
});