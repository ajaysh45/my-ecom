import React from "react";
import styled from "styled-components";
import FilterSection from "./Components/FilterSection";
import Sort from "./Components/Sort";
import ProductList from "./Components/ProductList";


const Products = () => {

  return <Wrapper>
  <h1>ajay sharma</h1>
    <div className="container grid grid-filter-column">
<div>
  <FilterSection/>
  
</div>
 <div>
  <div className="product-view--sort">
    <div className="sort-filter">

    <Sort/>
    </div>
    <div className="main-product">
      <ProductList/>
    </div>
  </div>
</div> 


    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
    padding:18%
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
