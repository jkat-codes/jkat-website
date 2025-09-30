import './Desktop.css'; 
import {useState, useEffect} from 'react'; 
import { useContext } from 'react';
import DocumentsIcon from '../../assets/icons/Folders Beta 3/Documents.png'
import TextIcon from '../../assets/icons/Misc/Generic Document.png'
import ContactsIcon from '../../assets/icons/Applications/Address Book.png'; 
import {createModal} from 'react-dom'; 
import {Notes} from '../UI/apps/Notes'; 
import {Contacts} from '../UI/apps/Contacts'; 
import {Project} from '../UI/apps/Projects'; 
import { useApp } from '../context/AppContext';


export function Desktop() {
    const {showNotesModal, setShowNotesModal, showContactsModal, setShowContactsModal, showProjectsModal, setShowProjectsModal} = useApp(); 
    const [items, setItems] = useState([
        {id: 1, iconUrl: DocumentsIcon, text: "Projects", x: 21, y: 20 }, 
        {id: 2, iconUrl: TextIcon, text: "About Me", x: 18, y: 81}, 
        {id: 3, iconUrl: ContactsIcon, text: "Contact Me", x: 13, y: 142}, 
    ])
    const [modalPositions, setModalPositions] = useState({
        notes: {x: 100, y: 100}, 
        projects: {x: 200, y: 150}, 
        contacts: {x: 250, y: 250}
    }); 

    const [draggedItem, setDraggedItem] = useState(null); 
    const [draggedModal, setDraggedModal] = useState(null); 
    const [offset, setOffset] = useState({x: 0, y: 0}); 

    const handleMouseDown = (e, item) => {
        e.preventDefault(); 
        const rect = e.currentTarget.getBoundingClientRect(); 
        setOffset({
            x: e.clientX - rect.left, 
            y: e.clientY - rect.top
        }); 
        setDraggedItem(item.id); 
    }

    const handleModalMouseDown = (e, modalType) => {
        e.preventDefault(); 
        const rect = e.currentTarget.getBoundingClientRect(); 
        setOffset({
            x: e.clientX - modalPositions[modalType].x, 
            y: e.clientY - modalPositions[modalType].y
        }); 
        setDraggedModal(modalType); 
    }

    const handleMouseMove = (e) => {
        if (draggedItem !== null) {
            const container = e.currentTarget; 
            const rect = container.getBoundingClientRect(); 
            const x = e.clientX - rect.left - offset.x; 
            const y = e.clientY - rect.top - offset.y;
            setItems(prevItems => 
                prevItems.map(item => 
                    item.id === draggedItem ? {...item, x: Math.max(0, Math.min(x, rect.width)), y: Math.max(0, Math.min(y, rect.height))} : item
                )
            )
        } 

        if (draggedModal !== null) {
            const container = e.currentTarget; 
            const rect = container.getBoundingClientRect(); 
            const x = e.clientX - offset.x; 
            const y = e.clientY - offset.y; 

            setModalPositions(prev => ({
                ...prev, 
                [draggedModal]: {
                    x: Math.max(0, Math.min(x, rect.width - 400)), 
                    y: Math.max(0, Math.min(y, rect.height- 300))
                }
            })); 
        }
    }

    const handleMouseUp = () => {
        setDraggedItem(null); 
        setDraggedModal(null); 
    }

    const handleDoubleClick = (e, item) => {
        e.preventDefault(); 
        switch (item.text) {
            case "Projects": 
                setShowProjectsModal(true); 
                break; 
            case "Contact Me": 
                setShowContactsModal(true); 
                break;
            case "About Me": 
                console.log("About Me clicked!"); 
                setShowNotesModal(true); 
                break; 
            default: 
                return; 
        }
    }

   return (
    <div className="DesktopContainer" id="DesktopContainer" onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp}>
        {items.map((item) => {
            return (
                <div className="DesktopIcon" key={item.id} 
                    onMouseDown={(e) => handleMouseDown(e, item)}
                    onDoubleClick={(e) => handleDoubleClick(e, item)}
                  style={{
                    position: "absolute", 
                    left: `${item.x}px`,
                    top: `${item.y}px`, 
                    cursor: 'pointer', 
                    userSelect: 'none', 
                  }}>
                    <img src={item.iconUrl} alt={item.text}  draggable={false} className="AppIcon" style={{
                        pointerEvents: 'none'
                    }}/>
                    <span className="IconText">{item.text}</span>
                </div>
            )
        })}
        {showNotesModal && <Notes position={modalPositions.notes} onMouseDown={(e) => handleModalMouseDown(e, 'notes')}></Notes>}
        {showProjectsModal && <Project position={modalPositions.projects} onMouseDown={(e) => handleModalMouseDown(e, 'projects')}></Project>}
        {showContactsModal && <Contacts position={modalPositions.contacts} onMouseDown={(e) => handleModalMouseDown(e, 'contacts')}></Contacts>}
    </div>
   ) 
}