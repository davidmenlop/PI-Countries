import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
/* import Adapter from "enzyme-adapter-react-16"; */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import LandingPage from './LandingPage'

/* configure({ adapter: new Adapter() }); */
configure({ adapter: new Adapter() })

describe('<LandingPage />', () => {
    let wrapper;
    beforeEach(() => {
      wrapper =  shallow(<LandingPage />)
    })
  
    it('deberia renderizar 1 componente <Link />', () => {
      expect(wrapper.find(Link)).toHaveLength(1)
    })
  

    it('El primer Link debe tener el texto "TODOS" y cambiar la ruta hacia "/".', () => {
      //el orden donde declaran los Links es importante
      expect(wrapper.find(Link).at(0).prop('to')).toEqual('/Home');
    });
    
   
  });
