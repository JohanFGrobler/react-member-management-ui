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
  const [tempSelectedMember, setTempSelectedMember] = useState<INTERFACES.Member>();
  const [redirectParams, setRedirectParams] = useState<Record<string, unknown>>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [sportsAvailable] = useState<Array<string>>([
    '',
    'Football',
    'Squash',
    'Tennis'
  ])

  // Effects
  useEffect(() => {
    const tempMembers: INTERFACES.Member[] = JSON.parse(localStorage.getItem("members") || "[]");
    const tempIndex = tempMembers.findIndex(member => member._id === _id);

    setSelectedMember(tempMembers[tempIndex] as unknown as INTERFACES.Member)
    setTempSelectedMember(tempMembers[tempIndex] as unknown as INTERFACES.Member)
  }, [_id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handlers
  const handleSportSelect = (value: string): void => {
    if (!value || value === '') return

    let tempSelectedMember = selectedMember;
    let tempSports = selectedMember?.sports;

    tempSports?.push(value);
    tempSelectedMember = {...tempSelectedMember, sports: tempSports} as unknown as INTERFACES.Member;

    setSelectedMember(tempSelectedMember);
  }

  const handleSportDeSelect = (value: string): void => {
    let tempSelectedMember = selectedMember;
    let tempNewMemberSports = selectedMember?.sports;

    const index = tempNewMemberSports?.indexOf(value);

    if (index !== undefined && index >= 0) {
      tempNewMemberSports?.splice(index, 1);
    }

    tempSelectedMember = {...tempSelectedMember, sports: tempNewMemberSports} as unknown as INTERFACES.Member;

    setSelectedMember(tempSelectedMember);
  }

  const handleMemberUpdate = () => {
    let tempSelectedMember = selectedMember;
    const tempMembers: INTERFACES.Member[] = JSON.parse(localStorage.getItem("members") || "[]");
    const tempIndex = tempMembers.findIndex(member => member._id === tempSelectedMember?._id);

    if (tempSelectedMember) {
      tempMembers[tempIndex] = tempSelectedMember;
    }

    localStorage.setItem("members", JSON.stringify(tempMembers));
    setTempSelectedMember(tempSelectedMember)
    setModalOpen(false)
  }

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

            {/*EDIT ICON*/}
            <i className={'icon icon__edit'} onClick={() => setModalOpen(true)}>
              {IconHelper({testId: `edit-icon`, name: 'edit', size: 40})}
            </i>
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

          {/*NEW MEMBER MODAL*/}
          {modalOpen
            ?
            <div className={'modal modal__backdrop'} onClick={() => {
              setSelectedMember(tempSelectedMember)
              setModalOpen(false)
            }}>
              <div
                className={'modal modal__wrapper'}
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                }}
              >
                {/*HEADER*/}
                <h6>Create a new member</h6>

                {/*FIRST NAME*/}
                <div className={'field'}>
                  <label>First name {selectedMember?.firstName === '' && <span className={'indicator'}>*</span>}</label>
                  <input
                    className={'input'}
                    type={'text'}
                    name={'First name'}
                    placeholder={'John'}
                    value={selectedMember?.firstName ?? ''}
                    onChange={(event) => {
                      setSelectedMember({...selectedMember, firstName: event.target.value.toString()} as unknown as INTERFACES.Member)
                    }}
                  />
                </div>

                {/*LAST NAME*/}
                <div className={'field'}>
                  <label>Last name {selectedMember?.lastName === '' && <span className={'indicator'}>*</span>}</label>
                  <input
                    className={'input'}
                    type={'text'}
                    name={'Last name'}
                    placeholder={'Doe'}
                    value={selectedMember?.lastName ?? ''}
                    onChange={(event) => {
                      setSelectedMember({...selectedMember, lastName: event.target.value.toString()} as unknown as INTERFACES.Member)
                    }}
                  />
                </div>

                {/*SPORTS*/}
                <div className={'field'}>
                  <label>Active sports ({selectedMember?.sports.length}) {selectedMember?.sports.length === 0 && <span className={'indicator'}>*</span>}</label>
                  {selectedMember?.sports?.map(sport =>
                    <div className={'selected-sport'}>
                      {/*SPORT*/}
                      <p className={'selected-sport-text'}>{sport.charAt(0).toUpperCase() + sport.slice(1)}</p>

                      {/*REMOVE ICON*/}
                      <i className={'icon icon__close'} onClick={() => handleSportDeSelect(sport)}>
                        {IconHelper({testId: `remove-icon-${sport}`, name: 'close', size: 25})}
                      </i>
                    </div>
                  )}

                  {sportsAvailable.length > 0 &&
                  <select
                    className={'input'}
                    value={''}
                    onChange={(event) => handleSportSelect(event.target.value)}>
                    {sportsAvailable.map(sportAvailable =>
                      <option
                        disabled={selectedMember?.sports?.includes(sportAvailable.toLowerCase())}
                        value={sportAvailable.toLowerCase()}>
                        {sportAvailable}
                      </option>
                    )}
                  </select>
                  }
                </div>

                {/*ACTIONS*/}
                <div className={'actions-wrapper'}>
                  {/*SAVE*/}
                  <button
                    className={selectedMember?.firstName === '' || selectedMember?.lastName === '' || selectedMember?.sports.length === 0 ? 'button button__save button__save--disabled' : 'button button__save'}
                    disabled={selectedMember?.firstName === '' || selectedMember?.lastName === '' || selectedMember?.sports.length === 0}
                    onClick={() => handleMemberUpdate()}
                  >
                    Save
                  </button>

                  {/*CANCEL*/}
                  <button
                    className={'button button__cancel'}
                    onClick={() => {
                      setSelectedMember(tempSelectedMember)
                      setModalOpen(false)
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            :
            null
          }

          {/*REDIRECT*/}
          {redirectParams && Object.keys(redirectParams).length > 0 &&
          <Redirect to={redirectParams}/>
          }
        </div>
      </div>
    </React.Fragment>
  );
};