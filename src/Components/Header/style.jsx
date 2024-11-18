import styled from "styled-components";

export const HeaderStyle  = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 5vw 0 5vw;


img{
    height: 12vh;
    width: auto;
    padding-top: 1vh;
}

nav{ 
    ul {
        display: flex;
        list-style: none; 
        gap: 1em;
        justify-content: space-between;
        width: 20vw;
        margin-right: 2em; 
        
        li {
            a {
            text-decoration: none;
            color: #000; 

            &:hover {
                color: #00754a; 
                font-weight: bold; 
    }
}
`

