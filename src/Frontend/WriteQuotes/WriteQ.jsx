import React, { useState } from "react";
import "./writeQ.css";

export default function WriteQ() {
  // State to store the selected font family
  const [fontFamily, setFontFamily] = useState("");

  // List of font families to choose from
  const fontFamilies = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Comic Sans MS","Pacifico", "Dancing Script", "Caveat", "Bebas Neue","Fredoka", "Gowun Batang","Playwrite Deutschland Grundschrift","Space Grotesk"];

  // Function to handle font family selection
  const handleFontChange = (e) => {
    setFontFamily(e.target.value);
  };

  return (
    <div className="writeQ">
      <img className="writeImg" src="./assests/img1.jpg" alt="image not found!" />
      <form className="writeForm">
      <div className="dropdown">
          <select className="fontSelect" value={fontFamily} onChange={handleFontChange}>
            <option value="" disabled>Choose Your Vibe, Then Let It Flow!</option>
            {fontFamilies.map((font, index) => (
              <option key={index} value={font} style={{ fontFamily: font }}>
                {font}
              </option>
            ))}
          </select>
          </div>
        <div className="writeFromGroup">
          {/* Dropdown for font family selection with a placeholder option */}
          
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          
          {/* Applying the selected font family to the input */}
          <input
            type="text"
            placeholder="Quote"
            className="writeInput"
            autoFocus={true}
            style={{ fontFamily: fontFamily }}
          />
        </div>

        <div className="writeFromGroup">
          {/* Applying the selected font family to the textarea */}
          <textarea
            placeholder="Write what you feel at this very moment..."
            type="text"
            className="writeInput writeText"
            style={{ fontFamily: fontFamily }}
          ></textarea>
          <button className="writeButtonB">Cherish</button>
        </div>

        <button className="writeButton">Cherish</button>
      </form>
    </div>
  );
}



// import "./writeQ.css"

// export default function WriteQ() {
//   return (
//     <div className="writeQ">
//         <img className="writeImg" src="./assests/img1.jpg" alt="image not found!" />
//         <form className="writeForm">
//             <div className="writeFromGroup">
                
//                 <label htmlFor="fileInput">
//                 <i className="writeIcon fa-solid fa-plus"></i>
//                 </label>
//                 <input type="file" id="fileInput" style={{display:"none"}}/>
//                 <input type="text" placeholder="Quote" className="writeInput" autoFocus={true}/>
//             </div>

//             <div className="writeFromGroup">
//                 <textarea placeholder="Write you feel at this very moment..." type="text" className="writeInput writeText"></textarea>
//             <button className="writeButtonB">Cherish</button>

//             </div>

//             <button className="writeButton">Cherish</button>
//         </form>
//     </div>
//   )
// }
