import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
       <header className="header">
        <div className="container">
            <h1 className="container-title">StuDent ChaT</h1>
        </div>
        <div className="menu-container" id="menu-container">
          <div className="menu-btn">
            <div className="menu-btn-burger"></div>
          </div>
          <nav className="menu" id="menu">
            <ul>
              <li><a href="index.html">Главная</a></li>
              <li><a href="group.html">Группа</a></li>
              <li><a href="news.html">Новости</a>
                    <div class="dropdown-menu">
                        <ul>
                            <li><a href="#">Все новости</a></li>
                            <li><a href="#">Общество</a></li>
                            <li><a href="#">Технологии</a></li>
                            <li><a href="#">Культура</a></li>
                            <li><a href="#">Спорт</a></li>
                        </ul>
                    </div>
              </li>
              <li><a href="teacher.html">Учителя</a></li>
              <li><a href="account.html">Регистрация/Войти</a></li>
            </ul>
        </nav>
        </div>
    </header>
    </>
  )
}

export default Header
