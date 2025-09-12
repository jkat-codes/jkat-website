import './Desktop.css'; 
import {useState, useEffect} from 'react'; 
import DocumentsIcon from '../../assets/icons/Folders Beta 3/Documents.png'
import TextIcon from '../../assets/icons/Misc/Generic Document.png'
import ContactsIcon from '../../assets/icons/Applications/Address Book.png'; 


export function Desktop() {
    const [items, setItems] = useState([
        {id: 1, iconUrl: DocumentsIcon, text: "Projects", x: 21, y: 20}, 
        {id: 2, iconUrl: TextIcon, text: "About Me", x: 21, y: 80}, 
        {id: 3, iconUrl: ContactsIcon, text: "Contact Me", x: 21, y: 140}, 
    ])
    const [draggedItem, setDraggedItem] = useState(null); 
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

    const handleMouseMove = (e) => {
        if (draggedItem === null) return; 

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

    const handleMouseUp = () => {
        setDraggedItem(null); 
    }

   return (
    <div className="DesktopContainer" onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp}>
        {items.map((item) => {
            return (
                <div className="DesktopIcon" key={item.id} 
                    onMouseDown={(e) => handleMouseDown(e, item)}
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
    </div>
   ) 
}