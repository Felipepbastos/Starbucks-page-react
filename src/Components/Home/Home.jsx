import { MainStyle } from "./style";
import { useState } from "react";


export default function Home() {
  //Aqui é o estado das imagens do copo e do fundo
  const [imagemCopo, setImagemCopo] = useState(
    "Images/laranja 2x 1.png"
  );
  const [imagemFundo, setImagemFundo] = useState(
    "Images/Ellipse 1.png"
  );


  //Função para alterar as imagens
  const cliqueNaImagem = (novaImagemCopo, novaImagemFundo) => {
    setImagemCopo(novaImagemCopo);
    setImagemFundo(novaImagemFundo);
  };



  return (
    <MainStyle>
      <section>
        <div className="texto">
          <h1>Mais que Café </h1>
          <h2>
            {" "}
            Isso é <span>Starbucks</span>
          </h2>

          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
          <button>Saiba Mais</button>
        </div>
        <div className="image">
          <img class="copo" src={imagemCopo} alt="Bebida Starbucks" />
          <img class="fundo" src={imagemFundo} alt="elipse" />
          <div className="social">
            
            <a href="#facebook"><img src="\Images\icons\facebook.png" alt="Facebook logo" /></a>
            <a href="#X"><img src="\Images\icons\twitter.png" alt="X logo" /></a>
            <a href="#instagram"><img src="\Images\icons\instagram.png" alt="Instagram logo" /></a>
          </div>
        </div>
        <div className="sabores">
          <img
            src="\Images\laranja 3.png"
            alt="Café com calda laranja"
            onClick={() =>
              cliqueNaImagem(
                "Images/laranja 2x 1.png",
                "Images/Ellipse 1.png"
              )
            }
          />

          <img
            src="\Images\amarelo 1.png"
            alt="Café com calda amarela"
            onClick={() =>
              cliqueNaImagem(
                "Images/amarelo 2x 1.png",
                "Images/Ellipse amarela.png"
              )
            }
          />

          <img
            src="\Images\vermelho 1.png"
            alt="Café com calda vermelha"
            onClick={() =>
              cliqueNaImagem(
                "Images/vermelho2x 1.png",
                "Images/Ellipse vermelha.png"
              )
            }
          />
        </div>
      </section>
    </MainStyle>
  );
}
