// React
import React, {useEffect, useState} from 'react';

// Utility
import {useParams} from 'react-router';
import {IconHelper} from "../../middleware/iconHelper/IconHelper";
import {Redirect} from "react-router-dom";

// Styles
import './Member.scss';

// Interfaces
import * as INTERFACES from "../members/MembersInterfaces";

export const Member: React.FC = () => {
  // Routes
  const {_id}: Record<string, string> = useParams();

  // States
  const [selectedMember, setSelectedMember] = useState<INTERFACES.Member>();
  const [redirectParams, setRedirectParams] = useState<Record<string, unknown>>();

  // Effects
  useEffect(() => {
    const tempMembers: INTERFACES.Member[] = JSON.parse(localStorage.getItem("members") || "[]");
    const tempIndex = tempMembers.findIndex(member => member._id === _id);

    setSelectedMember(tempMembers[tempIndex] as unknown as INTERFACES.Member)
  }, [_id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <div id={'member'}>
        <div className={'member'}>
          {/*HEADER BAR*/}
          <div className={'header-bar'}>
            {/*ICON BACK*/}
            <div
              className={'icon icon__back'}
              onClick={() => setRedirectParams({
                pathname: '/'
              })}
            >
              {IconHelper({testId: `back-icon`, name: 'back', size: 25})}
            </div>

            {/*HEADER*/}
            <h5>
              Member details
            </h5>
          </div>

          {/*MEMBER DETAILS*/}
          <div>
            {/*IMAGE*/}
            <div className={'member-image'} style={{backgroundImage: `url(${selectedMember?.photo})`}}/>

            {/*FIRST NAME + LAST NAME*/}
            <h2 className={'title'}>{selectedMember?.firstName} {selectedMember?.lastName}</h2>

            {/*SPORTS*/}
            <div className={'sport-container'}>
              {selectedMember?.sports.map((sport) =>
                <div className={'sport-wrapper'}>
                  <div className={'icon icon__sport'}>
                    {IconHelper({testId: `back-icon`, name: sport === 'football' ? 'football' : 'sport', size: 40})}
                  </div>

                  <p>{sport.charAt(0).toUpperCase() + sport.slice(1)}</p>
                </div>
              )}
            </div>
          </div>

          {/*REDIRECT*/}
          {redirectParams && Object.keys(redirectParams).length > 0 &&
          <Redirect to={redirectParams}/>
          }
        </div>
      </div>
    </React.Fragment>
  );
};