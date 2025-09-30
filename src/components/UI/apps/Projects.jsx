import {useState, useEffect} from 'react'; 
import React from 'react';
import { createPortal } from "react-dom"; 
import { useApp } from '../../context/AppContext'; 
import "./Projects.css"; 
import closeIcon from '../../../assets/icons/Traffic Lights/1-close-1-normal.svg'; 
import minimizeIcon from "../../../assets/icons/Traffic Lights/2-minimize-1-normal.svg"; 
import maximizeIcon from "../../../assets/icons/Traffic Lights/3-maximize-1-normal.svg"; 

export function Project({position, onMouseDown}) {
    const {showProjectsModal, setShowProjectsModal} = useApp(); 

    const handleModalQuit = (e) => {
        setShowProjectsModal(false); 
    }

    const modal = (
        <div 
            className="ProjectsContainer"
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
            <div className="ProjectsMainContainer">
                <span>Coming Soon!</span>
            </div>
        </div>
    )
    const modalRoot = document.getElementById("DesktopContainer"); 
    if (!modalRoot) {
        console.log("DesktopContainer not found!"); 
        return null; 
    }
    return createPortal(modal, modalRoot); 
}