import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../Utils/index';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts : [
                {
                    title : 'Example Title 1',
                    body : 'Some Text'
                },
                {
                    title : 'Example Title 2',
                    body : 'Some Text'
                },
                {
                    title : 'Example Title 3',
                    body : 'Some Text'
                }
            ]
        }

        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, "appComponent");
        expect(component.length).toBe(1);
    });

});