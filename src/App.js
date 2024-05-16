// ================search filter page===========================================
// ==============================================================================

// ========================way one=====================================

// import './App.css';
// import {Users} from "./users";
// import {useState} from "react";
//
//
// function App() {
//     const [query, setQuery] = useState("");
//   return (
//     <div className="App">
//         <input
//             type="text"
//             placeholder="Search..."
//             className="search"
//             onChange={(e) => setQuery(e.target.value)}
//         />
//         <ul className="list">
//             {Users.filter((user) =>
//                 user.first_name.toLocaleLowerCase().includes(query)
//             ).map((user) => (
//                 <li key={user.id} className="listItem">{user.first_name}</li>
//             ))}
//         </ul>
//     </div>
//   );
// }
//
// export default App;

// ========================way two=====================================

// import './App.css'
// import {useState} from "react";
// import {Users} from "./users";
// import Table from "./Table";
//
// function App() {
//     const [query, setQuery] = useState("");
//
//     const  keys = ["first_name", "last_name", "email"]
//
//     // console.log(Users[0]["first_name"])
//
//     const search = (data) => {
//         return data.filter((item) =>
//             // item.first_name.toLowerCase().includes(query) ||
//             // item.last_name.toLowerCase().includes(query) ||
//             // item.email.toLowerCase().includes(query)
//
//             keys.some((key) => item[key].toLowerCase().includes(query))
//         );
//     };
//
//   return (
//     <div className="App">
//         <input
//             type="text"
//             placeholder="Search..."
//             className="search"
//             onChange={(e) => setQuery(e.target.value)}
//         />
//         <Table data={search(Users)}/>
//     </div>
//   );
// }
//
// export default App;


// ================filter product page===========================================
// ==============================================================================

import React from "react";
import './App.css'
// import Filtermenu from './FilterData/Filtermenu'
import Productfilter from "./FilterData/Productfilter";

export default function App() {
    return(
        <>
            <Productfilter/>
        </>
    )
}
