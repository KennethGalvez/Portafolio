import React from 'react';
import './consola.css';
import Screen from './Screen.jsx';

export default function Header (){
    return (
        <div className="gameboy">
          <div className='top'>
            <div className='onoff'>
              <div className='arrow-left'></div>
              <div className='arrow-right'></div>
            </div>
          </div>
          <div className='components'>
            <div className='screen'>
              <div className='display'>
                <Screen/>
              </div>
            </div>
            <div className='controls'>
              <div className='inputs'>
                <div className='dpad'>
                  <div className='left'></div>
                  <div className='up'></div>
                  <div className='right'></div>
                  <div className='down'></div>
                </div>
                <div className='buttons'>
                  <div className='button-b'></div>
                  <div className='button-a'></div>
                </div>
                <div className='selections'>
                  <div className='select'></div>
                  <div className='start'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )
};

