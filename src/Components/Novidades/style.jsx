import styled from "styled-components";

export const NewsStyle  = styled.section`
display: flex;
background-color: #1E3932;
color: #fff;
padding: 20vh 5vw 68vh 5vw;
font-family: 'Poppins';
height: 100vh;

  @media (max-width: 760px){
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding: 0;
  height: 100vh;

    .texto {
      width: 100%;
      text-align: center; 
      padding: 5vh 0 0 0 ; 
      h2{
      color: #fff
      }
    }

    .image {
      top:  70vh;
      height: 30%;
           
        img {
        
        width: 100%;
        height: auto;
        }
      


.texto{
max-width: 60%;
padding-right: 10vw
}

h3{
   font-family: 'inter';
   font-weight: 700;
   font-size: 24px;
  }

h2{
    font-size: 64px;
    font-weight: 400;
    line-height: 96px;
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

.image{
    img{
    width: 30vw;
    height: auto;
    }
}
`