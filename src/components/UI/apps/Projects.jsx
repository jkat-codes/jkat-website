import {useState, useEffect} from 'react'; 
import React from 'react';
import { createPortal } from "react-dom"; 
import { useApp } from '../../context/AppContext'; 
import "./Projects.css"; 

export function Project() {
    const {showProjectsModal, setShowProjectsModal} = useApp(); 

    const handleModalQuit = (e) => {
        setShowProjectsModal(false); 
    }

    const modal = (
        <div className="ProjectsContainer">
            <button onClick={handleModalQuit}>Close Modal</button>
        </div>
    )
    const modalRoot = document.getElementById("DesktopContainer"); 
    if (!modalRoot) {
        console.log("DesktopContainer not found!"); 
        return null; 
    }
    return createPortal(modal, modalRoot); 
}