import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (currElm) => {
    const{id,name,image,price,category} =currElm;
  return(
    <>
  <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </NavLink>
    
</>

  )
}
export default Product;
  
