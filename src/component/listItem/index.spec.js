import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils/index';
import ListItem from './index';

describe('ListItem Componet', () => {

    describe('Checking PropTypes', () => {
        it('Should Not throw a warning', () => {
            const expectedProps = {
                title : 'Example Title',
                desc : 'Example Desc'
            };

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                title : 'Example Title',
                desc : 'Example Desc'
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Should not render', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                desc : 'Example Desc'
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Component is not rendered', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });
    });

});