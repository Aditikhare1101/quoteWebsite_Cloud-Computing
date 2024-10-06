import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="SidebarItmes">
            <span className="sidebarTitles">ABOUT ME</span>
            <img src="https://i.pinimg.com/736x/f6/73/79/f67379c00cfce0d5ee8b6095f15bddc2.jpg" alt="image not found."></img>
            <p>
                I’m a writer, a lifelong learner, and—importantly—a failure. Each of these identities shapes who I am and drives my journey in the world of words. Writing is my passion; learning is my path; and failure? Well, it's simply part of the adventure.
            </p>
        </div>

        <div className="SidebarItmes">
            <span className="sidebarTitles">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarItems">Life</li>
                <li className="sidebarItems">Music</li>
                <li className="sidebarItems">Journey</li>
                <li className="sidebarItems">Destination</li>
                <li className="sidebarItems">Death</li>
                <li className="sidebarItems">Moments</li>

            </ul>
        </div>

        <div className="SidebarItmes">
            <span className="sidebarTitles">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebaricon fa-brands fa-instagram"></i>
            <i className="sidebaricon fa-brands fa-tiktok"></i>
            <i className="sidebaricon fa-brands fa-facebook"></i>
            <i className="sidebaricon fa-brands fa-twitter"></i>
            <i className="sidebaricon fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
