const ProdutoCard = (props) => {
  return (
    <div className="bg-white rounded-[12px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 transition-all hover:shadow-lg transition-transform hover:scale-[1.02] duration-300 flex flex-col h-full">
      
      {/* Container da Imagem */}
      <div className="w-full aspect-square bg-slate-50">
        <img 
          src={props.imagem} 
          alt={props.nome} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Informações do Produto - Padding de 24px */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-[#1E293B] truncate">{props.nome}</h2>
        
        <p className="text-sm text-[#64748B] mt-2 line-clamp-2 h-10">
          {props.descricao}
        </p>
        
        {/* Preço e Ação */}
        <div className="mt-auto pt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#6366F1]">
            R$ {props.preco}
          </span>
          <button className="bg-[#6366F1]/10 text-[#6366F1] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#6366F1] hover:text-white transition">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdutoCard;
