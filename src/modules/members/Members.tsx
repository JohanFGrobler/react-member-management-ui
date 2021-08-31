// React
import React, {useState, useEffect} from 'react';

// Utility
import {Redirect} from "react-router-dom";

// Styles
import './Members.scss';

// Interfaces
import * as INTERFACES from './MembersInterfaces'
import {IconHelper} from "../../middleware/iconHelper/IconHelper";

export const Members: React.FC = () => {
  // States
  const [members, setMembers] = useState<INTERFACES.Member[]>();
  const [newMember, setNewMember] = useState<INTERFACES.Member>({
    _id: '',
    firstName: '',
    lastName: '',
    photo: 'https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif',
    sports: []
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [redirectParams, setRedirectParams] = useState<Record<string, unknown>>();
  const [sportsAvailable] = useState<Array<string>>([
    '',
    'Football',
    'Squash',
    'Tennis'
  ])

  // Effects
  useEffect(() => {
    initialize()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handlers
  const initialize = (): void => {
    const tempMembers: INTERFACES.Member[] = JSON.parse(localStorage.getItem("members") || "[]");

    if (tempMembers.length > 0) {
      setMembers(tempMembers)
      return;
    }

    const tempMembersList = [
      {
        _id: "612c98fe26f14cf9bb94c46c",
        firstName: "Susanna",
        lastName: "Nunez",
        photo: "https://images.unsplash.com/photo-1588453383063-37ea0b78f30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        sports: [
          "tennis",
          "football"
        ]
      },
      {
        _id: "612c98fe068d2dd1e4dc1870",
        firstName: "Maura",
        lastName: "Phelps",
        photo: "https://images.unsplash.com/photo-1428931996691-a5108d4cdbf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "football"
        ]
      },
      {
        _id: "612c98fe9c7ade42a5923942",
        firstName: "Maryellen",
        lastName: "Cooley",
        photo: "https://images.unsplash.com/photo-1542343633-ce3256f2183e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80",
        sports: [
          "football",
          "squash"
        ]
      },
      {
        _id: "612c98fe4399dd294a1f59f3",
        firstName: "Burnett",
        lastName: "Hicks",
        photo: "https://images.unsplash.com/photo-1574108233269-86d1199d28de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        sports: [
          "tennis"
        ]
      },
      {
        _id: "612c98fec7caedd49ffb1548",
        firstName: "Amalia",
        lastName: "Barton",
        photo: "https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "football",
          "squash",
          "tennis"
        ]
      },
      {
        _id: "612c98fe105e9cd3e23e2162",
        firstName: "Jeri",
        lastName: "Robles",
        photo: "https://images.unsplash.com/photo-1608791952180-79294109d843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "tennis"
        ]
      },
      {
        _id: "612c98fe048ecea01ddbc10c",
        firstName: "Gill",
        lastName: "Vincent",
        photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "tennis"
        ]
      },
      {
        _id: "612c98fe610f4eaaf3bc82ea",
        firstName: "Nettie",
        lastName: "Schroeder",
        photo: "https://images.unsplash.com/photo-1599842057874-37393e9342df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "tennis"
        ]
      },
      {
        _id: "612c98feaf5ebf630128fd71",
        firstName: "Marlene",
        lastName: "Schultz",
        photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        sports: [
          "squash",
          "tennis",
          "football"
        ]
      },
      {
        _id: "612c98fe2bb5c04b399891fb",
        firstName: "Chandler",
        lastName: "Mccarthy",
        photo: "https://images.unsplash.com/photo-1548536904-f6660b76e77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        sports: [
          "football",
          "squash"
        ]
      }
    ]

    localStorage.setItem("members", JSON.stringify(tempMembersList));
    setMembers(tempMembersList)
  }

  const handleMemberAdd = (): void => {
    let tempMember = {...newMember, _id: Date.parse(new Date().toString()).toString()};
    let tempMembers = members;

    tempMembers?.push(tempMember as unknown as INTERFACES.Member);
    setMembers(tempMembers);
    localStorage.setItem("members", JSON.stringify(tempMembers));
    setModalOpen(false)
    setNewMember({
      _id: '',
      firstName: '',
      lastName: '',
      photo: 'https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif',
      sports: []
    })
  }

  const handleMemberRemove = (index: number): void => {
    let tempMembers = members;

    tempMembers?.splice(index, 1);

    localStorage.setItem("members", JSON.stringify(tempMembers));
    setMembers([...tempMembers as unknown as Array<INTERFACES.Member>]);
  }

  const handleSportSelect = (value: string): void => {
    if (!value || value === '') return

    let tempNewMember = newMember;
    let tempSports = newMember.sports;

    tempSports.push(value);
    tempNewMember = {...tempNewMember, sports: tempSports} as unknown as INTERFACES.Member;

    setNewMember(tempNewMember);
  }

  const handleSportDeSelect = (value: string): void => {
    let tempNewMember = newMember;
    let tempNewMemberSports = newMember.sports;

    const index = tempNewMemberSports.indexOf(value);

    if (index >= 0) {
      tempNewMemberSports.splice(index, 1);
    }

    tempNewMember = {...tempNewMember, sports: tempNewMemberSports} as unknown as INTERFACES.Member;

    setNewMember(tempNewMember);
  }

  return (
    <React.Fragment>
      <div id={'members'}>
        <div className={'members'}>
          {/*HEADER BAR*/}
          <div className={'header-bar'}>
            {/*HEADER*/}
            <h5>
              Members
            </h5>

            {/*CREATE MEMBER*/}
            <button
              className={'button button__new-member'}
              onClick={() => setModalOpen(true)}
            >
              + New Member
            </button>
          </div>

          {/*CARDS*/}
          {
            members?.map((member, index) => (
              <div
                className={'card'}
                key={index}
                onClick={() => setRedirectParams({
                  pathname: `/member/${member._id}`,
                  state: {
                    _id: member._id
                  }
                })}
              >
                <div
                  className={'card__image'}
                  style={{backgroundImage: `url(${member.photo})`}}
                />
                <div className={'card__content'}>
                  <h5 className={'card__title'}>{member.firstName} {member.lastName}</h5>
                  <i className={'icon icon__delete'} onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleMemberRemove(index)
                  }}>
                    {IconHelper({testId: `member-icon-${index}`, name: 'delete', size: 25})}
                  </i>
                </div>
              </div>
            ))
          }

          {/*NEW MEMBER MODAL*/}
          {modalOpen
            ?
            <div className={'modal modal__backdrop'} onClick={() => setModalOpen(false)}>
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
                  <label>First name {newMember?.firstName === '' && <span className={'indicator'}>*</span>}</label>
                  <input
                    className={'input'}
                    type={'text'}
                    name={'First name'}
                    placeholder={'John'}
                    value={newMember?.firstName ?? ''}
                    onChange={(event) => {
                      setNewMember({...newMember, firstName: event.target.value.toString()} as unknown as INTERFACES.Member)
                    }}
                  />
                </div>

                {/*LAST NAME*/}
                <div className={'field'}>
                  <label>Last name {newMember?.lastName === '' && <span className={'indicator'}>*</span>}</label>
                  <input
                    className={'input'}
                    type={'text'}
                    name={'Last name'}
                    placeholder={'Doe'}
                    value={newMember?.lastName ?? ''}
                    onChange={(event) => {
                      setNewMember({...newMember, lastName: event.target.value.toString()} as unknown as INTERFACES.Member)
                    }}
                  />
                </div>

                {/*SPORTS*/}
                <div className={'field'}>
                  <label>Active sports ({newMember.sports.length}) {newMember?.sports.length === 0 && <span className={'indicator'}>*</span>}</label>
                  {newMember?.sports?.map(sport =>
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
                        disabled={newMember?.sports?.includes(sportAvailable.toLowerCase())}
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
                    className={newMember.firstName === '' || newMember.lastName === '' || newMember.sports.length === 0 ? 'button button__save button__save--disabled' : 'button button__save'}
                    disabled={newMember.firstName === '' || newMember.lastName === '' || newMember.sports.length === 0}
                    onClick={() => handleMemberAdd()}
                  >
                    Save
                  </button>

                  {/*CANCEL*/}
                  <button
                    className={'button button__cancel'}
                    onClick={() => setModalOpen(false)}
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