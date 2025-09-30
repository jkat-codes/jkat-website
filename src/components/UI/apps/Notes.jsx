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
                <h2>Welcome! My name is Jasper.</h2>
                <h3>I am currently a Computer Science and Engineering student at Bucknell University.</h3>
                <br />
                <br />
                <h4>Technical Skills: </h4>
                <h5>Python, Java, SwiftUI, React, JavaScript, HTML/CSS, Node.js, Electron.js, Flask, Git, Bash, Zsh, Vim, VS Code, Visual Studio, pandas, NumPy, Matplotlib, Openpyxl, Requests, ExcelJS, Selenium Webdriver, Tkinter, PyQT, Micorsoft Excel, Supabase, PostgreSQL, Jupyter Notebook, Google Colab</h5>
                <br />
                <br />
                <h4>What am I working on?</h4>
                <ul>
                    <li>
                        <h5>Options Risk Management Platform (Tauri/React)</h5>
                    </li>
                    <li>
                        <h5>Market Analysis Platform (Javascript/Python)</h5>
                    </li>
                </ul>
                <br />
                <br />
                <h4>What courses am I taking?</h4>
                <ul>
                    <li>
                        <h5>Software Engineering & Design</h5>
                    </li>
                    <li>
                        <h5>Spreadsheet Modeling & Data Analysis</h5>
                    </li>
                    <li>
                        <h5>Calculus III</h5>
                    </li>
                </ul>

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

