function Home() {
  var arroz = 12

  if (arroz > 12) {
    console.log("Vc foi banido")
  }

  return (
    
    <div style={{ padding: "20px" }}>
      <h1>🏠 Bem-vindo ao Cardápio Digital</h1>
      <p>Explore nosso menu e descubra deliciosos pratos!</p>
    </div>
  );
}

export default Home;
