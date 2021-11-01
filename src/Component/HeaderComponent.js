import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadDev, loadLive } from '../Actions/Header'

function HeaderComponent() {
  const header = useSelector(state => state.header);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => {
        dispatch(loadDev());
      }}>
        dev
            </button>
      <button onClick={() => { dispatch(loadLive()) }}>
        live
            </button>
      <div>{header.currentServer} server</div>
    </div>
  )
}

export default HeaderComponent
