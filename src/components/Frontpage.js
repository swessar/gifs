import React from "react";
import Filter from './Filter';
import data from '../data';

const Frontpage = () => {
 return (
   <Filter images={data.images} />
 )
}

export default Frontpage;
