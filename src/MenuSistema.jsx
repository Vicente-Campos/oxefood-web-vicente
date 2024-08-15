import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { logout } from './views/util/AuthenticationService';

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
                   to='/home'
               />

               <Menu.Item
                   name='cliente'
                   active={activeItem === 'cliente'}
                   onClick={() => setActiveItem('cliente')}
                   as={Link}
                   to='/list-cliente'
               />

                <Menu.Item
                   name='produto'
                   active={activeItem === 'produto'}
                   onClick={() => setActiveItem('produto')}
                   as={Link}
                   to='/list-produto'
               />

               <Menu.Item
                   name='entregador'
                   active={activeItem === 'entregador'}
                   onClick={() => setActiveItem('entregador')}
                   as={Link}
                   to='/list-entregador'
               />
                <Menu.Item
                   name='fornecedor'
                   active={activeItem === 'fornecedor'}
                   onClick={() => setActiveItem('fornecedor')}
                   as={Link}
                   to='/list-fornecedor'
               />
                <Menu.Item
                   name='fabricante'
                   active={activeItem === 'fabricante'}
                   onClick={() => setActiveItem('fabricante')}
                   as={Link}
                   to='/list-fabricante'
               />
               <Menu.Item
                    className='navbar__item--mobile'
                    onClick={logout}
                    content='Sair'
                    as={Link}
                    to='/'
                />

           </Menu>
       </>
   )
}


