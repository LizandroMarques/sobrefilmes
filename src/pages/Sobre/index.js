import { BotaoVoltar } from "../../Components/BotaoVoltar";

function Sobre() {
  return (
    <div className="flex justify-center py-5 bg-white/x55">
      <div className="flex flex-col justify-center items-center w-120 md:w-3xl p-5 font-sans bg-white/30 rounded-2xl">
        <div className="bg-white/40 p-2 rounded-2xl hover:bg-white/60">
          <h1>
            <strong>Sobre o Projeto</strong>
          </h1>
          <p>
            Este projeto foi desenvolvido por Lizandro Marques com o objetivo de
            aprendizagem, evolução profissional e composição de portfólio. A
            aplicação tem como foco a exibição de filmes, permitindo ao usuário
            explorar informações atualizadas de maneira prática e intuitiva.
          </p>
        </div>
        <br />
        <div className="flex flex-col sm:flex-row bg-white/40 p-2 gap-5 rounded-2xl hover:bg-white/60">
          <div className="flex flex-col w-full h-full p-2 rounded-2xl">
            <h2>
              <strong>Tecnologias Utilizadas</strong>
            </h2>
            <p>
              Para a construção deste projeto foram empregadas diversas
              tecnologias modernas do ecossistema JavaScript, incluindo:
            </p>
            <ul className="list-disc ml-5">
              <li className="hover:text-white hover:font-bold">
                <strong>
                  <a href="https://react.dev/">React</a>
                </strong>
              </li>
              <li className="hover:text-white hover:font-bold">
                <strong>
                  <a href="https://www.javascript.com/">JavaScript</a>
                </strong>
              </li>
              <li className="hover:text-white hover:font-bold">
                <strong>
                  <a href="https://tailwindcss.com/">TailwindCSS</a>
                </strong>
              </li>
              <li className="hover:text-white hover:font-bold">
                <strong>
                  <a href="https://axios-http.com/ptbr/docs/intro">Axios</a>
                </strong>
              </li>
              <li className="hover:text-white hover:font-bold">
                <strong>
                  <a href="https://www.npmjs.com/package/react-router-dom">
                    React Router DOM
                  </a>
                </strong>
              </li>
              <li className="hover:text-white hover:font-bold">
                <strong>
                  <a href="https://www.npmjs.com/package/react-toastify">
                    React Toastify
                  </a>
                </strong>
              </li>
            </ul>
            <br />
          </div>
          <div className="flex flex-col w-full h-full p-2 rounded-2xl">
            <h2>
              <strong>API e Créditos</strong>
            </h2>
            <ul className="list-disc ml-5">
              <li>
                <strong>
                  <a
                    href="https://www.themoviedb.org/"
                    className="hover:text-white hover:font-bold mr-1"
                  >
                    TMDB:
                  </a>
                </strong>
                Os dados dos filmes exibidos na aplicação são fornecidos pela
                API do TMDB (The Movie Database). Agradeço aos desenvolvedores
                da plataforma por disponibilizarem uma API tão completa e
                acessível, fundamental para o funcionamento deste projeto.
              </li>
              <li>
                <strong className="hover:text-white hover:font-bold mr-1">
                  <a href="https://chatgpt.com/">ChatGPT:</a>
                </strong>
                Este projeto utiliza recursos visuais criados com o apoio do
                ChatGPT.
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="bg-white/40 p-2 rounded-2xl hover:bg-white/60">
          <h2>
            <strong>Contato</strong>
          </h2>
          <p>
            Caso deseje saber mais sobre mim ou sobre o projeto, você pode
            entrar em contato ou acompanhar meu trabalho através dos links
            abaixo:
            <br />
            Nome:
            <strong className="hover:text-white hover:font-bold">
              Lizandro Marques
            </strong>
            <br />
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/lizandro-marques"
              className="hover:text-white hover:font-bold"
            >
              <strong>https://www.linkedin.com/in/lizandro-marques</strong>
            </a>
            <br />
            GitHub:
            <a
              href="https://github.com/LizandroMarques/"
              className="hover:text-white hover:font-bold"
            >
              <strong>https://github.com/LizandroMarques/</strong>
            </a>
            <br />
            WhatsApp:
            <strong className="hover:text-white hover:font-bold">
              (53)9.9966.3344
            </strong>
            <br />
            E-mail:
            <strong className="hover:text-white hover:font-bold">
              lizandromarques@gmail.com
            </strong>
          </p>
        </div>
        <BotaoVoltar>VOLTAR</BotaoVoltar>
      </div>
    </div>
  );
}

export default Sobre;
