import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Foo from '@/components/Foo';
import Bar from '@/components/Bar'

beforeAll( function(){
  configure({ adapter: new Adapter() })
})

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Bar />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Foo />).text()).toEqual('Bar');
  });
});