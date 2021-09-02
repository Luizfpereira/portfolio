//import {Link} from 'react-router-dom';
import navbar from './navbar.module.css'
import styled from 'styled-components'

const UL = styled.ul`
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    z-index:1;
    position: absolute;
    margin-left: 12%;
    top: 20px;
`

const Item = styled.li`
    float: left;
    display: block;
    text-align: center;
    text-decoration: none;
`

const Button = styled.a`
    display: block;
    color: rgb(128,128,128);
    text-align: center;
    padding: 1px 25px;
    text-decoration: none;
    font-family: monospace, "Lucida Console", "Courier New";
    font-size: 18px;
    &:hover{
        color: white;
    }
`

const Btn_right = styled(Button)`
    border-right: 1px solid rgb(128,128,128);
`

export default function Navbar(){
    return (

            <UL>
                <Item><Btn_right href="/atena">01 &nbsp;:&nbsp;Home</Btn_right></Item>
                <Item><Btn_right href="/atena">02 &nbsp;:&nbsp;Works</Btn_right></Item>
                <Item><Btn_right href="/atena">03 &nbsp;:&nbsp;About Me</Btn_right></Item>
                <Item><Button href="/atena">04 &nbsp;:&nbsp;Contact</Button></Item>
            </UL>

    )
}