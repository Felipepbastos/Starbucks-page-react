import styled from "styled-components";

export const AboutStyle  = styled.section`
display: flex;
padding: 10vh 5vw 10vh 10vw;
font-family: 'Poppins';

@media(max-width: 760px){



}
.texto{
max-width: 60%;
padding-left: 10vw
}

h3{
   font-family: 'inter';
   font-weight: 700;
   font-size: 24px;
  }

h2{
    font-size: 64px;
    font-weight: 400;
    line-height: 80px;
}

p {
      margin: 1rem 0;
      font-size: 1.5rem;
      line-height: 1.2;
      font-weight:400;
    }

button {
      padding: 0.75rem 1.5rem;
      background-color: #00754a;
      color: #fff;
      border: none;
      border-radius: 20px;
      font-size: 1.5rem;
      cursor: pointer;
      transition: background-color 0.3s;
      font-family: 'inter';
      width: 12rem;
      font-weight: 700;

      &:hover {
        background-color: #005c3a;
      }
}

img{
    height: 50vh;
    width: auto;
}
`