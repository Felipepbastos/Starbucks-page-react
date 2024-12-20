import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  font-family: 'Poppins';
  ;

  @media (max-width: 760px){
    flex-direction: column;
    

    .texto {
      max-width: 90%; 
      padding: 9vh 3vw 1vh 5vw;
      
      h1, h2 {
        font-size: 32px;
        line-height: 40px;
      }

      h2 span {
        font-size: 48px; 
      }

      p {
        font-size: 1rem;
      }

      button {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        width: 60%; 
      }
    }

    .image {
      position: static; 
      display: flex;
      align-items: center;
      margin-top: 2rem;
      height: 35vh;

      img {
        width: 60%;
        height: auto; 
      }

      .copo{
        top: 55vh;
      }

      .fundo{
        top: 55vh;
        height: 33vh
      }

      .social {
        gap: 0.5rem;
        
        

        a img {
          max-height: 3vh; /* Reduz ícones */
        }
      }
    }

    .sabores {
      position: static; 
      display: flex;
      justify-content: center;
      background-color: #00754a;

      img:hover {
        transform: none; 
      }
    }
  }

  }

  .texto {
    max-width: 60%;
    top: -50vh ;
    padding: 10vh 0 0 5vw;
        
    h1 {
      font-size: 64px;
      line-height: 69px;
      color: #333;
      font-family: 'inter';
      font-weight: 400;
    }
    
    h2{
    font-size: 64px;
    line-height: 69px;
    color: #333;
    font-weight: 400;
    }
    
    h2 span {
      color: #00754a; 
      font-size: 90px;
      font-weight: 700;
    }

    .textoPreto{
      color: #000000;
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
  }

  .image {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 80vh;
    

    img {
    width: 25vw;
    }
    
    .copo{
    position: absolute;
    z-index: 2;
    right: 0;
    height: 60vh;
    width: auto;
    top: 15vh;
    right: 5vw;
    }

    .fundo{
    position: absolute;
    z-index: 1;
    height: 30vw;
    width: auto;
    bottom: 0;
    right: 0;
    }

    .social {
      position: absolute;
      right: 2vw;
      bottom: 25vh;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      z-index: 3;

      

      a {
        display: inline-block;
        font-size: 1.5rem;
        color: #00754a;
        transition: color 0.3s;
        
        img{
        max-height: 5vh;
        width: auto;  
        }

        &:hover {
          color: #005c3a;
        }
      }
    }
  }

  .sabores{
  position: fixed;
  z-index: 10;
  bottom:0;
  align-items: center;
  justify-content: center;
  left: 40%;

    img:hover{
    cursor: pointer;
    transform: rotate(10deg)
      }
  }
`;
