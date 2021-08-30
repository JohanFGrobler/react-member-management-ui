import React from 'react';

// Interfaces
import * as INTERFACES from './IconHelperInterfaces';

// Icons
import {ReactComponent as Back} from '../../assets/icons/back.svg';
import {ReactComponent as Close} from '../../assets/icons/close.svg';
import {ReactComponent as Delete} from '../../assets/icons/delete.svg';
import {ReactComponent as Football} from '../../assets/icons/football.svg';
import {ReactComponent as Sport} from '../../assets/icons/sport.svg';
import {ReactComponent as User} from '../../assets/icons/user.svg';

export const IconHelper: React.FC<INTERFACES.IconHelperProperties> = (props: INTERFACES.IconHelperProperties) => {
  //Icons
  const iconList: INTERFACES.IconListInterface = {
    back: <Back data-testid={props?.testId} className={props?.className ?? 'icon'} width={props.size ?? 10} height={props.size ?? 10} title={props?.title ?? 'Back'}/>,
    close: <Close data-testid={props?.testId} className={props?.className ?? 'icon'} width={props.size ?? 10} height={props.size ?? 10} title={props?.title ?? 'Close'}/>,
    delete: <Delete data-testid={props?.testId} className={props?.className ?? 'icon'} width={props.size ?? 10} height={props.size ?? 10} title={props?.title ?? 'Delete'}/>,
    football: <Football data-testid={props?.testId} className={props?.className ?? 'icon'} width={props.size ?? 10} height={props.size ?? 10} title={props?.title ?? 'Football'}/>,
    sport: <Sport data-testid={props?.testId} className={props?.className ?? 'icon'} width={props.size ?? 10} height={props.size ?? 10} title={props?.title ?? 'Sport'}/>,
    user: <User data-testid={props?.testId} className={props?.className ?? 'icon'} width={props.size ?? 10} height={props.size ?? 10} title={props?.title ?? 'User'}/>,
  };

  return (
    iconList[props.name]
  );
};
