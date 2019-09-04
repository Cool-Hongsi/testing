import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../Utils/index';

// setUp function usually stay in test file becuase of initial setting up function (shallow)
const setUp = (props={}) => {
    const component = shallow(<Header {...props} />); // shallow function acts as rendering <Header /> Component
    // console.log(component.debug()); // check what shallow function is doing
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => { // Always implement each test before testing
        component = setUp();
    });

    
    it('Should render without errors', () => {
        // const component = setUp();
        // console.log(component.debug());
        // const wrapper = component.find(`[data-test='headerComponent']`);
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        // const component = setUp();
        // console.log(component.debug());
        // const logo = component.find(`[data-test='logoIMG']`);
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });

});