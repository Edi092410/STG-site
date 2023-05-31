import React, { useEffect, useRef, useState } from 'react';
import { NewReq } from '../NewReq/NewReq';
import { SearchBar } from '../SearchBar.jsx/SearchBar';
import { InfoReq } from '../InfoReq/InfoReq';
import { CreateOrder } from '../CreateOrder/CreateOrder';
import { RightSidebar } from '../../layouts/RightSidebar';

export const ListService = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const active = {
    opacity: '1',
    visibility: 'visible',
    tranform: 'translateY(0)',
    transition: 'var(--speed) ease'
  }

  const inactive = {
    opacity: '0',
    visibility: 'hidden',
    tranform: 'translateY(-20px)',
    transition: 'var(--speed) ease'
  }

  return (
    <>
      <div className='flex-1 mr-[5%] ml-[5%]'>
        <div className='flex items-center justify-around'>
          <NewReq
            className='mr-6'
            button='Шинэ хүсэлт'
            style={modal ? active : inactive}
            openModal={openModal}
          />
          <SearchBar className='ml-6' />
        </div>
        <InfoReq />
      </div>
      <RightSidebar />
      {modal && (
        <div className=''>
          <CreateOrder closeModal={closeModal} />
        </div>
      )}
    </>
  );
};
