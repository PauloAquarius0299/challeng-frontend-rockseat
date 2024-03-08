"use client"
import { useProducts } from "@/hooks/useProducts"
import ProductsCard from "./product-card";
import styled from "styled-components";

const ListContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 256px);
grid-gap: 32px;
max-width: 100%;
margin-top: 32px;
`

export default function ProductsList(){
    const {data} = useProducts();
    
    console.log(data);
    return(
        <div>
        {data?.map(product => 
        <ProductsCard
        key={product.id}
        title={product.name}
        price={product.price_in_cents}
        image={product.image_url}
        />)}
        
        </div>
    )
} 