// React
import React, {useState} from 'react';

// Styles
import './Sports.scss';

// Interfaces
import * as INTERFACES from './SportsInterfaces'

export const Sports: React.FC = () => {
  const [users] = useState<INTERFACES.Sport[]>();

  return (
    <React.Fragment>
      <div id={'users'}>
        <div className={'users'}>
          {
            users?.map((sport, index) => (
              <div
                className={'card'}
                key={index}
                onClick={() => console.log(`Card click - _id: ${sport._id}`)}
              >
                <div
                  className={'card__image'}
                  style={{backgroundImage: `url(${sport.photo})})`}}
                />
                <div className={'card__content'}>
                  <h5 className={'card__title'}>{sport.name}</h5>
                  <button className={'card__more'}> {/*TODO: replace with delete*/}
                    <div className={'dot__1'}/>
                    <div className={'dot__2'}/>
                    <div className={'dot__3'}/>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
};