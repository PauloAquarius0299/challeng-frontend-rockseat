import styled from "styled-components"
import { formatPrice } from "@/utils/format-price";

interface ProductsCardProps {
    image: string,
    title: string,
    price: number,

}

const Card = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: rgba(255,255,255,0.4);
backdrop-filter: blur(10px);
border-radius: 0px 0px 4px 4px;
width: 256px;

image{
    width: 256px;
    height: 300px;
}
h3{
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-black);
}
p{
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
}
div{
    display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
padding: 8px 0;
    >div{
    width: 22px;
    height: 1px;
    margin: 8px 0;
    margin: 0px;
    background: #dce2e6;
}
}

`
export default function ProductsCard(props : ProductsCardProps){
    const price = formatPrice(props.price)
    return(
        <Card>
        <img src={props.image} />
        <div>
            <h3>{props.title}</h3>
            <div></div>
            <p>{price}</p>
        </div>
        </Card>
    )
}