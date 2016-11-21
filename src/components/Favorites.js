import React from "react";
import Filter from './Filter';
import data from '../data';

const Favorites = () => {
 return (
   <div>
     <div className="Site-region">
       <h1>Favorites</h1>
     </div>
     <Filter images={data.images} />
   </div>
 )
}

export default Favorites;
