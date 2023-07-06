import { useState } from "react";

export default function Searchbar({ handleSearchChange }) {

     const handleSearchTextChange = async (e) => {
          handleSearchChange(e.target.value)
     }

     return (
          <div>Search bar
               <input type="text" onChange={handleSearchTextChange} />
          </div>
     );
}