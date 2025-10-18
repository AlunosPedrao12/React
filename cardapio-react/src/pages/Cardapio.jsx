import CardapioItem from "../components/CardapioItem";

function Cardapio() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🍽 Nosso Cardápio</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <CardapioItem nome="Hambúrguer Clássico" descricao="Pão, carne e queijo." preco="25,00" imagem="link_da_imagem" />
        <CardapioItem nome="Pizza de Calabresa" descricao="Mussarela e calabresa." preco="40,00" imagem="link_da_imagem" />
        <CardapioItem nome="Suco Natural" descricao="Vários sabores!" preco="10,00" imagem="link_da_imagem" />
      </div>
    </div>
  );
}

export default Cardapio;
