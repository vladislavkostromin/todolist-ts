import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper teal lighten-3 px1">
                <a href="/" className="brand-logo">Todolist</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Мои заметки</NavLink></li>
                    <li><NavLink to="/info">Информация</NavLink></li>
                </ul>
            </div>
        </nav>
        
    );
};