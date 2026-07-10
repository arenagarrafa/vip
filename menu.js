/* ============================================================
   ARENA GARRAFA — ÁREA VIP (cardápio mobile)
   FONTE DE DADOS — edite APENAS este arquivo no dia a dia
   ============================================================
   Aqui você:
     - troca preços e nomes
     - adiciona / remove itens
     - adiciona / remove categorias (cada categoria = um botão
       na tela inicial)

   Estrutura de cada categoria:
     {
       categoria: "Nome exibido no botão e no título",
       icone: "emoji exibido no botão (reserva, caso falte a foto)",
       imagem: "assets/categorias/arquivo.jpg",   <- FOTO do botão
       itens: [
         { nome: "Produto", preco: "R$ 00,00" },
         ...
       ]
     }

   FOTOS DAS CATEGORIAS: coloque as imagens na pasta
   assets/categorias/ usando exatamente os nomes já definidos
   abaixo (baldes.jpg, torres.jpg, canecas.jpg, sem-alcool.jpg,
   doses.jpg, drinks.jpg, tira-gosto.jpg). Enquanto a foto não
   existir, o botão mostra o emoji — nada quebra.

   Não é preciso mexer em index.html, style.css ou script.js.
   ============================================================ */

const menu = [

  {
    categoria: "Cervejas no Balde — Long Neck (5 un)",
    icone: "🧊",
    imagem: "assets/categorias/baldes.jpg",
    itens: [
      { nome: "Stella Artois Long Neck — Balde (5 un)", preco: "R$ 55,00" },
      { nome: "Stella Artois Gold Long Neck — Balde (5 un)", preco: "R$ 60,00" },
      { nome: "Budweiser Long Neck — Balde (5 un)", preco: "R$ 50,00" },
      { nome: "Império Long Neck — Balde (5 un)", preco: "R$ 48,00" },
      { nome: "Heineken Long Neck — Balde (5 un)", preco: "R$ 60,00" },
      { nome: "Corona Long Neck — Balde (5 un)", preco: "R$ 60,00" }
    ]
  },

  {
    categoria: "Cervejas Torre",
    icone: "🍻",
    imagem: "assets/categorias/torres.jpg",
    itens: [
      { nome: "Stella Artois Torre 1,5 L", preco: "R$ 65,00" },
      { nome: "Stella Artois Torre 2,5 L", preco: "R$ 75,00" },
      { nome: "Budweiser Torre 1,5 L", preco: "R$ 55,00" },
      { nome: "Budweiser Torre 2,5 L", preco: "R$ 65,00" },
      { nome: "Brahma Chopp Torre 1,5 L", preco: "R$ 50,00" },
      { nome: "Brahma Chopp Torre 2,5 L", preco: "R$ 60,00" }
    ]
  },

  {
    categoria: "Canecas 330 ml",
    icone: "🍺",
    imagem: "assets/categorias/canecas.jpg",
    itens: [
      { nome: "Stella Artois — caneca 330 ml", preco: "R$ 7,50" },
      { nome: "Budweiser — caneca 330 ml", preco: "R$ 7,00" },
      { nome: "Brahma Chopp — caneca 330 ml", preco: "R$ 6,50" }
    ]
  },

  {
    categoria: "Bebidas sem Álcool",
    icone: "🥤",
    imagem: "assets/categorias/sem-alcool.jpg",
    itens: [
      { nome: "Refrigerante lata", preco: "R$ 6,00" },
      { nome: "Refrigerante KS 290 ml", preco: "R$ 6,00" },
      { nome: "Água com gás", preco: "R$ 5,00" },
      { nome: "Água sem gás", preco: "R$ 5,00" },
      { nome: "Cajuína", preco: "R$ 10,00" },
      { nome: "Suco (copo)", preco: "R$ 8,00" },
      { nome: "Coco da praia", preco: "R$ 7,00" },
      { nome: "Red Bull 250 ml", preco: "R$ 12,00" },
      { nome: "Monster 473 ml", preco: "R$ 15,00" }
    ]
  },

  {
    categoria: "Bebidas / Doses",
    icone: "🥃",
    imagem: "assets/categorias/doses.jpg",
    itens: [
      { nome: "Campari", preco: "R$ 10,00" },
      { nome: "Whisky Red Label", preco: "R$ 15,00" },
      { nome: "Whisky Black White", preco: "R$ 10,00" },
      { nome: "Lira", preco: "R$ 10,00" },
      { nome: "Ice", preco: "R$ 10,00" },
      { nome: "Vinho (taça)", preco: "R$ 10,00" }
    ]
  },

  {
    categoria: "Drinks",
    icone: "🍹",
    imagem: "assets/categorias/drinks.jpg",
    itens: [
      { nome: "Limão", preco: "R$ 13,00" },
      { nome: "Morango", preco: "R$ 15,00" },
      { nome: "Kiwi", preco: "R$ 15,00" }
    ]
  },

  {
    categoria: "Tira Gosto",
    icone: "🍗",
    imagem: "assets/categorias/tira-gosto.jpg",
    itens: [
      { nome: "Batata Frita", preco: "R$ 20,00" },
      { nome: "Ovos de Codorna (8 un)", preco: "R$ 10,00" },
      { nome: "Calabresa", preco: "R$ 20,00" },
      { nome: "Calabresa e Fritas", preco: "R$ 30,00" },
      { nome: "Filé com Fritas", preco: "R$ 40,00" },
      { nome: "Filé — 300 g", preco: "R$ 45,00" },
      { nome: "Asinhas de Frango", preco: "R$ 20,00" },
      { nome: "Pastelzinho (8 un) Queijo/Carne", preco: "R$ 15,00" }
    ]
  }

];
