import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const styleInput = "px-4 py-3 border border-slate-200 rounded-[12px]";

  const adicionarProduto = (e) => {
    e.preventDefault(); 
    const novoProduto = {
      id: Date.now(),
      nome,
      preco,
      descricao,
      imagem: imagem || "https://placehold.co/150", // Usa a digitada ou um placeholder se vazio
    };
    setProdutos([...produtos, novoProduto]); 
    setNome("");
    setPreco("");
    setDescricao(""); 
    setImagem("");
  };

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Teclado",
          preco: 150,
          descricao: "Mecânico RGB",
          imagem: "https://placehold.co/100x100",
        },
        {
          id: 2,
          nome: "Mouse",
          preco: 80,
          descricao: "Gamer 3200 DPI",
          imagem: "https://placehold.co/100x100",
        },
      ]);
      setCarregando(false);
    }, 2000);
  }, []);

  if (carregando) return <h1 className="text-center mt-10 text-2xl font-bold">Carregando produtos...</h1>;

  return (
    <div className="w-full py-24 px-10">
      <div className="w-full max-w-2xl mx-auto space-y-24">
        <h1 className="text-2xl font-bold text-center text-slate-800 tracking-tight mb-14">Meu Catálogo de Produtos</h1>
        
        {/* Formulário de Cadastro */}
        <section className="bg-white p-12 rounded-[12px] shadow-sm border border-slate-100">
          <h2 className="text-base font-semibold mb-10 text-slate-800 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Cadastrar Novo Produto
          </h2>
          <form onSubmit={adicionarProduto} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className={`${styleInput} focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition outline-none text-sm`}
              placeholder="Nome do Produto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              className={`${styleInput} focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition outline-none text-sm`}
              placeholder="Preço (R$)"
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />
            <input
              className={`${styleInput} focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition outline-none md:col-span-2 text-sm`}
              placeholder="URL da Imagem (opcional)"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
            <textarea
              className={`${styleInput} focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition md:col-span-2 min-h-[70px] outline-none text-sm`}
              placeholder="Descrição curta do produto"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="md:col-span-2 bg-indigo-600 text-white font-semibold py-2.5 px-6 rounded-[12px] hover:bg-indigo-700 transition shadow-sm active:scale-[0.98]"
            >
              Adicionar ao Catálogo
            </button>
          </form>
        </section>

        {/* Listagem Dinâmica - Grade Resiliente */}
        <section>
          <h2 className="text-lg font-semibold mb-8 text-slate-800 border-l-4 border-indigo-500 pl-3">
            Produtos Disponíveis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {produtos.map((p) => (
              <ProdutoCard
                key={p.id}
                nome={p.nome}
                preco={p.preco}
                descricao={p.descricao}
                imagem={p.imagem}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Catalogo;
