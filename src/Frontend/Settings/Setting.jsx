import Sidebar from "../HomePage/Sidebar"
import "./setting.css"

export default function Setting() {
  return (
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">
                    Update your Account
                </span>

                <span className="settingDeleteTitle">
                    Delete Account
                </span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="SettingProfilePic">
                    <img className="SettingProfilePicImg" src="./assests/topimg.jpg" alt="image not found!"/>
                    <label htmlFor="fileInput">
                    <i className="profileIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Aditi Khare"/>
                <label>Phone Number</label>
                <input type="number" placeholder="1234567890"/>                
                <label>Email ID</label>
                <input type="email" placeholder="aditikhare@gmail.com"/>
                <label>Password</label>
                <input type="password" placeholder="@ditiK11"/>

                <button className="settingBtn">Update</button>

                
            </form>
        </div>
            <Sidebar/>
    </div>
  )
}
