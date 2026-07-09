/* ================================================================
   ARENA GARRAFA — ÁREA VIP (cardápio mobile)
   Lógica (JavaScript puro — sem bibliotecas, hospedável no GitHub)

   Os dados vêm de menu.js (variável global `menu`).
   Funcionamento:
     - Tela inicial: um botão para cada categoria.
     - Toque no botão -> mostra a categoria (itens e preços).
     - "Voltar" (botão da página OU o voltar do celular) -> tela inicial.
   A navegação usa o hash da URL (#c1, #c2, ...), então cada categoria
   também pode ser compartilhada por link direto.
   ================================================================ */


/* ----------------------------------------------------------------
   REFERÊNCIAS DO DOM
   ---------------------------------------------------------------- */
const dom = {
  telaInicio:      document.getElementById("tela-inicio"),
  telaCategoria:   document.getElementById("tela-categoria"),
  listaCategorias: document.getElementById("lista-categorias"),
  botaoVoltar:     document.getElementById("botao-voltar"),
  tituloCategoria: document.getElementById("titulo-categoria"),
  listaItens:      document.getElementById("lista-itens"),
  logo:            document.getElementById("logo"),
  logoFallback:    document.getElementById("logo-fallback")
};


/* ----------------------------------------------------------------
   LOGO — usa assets/logo-arena.png; se o arquivo faltar, mostra
   o nome em texto no lugar (nada quebra).
   ---------------------------------------------------------------- */
function configurarLogo() {
  const usarFallback = () => {
    dom.logo.hidden = true;
    dom.logoFallback.hidden = false;
  };
  dom.logo.addEventListener("error", usarFallback);
  if (dom.logo.complete && dom.logo.naturalWidth === 0) {
    usarFallback();
  }
}


/* ----------------------------------------------------------------
   TELA INICIAL — um botão por categoria (gerados do menu.js)
   ---------------------------------------------------------------- */
function renderizarBotoes() {
  dom.listaCategorias.innerHTML = "";

  menu.forEach((categoria, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "categoria-botao";
    botao.innerHTML = `
      <span class="categoria-botao__icone">${categoria.icone}</span>
      <span class="categoria-botao__nome">${categoria.categoria}</span>
      <span class="categoria-botao__seta">›</span>
    `;

    /* Foto real da categoria (opcional): se o arquivo definido em
       "imagem" existir, substitui o emoji por uma miniatura redonda.
       Se não existir (ou falhar), o emoji permanece — nada quebra. */
    if (categoria.imagem) {
      const foto = new Image();
      foto.className = "categoria-botao__foto";
      foto.alt = "";
      foto.addEventListener("load", () => {
        botao.querySelector(".categoria-botao__icone").replaceWith(foto);
      });
      foto.src = categoria.imagem;
    }

    botao.addEventListener("click", () => {
      location.hash = `c${indice + 1}`;   // dispara a navegação
    });
    dom.listaCategorias.appendChild(botao);
  });
}


/* ----------------------------------------------------------------
   TELA DE CATEGORIA — itens e preços
   ---------------------------------------------------------------- */
function renderizarCategoria(indice) {
  const categoria = menu[indice];
  dom.tituloCategoria.textContent = categoria.categoria;
  dom.listaItens.innerHTML = "";

  categoria.itens.forEach((item) => {
    const linha = document.createElement("div");
    linha.className = "item";
    linha.innerHTML = `
      <span class="item__nome">${item.nome}</span>
      <span class="item__lider"></span>
      <span class="item__preco">${item.preco}</span>
    `;
    dom.listaItens.appendChild(linha);
  });
}


/* ----------------------------------------------------------------
   NAVEGAÇÃO POR HASH
   ""      -> tela inicial
   "#c3"   -> terceira categoria do menu.js
   Usar o hash faz o botão VOLTAR do celular funcionar sozinho.
   ---------------------------------------------------------------- */
function indiceDoHash() {
  const m = location.hash.match(/^#c(\d+)$/);
  if (!m) return null;
  const indice = parseInt(m[1], 10) - 1;
  return (indice >= 0 && indice < menu.length) ? indice : null;
}

function aplicarRota() {
  const indice = indiceDoHash();

  if (indice === null) {
    mostrarTela(dom.telaInicio, dom.telaCategoria);
  } else {
    renderizarCategoria(indice);
    mostrarTela(dom.telaCategoria, dom.telaInicio);
  }

  window.scrollTo(0, 0);   // sempre começa a tela pelo topo
}

function mostrarTela(mostrar, esconder) {
  esconder.hidden = true;
  mostrar.hidden = false;

  /* Reinicia a animação de entrada. */
  mostrar.classList.remove("entrando");
  void mostrar.offsetWidth;
  mostrar.classList.add("entrando");
}


/* ----------------------------------------------------------------
   INICIALIZAÇÃO
   ---------------------------------------------------------------- */
function iniciar() {
  configurarLogo();
  renderizarBotoes();

  /* O botão "Voltar" da página usa o histórico quando possível
     (comportamento natural); senão, limpa o hash. */
  dom.botaoVoltar.addEventListener("click", () => {
    if (history.length > 1) {
      history.back();
    } else {
      location.hash = "";
    }
  });

  window.addEventListener("hashchange", aplicarRota);
  aplicarRota();   // aplica a rota atual (suporta link direto #c2 etc.)
}

document.addEventListener("DOMContentLoaded", iniciar);
