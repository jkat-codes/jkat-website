import './Contacts.css'; 
import {useState, useEffect} from 'react'; 
import {createModal, createPortal} from 'react-dom'; 

export function Contacts() {
    const modal = (
        <div className="ContactsContainer">
            Contacts 
        </div>
    )

    const modalRoot = document.getElementById("DesktopContainer"); 
    if(!modalRoot) {
        console.log("DesktopContainer not found!"); 
        return null; 
    }
    return createPortal(modal, modalRoot); 
}