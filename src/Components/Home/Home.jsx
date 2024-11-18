import { MainStyle } from "./style";
import { useState } from "react";


export default function Home() {
  //Aqui é o estado das imagens do copo e do fundo
  const [imagemCopo, setImagemCopo] = useState(
    "src/assets/Images/laranja 2x 1.png"
  );
  const [imagemFundo, setImagemFundo] = useState(
    "src/assets/Images/Ellipse 1.png"
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
            
            <a href="#facebook"><img src="src\assets\Images\icons\facebook.png" alt="Facebook logo" /></a>
            <a href="#X"><img src="src\assets\Images\icons\twitter.png" alt="X logo" /></a>
            <a href="#instagram"><img src="src\assets\Images\icons\instagram.png" alt="Instagram logo" /></a>
          </div>
        </div>
        <div className="sabores">
          <img
            src="src\assets\Images\laranja 3.png"
            alt="Café com calda laranja"
            onClick={() =>
              cliqueNaImagem(
                "src/assets/Images/laranja 2x 1.png",
                "src/assets/Images/Ellipse 1.png"
              )
            }
          />

          <img
            src="src\assets\Images\amarelo 1.png"
            alt="Café com calda amarela"
            onClick={() =>
              cliqueNaImagem(
                "src/assets/Images/amarelo 2x 1.png",
                "src/assets/Images/Ellipse amarela.png"
              )
            }
          />

          <img
            src="src\assets\Images\vermelho 1.png"
            alt="Café com calda vermelha"
            onClick={() =>
              cliqueNaImagem(
                "src/assets/Images/vermelho2x 1.png",
                "src/assets/Images/Ellipse vermelha.png"
              )
            }
          />
        </div>
      </section>
    </MainStyle>
  );
}
