import { NewsStyle } from "./style";

export default function News() {
  return (
    <NewsStyle>
      <div className="texto">
        <h3>Preparação</h3>
        <h2>Níveis de torra</h2>
        <p>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas sãos as torras que fazem parte dos níveis de torra
          Starbucks®
        </p>
        <button>Saiba Mais</button>
      </div>
      <div className="image">
        <img
        src="src\assets\Images\GraoCafe.png"
        alt="Grão de cafe com fundo colorido"
      />
      </div>
    </NewsStyle>
  );
}
