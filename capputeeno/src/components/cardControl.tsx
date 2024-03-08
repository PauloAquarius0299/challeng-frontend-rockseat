import { useLocalStorage } from '@/hooks/useLocalStorage'
import {CardIcon} from './card-icon'
import styled from 'styled-components'

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;
    background-color: #de3838;
    color: white;
    margin-left: -10px;
`

const Container = styled.div`
    position: relative;
`

export function CardControl(){
    const {value} = useLocalStorage('card-items', [])

return (
    <Container>
        <CardIcon />
        {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
)
}