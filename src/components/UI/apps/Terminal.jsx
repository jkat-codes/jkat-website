import {useState, useEffect, useRef} from 'react'; 
import React from 'react';
import { createPortal } from 'react-dom'; 
import { useApp } from '../../context/AppContext'; 
import './Terminal.css'; 
import closeIcon from '../../../assets/icons/Traffic Lights/1-close-1-normal.svg'; 
import minimizeIcon from "../../../assets/icons/Traffic Lights/2-minimize-1-normal.svg"; 
import maximizeIcon from "../../../assets/icons/Traffic Lights/3-maximize-1-normal.svg"; 

function SequentialTypeWriter({messages}) {
    // Tracks message index
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0); 
    // Tracks character index
    const [currentCharIndex, setCurrentCharIndex] = useState(0); 

    useEffect(() => {
        if (currentMessageIndex >= messages.length) return; 

        const currentMessage = messages[currentMessageIndex]; 

        if(currentCharIndex >= currentMessage.length) {
            const timeout = setTimeout(() => {
                setCurrentMessageIndex(prev => prev + 1); 
                setCurrentCharIndex(0); // Reset for next message
            }, 500); 
            return () => clearTimeout(timeout); 
        }

        const interval = setInterval(() => {
            setCurrentCharIndex(prev => prev + 1); 
        }, 30); 
        
        return () => clearInterval(interval); 
    }, [currentCharIndex, currentMessageIndex, messages])

    return (
        <div className="TypewriterContainer">
            {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                index === 0 ? (
                    <div>
                        Initializing portfolio...
                        <br />
                        <br />
                    </div>
                ) : (
                    index === 1 ? (

                    <div key={index}>
                            {index < currentMessageIndex ? message: message.substring(0, currentCharIndex)}
                            <br />
                            <br />
                    </div>
                    ) : (
                        index === 5 ? (
                            <div key={index}>
                                    <br />
                                    ~/ portfolio (main) % {index < currentMessageIndex ? message: message.substring(0, currentCharIndex)}
                            </div>
                        ) : (
                        <div key={index}>
                                % {index < currentMessageIndex ? message: message.substring(0, currentCharIndex)}
                        </div>

                        )
                    )
                )
            ))}
        </div>
    )
}

export function Terminal({position, onMouseDown}) {
    const {showTerminalModal, setShowTerminalModal} = useApp(); 
    const welcomeString = "hello"; 
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0); 
    const stop = useRef(); 
    const messages = ["", 
        "Hello! I'm Jasper.", 
        "Current Focus: ReactJS, Python, SQL, Quantitative Data Analysis", 
        "Status: Open for work ✅", 
        "Education: Computer Science and Engineering @ Bucknell University",
        "Close this window and click the desktop icons to learn more about me"

    ]

    const handleModalQuit = (e) => {
        setShowTerminalModal(false); 
    }

    useEffect(() => {
        stop.current = currentMessageIndex >= welcomeString.length; 
    }) 

    useEffect(() => {
        const interval = setInterval(() => {
            if (stop.current) {
                clearInterval(interval); 
            } else {
                setCurrentMessageIndex((prevIndex) => prevIndex + 1); 
            }
        }, 100); 
        return () => {
            clearInterval(interval); 
        }
    }, []); 

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
                    <SequentialTypeWriter messages={messages}></SequentialTypeWriter>
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