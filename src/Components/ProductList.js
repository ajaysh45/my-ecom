import React from 'react'
import GridView from '../Components/GridView'
import { useFilterContext } from '../Context/filter_context'
const ProductList = () => {
  const {filter_products,setGridView} =useFilterContext();
      if(setGridView)
      {
         return<GridView products={filter_products}/>;
      }
  
  
}

export default ProductList


