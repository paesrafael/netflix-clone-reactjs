import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGift, faBell } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import logo from '~/assets/images/netflix-logo.png'

export default function Header({ scroll }) {
  const menuList = [
    { title: 'Inicio', classMenu: 'current' },
    { title: 'Séries' },
    { title: 'Filmes' },
    { title: 'Mais recentes' },
    { title: 'Minha lista' },
  ]

  // Só para deixar o código mais clean :)
  const imageAvatarURL =
    'https://occ-0-152-185.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/'
  const imageAvatarName = `AAAABceST-6R3jkl9pV4xrrz_lvCYtBcJFtnBfcCE4gr0lFQna6S4sYRgawvSIi6KumP-yY1AlgL_AytHM9KNZytS0I.png`
  const imageAvatar = `${imageAvatarURL}${imageAvatarName}`

  return (
    <section className={`header-movie ${scroll ? 'page-scroll' : ''}`}>
      <div className="header-movie-container">
        <div className="main-header menu-navigation display-flex-space-between">
          <div className="display-flex">
            <a className="logo" href="#">
              <img src={logo} alt="logo da Netflix" width="100" />
            </a>

            <ul className="ul-navigation">
              <li className="ul-navigation-menu">
                <a className="menu-trigger" href="#">
                  Navegar
                </a>
              </li>

              {!!menuList &&
                menuList.map((item, key) => (
                  <li key={key} className="ul-navigation-tab">
                    <a className={item.classMenu} href="#">
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="secondary-navigation">
            <div className="nav-element">
              <div className="search-main">
                <div className="search-item">
                  <span className="icon-search">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
            </div>

            <div className="nav-element show-kids">
              <a href="#" className="uppercase">
                Infantil
              </a>
            </div>

            <div className="nav-element">
              <span className="gifts">
                <span className="gifts-menu">
                  <FontAwesomeIcon icon={faGift} />
                </span>
              </span>
            </div>

            <div className="nav-element">
              <span className="notifications">
                <span className="notifications-menu">
                  <span className="icon-notification">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                </span>
              </span>
            </div>

            <div className="nav-element">
              <span className="account-menu-item">
                <span className="account-dropdown-button">
                  <span className="profile-link">
                    <img src={imageAvatar} alt="" className="profile-icon" />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
