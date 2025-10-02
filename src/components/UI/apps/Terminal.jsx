import {useState, useEffect} from 'react'; 
import React from 'react';
import { createPortal } from 'react-dom'; 
import { useApp } from '../../context/AppContext'; 
import './Terminal.css'; 
import closeIcon from '../../../assets/icons/Traffic Lights/1-close-1-normal.svg'; 
import minimizeIcon from "../../../assets/icons/Traffic Lights/2-minimize-1-normal.svg"; 
import maximizeIcon from "../../../assets/icons/Traffic Lights/3-maximize-1-normal.svg"; 

export function Terminal({position, onMouseDown}) {
    const {showTerminalModal, setShowTerminalModal} = useApp(); 
    
    const handleModalQuit = (e) => {
        setShowTerminalModal(false); 
    }

    const modal = (
        <div className="TerminalContainer" style={{
            position: 'absolute', 
            left: `${position.x}px`, 
            top: `${position.y}px`
        }}>
            <div className="titlebar" onMouseDown={onMouseDown}>
                <img className="closeIcon" src={closeIcon} alt="" onClick={handleModalQuit}/>
                <img src={minimizeIcon} alt="" className="minimizeIcon" />
                <img src={maximizeIcon} alt="" className="maximizeIcon" />
            </div>
            <div className="TerminalMainContainer">
                <div className="TerminalMainContent">

                </div>
            </div>

        </div>
    )

    const modalRoot = document.getElementById("DesktopContainer"); 
    if(!modalRoot) {
        console.log("DesktopContainer not found."); 
        return null; 
    }

    return createPortal(modal, modalRoot); 
}