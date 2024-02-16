

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";

// const arr = ["Black", "Blue", "Yellow"];

// function App() {
//   const [post, setPost] = useState("");
//   const [sectionClass, setSectionClass] = useState("");

//   const btnClick = (postElm) => {
//     setPost(postElm);
//     setSectionClass(postElm === post ? "active" : "noActive");
//   };

//   return (
//     <>
//       <h1 className="Post__title">Background color is:{post}</h1>
//       <section className={`Post__section ${sectionClass}`}  btnClick={setSectionClass}>
//         <h2 className="Post__section-title">React events(change Background)</h2>
//         <p className="Post__item">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
//           obcaecati praesentium minima tempora voluptatem sit voluptas quos ab
//           est ducimus!
//         </p>
//         <div className="Post__btn-section">
//           {arr.map((elm) => {
//             return (
//               <button
//                 className={`${elm === post ? "active" : "noActive"}`}
//                 onClick={() => btnClick(elm)}
//                 key={elm}
//               >
//                 {elm}
//               </button>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// }

// export default App;

////////////////////////////////

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [post, setPost] = useState("Black");

  const btnClick = (postElm) => {
    // console.log(postElm);
    setPost(postElm);
  };

  let showActiveClass = "";
  if (post === "Black") {
    showActiveClass = "showActive";
  } else if (post === "Blue") {
    showActiveClass = "showActiveSecond";
  } else if (post === "Yellow") {
    showActiveClass = "showActiveThird";
  }

  return (
    <>
      <div className="header">
        <h1>Background is <span>{post}</span> </h1>
        <div className={`show ${showActiveClass} `}>
          <h2><span>React</span>  how are You</h2>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.or sit amet consectetur adipisicing eli dolor sit amet consectetur adipisicing elit Amet, voluptatem.</h4>
          <button className="first_btn" onClick={() => btnClick("Black")}>Black</button>
          <button className="second_btn" onClick={() => btnClick("Blue")}>Blue</button>
          <button className="third_btn" onClick={() => btnClick("Yellow")}>Yellow</button>
        </div>
      </div>
    </>
  );
}

export default App;







// 1.GitHub
// 2.Class btn and Parent div