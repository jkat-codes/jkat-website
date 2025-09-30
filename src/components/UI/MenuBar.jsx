import './MenuBar.css'; 
import AppleIcon from '../../assets/icons/apple-logo.png'; 

function MenuOptionClicked(e) {
    const AlreadyClicked = document.querySelectorAll(".active"); 
    AlreadyClicked.forEach(element => {
        element.classList.remove("active"); 
    })

    e.target.classList.add("active"); 
}

export function MenuBar() {
    return (
        <div className="MenuBarContainer">
            <img src={AppleIcon} alt="" className="AppleIcon" />
            <span className="MenuHeader" onClick={MenuOptionClicked}>File</span>
            <span className="MenuHeader" onClick={MenuOptionClicked}>Edit</span>
            <span className="MenuHeader" onClick={MenuOptionClicked}>View</span>
            <span className="MenuHeader" onClick={MenuOptionClicked}>History</span>
            <span className="MenuHeader" onClick={MenuOptionClicked}>Bookmarks</span>
            <span className="MenuHeader" onClick={MenuOptionClicked}>Window</span>
            <span className="MenuHeader" onClick={MenuOptionClicked}>Help</span>
        </div>
    )
}
