import {useState, useEffect} from 'react'; 
import React from 'react';
import { createPortal } from 'react-dom';
import { useApp } from '../../context/AppContext';
import './Notes.css'; 
import closeIcon from '../../../assets/icons/Traffic Lights/1-close-1-normal.svg'; 
import minimizeIcon from "../../../assets/icons/Traffic Lights/2-minimize-1-normal.svg"; 
import maximizeIcon from "../../../assets/icons/Traffic Lights/3-maximize-1-normal.svg"; 

export function Notes({position, onMouseDown}) {
    const {showNotesModal, setShowNotesModal} = useApp(); 
    
    const handleModalQuit = (e) => {
        setShowNotesModal(false); 
    }

    const modal = (
        <div 
            className="NotesContainer"
            style={{
                position: 'absolute', 
                left: `${position.x}px`, 
                top: `${position.y}px`, 
            }}
        >   
            <div className="titlebar" onMouseDown={onMouseDown}>
                <img className="closeIcon" src={closeIcon} alt="" onClick={handleModalQuit}/>
                <img src={minimizeIcon} alt="" className="minimizeIcon" />
                <img src={maximizeIcon} alt="" className="maximizeIcon" />
            </div>
            <div className="NotesMainContent">
                <span>Welcome! My name is Jasper Katalevsky. I am an aspiring financial technology engineer.</span>
            </div>
        </div>
    )
    const modalRoot = document.getElementById("DesktopContainer"); 
    if (!modalRoot) {
        console.log("MainContainer not found!"); 
        return null; 
    }
    return createPortal(modal, modalRoot); 
}

