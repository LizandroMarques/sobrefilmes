function Paginacao({ paginaAtual, totalDePaginas, mudarPagina }) {
  function handleClick(num) {
    if (num >= 1 && num <= totalDePaginas) {
      mudarPagina(num);
    }
  }

  const maxBotoes = 10;
  let start = Math.max(1, paginaAtual - 4);
  let end = Math.min(totalDePaginas, start + maxBotoes - 1);

  return (
    <div className="flex flex-wrap justify-center gap-2 my-4">
      {/* Botão anterior */}
      <button
        onClick={() => handleClick(paginaAtual - 1)}
        disabled={paginaAtual === 1}
        className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        Anterior
      </button>
      {/* Números de páginas */}
      {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
        (num) => (
          <button
            key={num}
            onClick={() => handleClick(num)}
            className={`px-3 py-1 rounded cursor-pointer ${
              paginaAtual === num
                ? "bg-yellow-700 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {num}
          </button>
        )
      )}

      {/* Botão próximo */}
      <button
        onClick={() => handleClick(paginaAtual + 1)}
        disabled={paginaAtual === totalDePaginas}
        className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        Próximo
      </button>
    </div>
  );
}

export default Paginacao;
