import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function MenuSistema () {

   const [activeItem, setActiveItem] = useState();

   return(
       <>
           <Menu inverted>
              
               <Menu.Item
                   name='home'
                   active={activeItem === 'home'}
                   onClick={() => setActiveItem('home')}
                   as={Link}
                   to='/'
               />

               <Menu.Item
                   name='cliente'
                   active={activeItem === 'cliente'}
                   onClick={() => setActiveItem('cliente')}
                   as={Link}
                   to='/form-cliente'
               />

<Menu.Item
                   name='produto'
                   active={activeItem === 'produto'}
                   onClick={() => setActiveItem('produto')}
                   as={Link}
                   to='/form-produto'
               />

               <Menu.Item
                   name='entregador'
                   active={activeItem === 'entregador'}
                   onClick={() => setActiveItem('entregador')}
                   as={Link}
                   to='/form-entregador'
               />

           </Menu>
       </>
   )
}

