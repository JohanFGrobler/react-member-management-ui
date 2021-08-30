// React
import React, {useState} from 'react';

// Styles
import './NavigationPanel.scss';

// Navigation Items
import {NavigationItems} from './NavigationItems';

// Middleware
import {IconHelper} from '../../../middleware/iconHelper/IconHelper';

// Interfaces
import * as INTERFACES from './NavigationPanelInterfaces';

export const NavigationPanel: React.FC = () => {
  // States
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);
  const [menuItems] = useState<INTERFACES.NavigationItem[]>(NavigationItems);

  return (
    <React.Fragment>
      {/*DESKTOP*/}
      <div id={'navigation--desktop'}>
        <div className={`menu menu${open ? '--open' : '--closed'}`}>
          <div className={'menu__container'}>
            {/*TOGGLE*/}
            <button
              className="toggle"
              onClick={() => setOpen(!open)}
              tabIndex={1}
            >
              <div className="toggle__burger"/>
            </button>

            {/*NAV*/}
            <nav className={'navigation'}>
              <ul>
                {menuItems.map((item, index) => (
                  <li
                    className={`navigation__item${index === active ? ' navigation--active navigation__item--active' : ''}`}
                    key={index}
                    tabIndex={index + 1}
                    onClick={() => setActive(index)}
                  >
                    {/*ICON*/}
                    <i className={'navigation__icon'}>
                      {IconHelper({testId: `navigation-icon-${item.name}`, name: item.icon, size: 25})}
                    </i>

                    {/*NAME*/}
                    <p className={'navigation__text'}>{item.name}</p>
                  </li>
                ))}
              </ul>

            </nav>
          </div>
        </div>
      </div>

      {/*MOBILE*/}
      <div id={'navigation--mobile'}>
        <ul className={'menu'}>
          {
            menuItems.map((item, index) => (
              <li className={'menu__item'} key={index} onClick={() => setActive(index)}>
                <i className={'menu__icon'}>
                  {IconHelper({testId: `menu-icon-${item.name}`, name: item.icon, size: 25})}
                </i>
              </li>
            ))
          }
        </ul>
      </div>
    </React.Fragment>
  );
};