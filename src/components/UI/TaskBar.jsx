import React from "react";
import {useState, useEffect} from "react"; 
import "./TaskBar.css"; 
import FinderIcon from '../../assets/icons/Applications/Finder.png'; 
import SafariIcon from '../../assets/icons/Applications/Safari.png'; 
import LaunchpadIcon from '../../assets/icons/Applications/Launchpad.png'; 
import MessagesIcon from '../../assets/icons/Applications/Messages.png'; 
import MailIcon from  '../../assets/icons/Applications/Mail.png'; 
import MapsIcon from  '../../assets/icons/Applications/Maps.png'; 
import PhotosIcon from  '../../assets/icons/Applications/Photos.png'; 
import FacetimeIcon from  '../../assets/icons/Applications/FaceTime.png'; 
import CalendarIcon from  '../../assets/icons/Applications/Calendar.png'; 
import ContactsIcon from  '../../assets/icons/Applications/Address Book.png'; 
import RemindersIcon from  '../../assets/icons/Applications/Reminders.png'; 
import NotesIcon from  '../../assets/icons/Applications/Notes.png'; 
import AppleTvIcon from  '../../assets/icons/Applications/Apple TV.png'; 
import MusicIcon from  '../../assets/icons/Applications/Music.png'; 
import PodcastsIcon from  '../../assets/icons/Applications/Podcasts.png'; 
import NewsIcon from  '../../assets/icons/Applications/News.png'; 
import PagesIcon from  '../../assets/icons/Applications/Preview.png'; 
import ChessIcon from  '../../assets/icons/Applications/Chess.png'; 
import AppStoreIcon from  '../../assets/icons/Applications/App Store.png'; 
import TerminalIcon from '../../assets/icons/Applications/Terminal.png'; 

export function TaskBar() {
    return (
        <div className="TaskBarContainer">
            <img src={FinderIcon} alt="" className="AppIcon"/>
            <img src={LaunchpadIcon} alt="" className="AppIcon"/>
            <img src={SafariIcon} alt="" className="AppIcon"/>
            <img src={MessagesIcon} alt="" className="AppIcon"/>
            <img src={MailIcon} alt="" className="AppIcon"/>
            <img src={MapsIcon} alt="" className="AppIcon"/>
            <img src={PhotosIcon} alt="" className="AppIcon"/>
            <img src={FacetimeIcon} alt="" className="AppIcon"/>
            <img src={CalendarIcon} alt="" className="AppIcon"/>
            <img src={ContactsIcon} alt="" className="AppIcon"/>
            <img src={RemindersIcon} alt="" className="AppIcon"/>
            <img src={NotesIcon} alt="" className="AppIcon"/>
            <img src={AppleTvIcon} alt="" className="AppIcon"/>
            <img src={MusicIcon} alt="" className="AppIcon"/>
            <img src={PodcastsIcon} alt="" className="AppIcon"/>
            <img src={NewsIcon} alt="" className="AppIcon"/>
            <img src={PagesIcon} alt="" className="AppIcon"/>
            <img src={ChessIcon} alt="" className="AppIcon"/>
            <img src={AppStoreIcon} alt="" className="AppIcon"/>
            <img src={TerminalIcon} alt="" className="AppIcon"/>
        </div>
    )
}