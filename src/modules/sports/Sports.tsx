// React
import React, {useState} from 'react';

// Styles
import './Sports.scss';

// Interfaces
import * as INTERFACES from './SportsInterfaces'

export const Sports: React.FC = () => {
  // States
  const [sports] = useState<INTERFACES.Sport[]>([
    {
      name: 'Football',
      photo: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      name: 'Squash',
      photo: 'https://images.unsplash.com/photo-1554290813-ec6a2a72e5c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Tennis',
      photo: 'https://images.unsplash.com/photo-1600701707248-f491d5ac5056?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
  ]);

  return (
    <React.Fragment>
      <div id={'sports'}>
        <div className={'sports'}>
          {/*HEADER BAR*/}
          <div className={'header-bar'}>
            {/*HEADER*/}
            <h5>
              Sports
            </h5>
          </div>

          {/*CARDS*/}
          {
            sports?.map((sport, index) => (
              <div
                className={'card'}
                key={index}
              >
                <div
                  className={'card__image'}
                  style={{backgroundImage: `url(${sport.photo})`}}
                />
                <div className={'card__content'}>
                  <h5 className={'card__title'}>{sport.name}</h5>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
};