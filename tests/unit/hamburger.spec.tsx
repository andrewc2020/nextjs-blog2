import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Hamburger} from '../../components/hamburger'



beforeAll( function(){
    configure({ adapter: new Adapter() })
  })


  describe('A suite', function() {
    it('should render without throwing an error', function() {
        expect(shallow(<Hamburger />).containsMatchingElement(<div />))
      });
    // if(rdd.ismobile){
    //     it('should have full text', function(){
    //         let component = mount(<Hamburger />)
    //         expect(component.find('a').at(3)).toHaveTextContent

    //     })
    // }
  })
