import { AboutStyle } from "./style";

export default function About() {
  return (
    <AboutStyle>
        <div>
            <img
        src="\Images\LojaStarbucks.png"
        alt="Frente de loja starbucks em preto e branco"
      />
      </div>
      <div className="texto">
        <h3>A História da</h3>
        <h2>Starbucks</h2>
        <p>
        A Starbucks nasceu em 1971, em Seattle, Washington. Três amigos – Jerry Baldwin, Zev Siegl e Gordon Bowker – apaixonados por café de qualidade, se uniram para abrir uma pequena loja no Pike Place Market. Inicialmente, eles vendiam grãos de café inteiros e equipamentos para preparo em casa, inspirados pelo amor e respeito ao café.
        </p>
        <button>Saiba Mais</button>
      </div>
    </AboutStyle>
  );
}
