import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper teal lighten-3 px1">
                <a href="/" className="brand-logo">Todolist</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Мои заметки</a></li>
                    <li><a href="/">Информация</a></li>
                </ul>
            </div>
        </nav>
        
    );
};