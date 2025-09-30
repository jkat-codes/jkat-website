import {createContext, useContext, useState, useEffect} from 'react'; 

const AppContext = createContext(); 

export function AppProvider({children}) {
    const [activeSection, setActiveSection] = useState(0); 
    const [showNotesModal, setShowNotesModal] = useState(false); 
    const [showContactsModal, setShowContactsModal] = useState(false); 
    const [showProjectsModal, setShowProjectsModal] = useState(false); 
    const totalSections = 4; 

    const scrollToSection = (index) => {
        const container = document.querySelector(".MainContainer"); 
        const sectionWidth = window.innerWidth; 
        container.scrollTo({
            left: sectionWidth * index, 
            behavior: 'smooth'
        }); 
        setActiveSection(index); 
    }

    return (
        <AppContext.Provider value={{
            activeSection, 
            setActiveSection, 
            scrollToSection, 
            totalSections, 
            showNotesModal, 
            setShowNotesModal, 
            showContactsModal, 
            setShowContactsModal, 
            showProjectsModal, 
            setShowProjectsModal
        }}> 
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext); 
    if (!context) {
        throw new Error("useApp must be within AppProvider"); 
    }
    return context; 
}