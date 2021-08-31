// React
import React from 'react';

// Styles
import './Main.scss';

// Components
import {NavigationPanel} from '../components/navigationPanel/NavigationPanel';

// Interfaces
import * as INTERFACES from './MainInterfaces';

export const Main: React.FC<INTERFACES.MainProperties> = (props: INTERFACES.MainProperties) => {

  return (
    <React.Fragment>
      <div id={'main'}>
        <div className={'container'}>
          {/*SIDE PANEL*/}
          <NavigationPanel/>

          <div className={'wrapper__content'}>
            <div className={'content'}>
              {props.content}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};