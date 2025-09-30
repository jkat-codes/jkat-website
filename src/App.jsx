import './App.css';
import { useState, useEffect} from 'react';
import { AppProvider, useApp} from './components/context/AppContext';
import { TaskBar } from './components/UI/TaskBar';
import { MenuBar } from './components/UI/MenuBar'; 
import { Desktop } from './components/UI/Desktop'; 

export function AppContent() {
  const {setActiveSection} = useApp(); 

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".MainContainer"); 
      const scrollPosition = container.scrollLeft; 
      const sectionWidth = window.innerWidth; 
      const currentSection = Math.round(scrollPosition / sectionWidth); 
      setActiveSection(currentSection); 
    }
  })

  return (
    <div className="MainContainer" id="MainContainer">
      <div className="top-center-wrapper">
        <MenuBar></MenuBar>
      </div>
      <div className="center-wrapper">
        <Desktop></Desktop>
      </div>
      <div className="bottom-center-wrapper">
        <TaskBar></TaskBar>
      </div>
    </div>
  )

}; 

function App() {

  return (
    <AppProvider>
      <AppContent></AppContent>
    </AppProvider>
  );
}

export default App;
