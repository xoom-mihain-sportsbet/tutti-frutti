import React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

const logo = require('../src/images/download.png');

const sidebarMenu = style({
    width: '15%',
    minWidth: '141px',
    height: '100vh',
    backgroundColor: '#00ab9a',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
})
   
const menuItemLinks = style({
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    padding: '2rem 0 2rem 1rem',
    fontSize: '20px',
    textDecoration: 'none',
    color: '#ffffff',
    $nest: {
        '&:hover': {
            color: '#000080',
        }
    }
})

const logoImage = style({
    width: '100%',
    alignItems: 'center',
    padding: '1rem 0 0 0',
})
    
const sidebarData = [
    {
        title: 'Quotes',
        path: '/'
    },

    {
        title: 'Favorites',
        path: '/favorites'
    },
]

export default function SideBar() {
    return (
        <nav className={sidebarMenu}>
            <img alt='logo' src={String(logo)} className={logoImage}/>
            {sidebarData.map((item, index) => {
                return (
                    <Link key={index} className={menuItemLinks} to={item.path}>
                        <span>{item.title}</span>
                    </Link>
                )
            })}
        </nav>
    );
}