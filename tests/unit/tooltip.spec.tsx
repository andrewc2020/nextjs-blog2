import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Tooltip  from '../../components/tooltip'
import dynamic from 'next/dynamic'


beforeAll( function(){
  configure({ adapter: new Adapter() })
})


describe('A suite', function() {
    it('should render without throwing an error', function() {
      expect(shallow(<Tooltip content="I'm a tooltip!">this</Tooltip>).contains(<span>this</span>)).toBe(true);
    });
    it('should render to static HTML', function() {
      expect(render(<Tooltip content="I'm a tooltip!">this</Tooltip>).text()).toEqual('this');
    });
})