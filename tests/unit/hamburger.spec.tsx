import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Hamburger} from '../../components/hamburger'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import  * as ddd from 'react-device-detect'



beforeAll( function(){
    configure({ adapter: new Adapter() })
  })


  describe('A suite', function() {
    it('should render without throwing an error', function() {
        expect(shallow(<Hamburger />).containsMatchingElement(<div />))
      });
   
      it('should have full text', function(){
        if(!ddd.isMobile){
       
            let component = shallow(<Hamburger />)
            expect(component.find('Tooltip').at(3)).toHaveTextContent

        }
    })
  })
