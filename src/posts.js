//all topic names should be in lowercase

export const topics = ["javascript", "react", "html", "css"];

export const posts = [
  {
    title: "Experiência de contato com o ReactJS",
    texts: [
      `Eu comecei a estudar programação quando tinha 15 anos.
      Comecei a estudar porque queria entender como que as coisas eram feitas, como: sites, aplicativos, jogos, etc.`,

      `Ouvia falar muito que para começar a programar eu precisaria estudar primeiro, lógica de programação.
      Então fui em busca dessa tal lógica de programação, encontrei algo chamado portugol, e quem estava ensinando era um professor que admiro muito, Gustavo Guanabara, então fui ver esse conteúdo.`,

      `Assisti algumas aulas, escrevi alguns algoritmos, mas eu não estava contente (eu costumo aprender muito rápido), então decidi que não ia começar com lógica de programação, e sim, logo com uma linguagem de programação.`,

      `Pesquisando, ouvi falar de uma linguagem chamada Python, fiquei muito curioso, e como não havia tido contato com qualquer coisa relacionada a programação a não ser o portugol, Fui pesquisar um local onde pudesse estudar, então procurando no YouTube encontrei um curso gratuito do Gustavo Guanabara, fui e fiz, e mesmo sem aprender primeiro a lógica de programação, eu consegui aprender a linguagem e junto a lógica de programação.`,

      `Agora você deve estar se perguntando, mas o tópico não era sobre ReactJS?
      E a resposta é sim! Mas pensei que seria interessante lhe falar como eu aprendi a primeira linguagem, para que você pudesse ter um contexto sobre mim.
      Eu usava Python para fazer scripts para meu dia a dia, tipo: organizar pastas, mover arquivos automaticamente, ou até mesmo utilizando o selenium webdriver para automatizar mensagens.
      `,
      `Mas eu não estava muito contente, eu queria algo que me desse um resultado visual, e eu até fazia telas com Python utilizando a biblioteca Tkinter, mas não era o que eu queria.
      Então acabei querendo construir sites.
      `,
      `
      Comecei com o básico, HTML/CSS & JavaScript (puro).
      Depois de um tempo percebi que tava se tornando muito ruim criar códigos para projetos um pouco maiores com javascript, pois tinha que digitar muito código para fazer algo, então, após utilizar o Jquery (ele é muito bom), encontrei o framework ReactJS através da RocketSeat!
      Fui ver como funcionava, e me apaixonei, foi algo que eu não esperava, você poder escrever seus componentes utilizando JSX, poder usar estados, separar partes da sua aplicação, e tudo isso e muito mais, com javascript.
      `,
      `
      Um exemplo de porque o react é tão bom, é o seu modo de renderização.
      Se, por exemplo, você estiver utilizando um estado em que guarda o nome de um usuário em um App, e esse usuário pode mudar o seu nome a qualquer momento, quando o usuário digitar seu nome e salvar, apenas aquela parte que foi modificada vai ser alterada, e você não precisa escrever um código para modificar aquilo.
      esse é um dos mais básicos motivos que me faz gostar do React.
      `,
      `
      Bom esse artigo já tá bem grande haha, se você gostou ou quer dar uma sugestão de tópico, utilize uma de minhas formas de contato, no footer do site!
      Compartilhe esse blog com seus amigos, e venha sempre também, pois também sairão assuntos de como resolver alguns problemas do dia a dia de programador, e dessa forma talvez você encontre a solução do seu erro!
      `,
    ],
    codes: [
      {
        language: "javascript",
        code: [
          `
  import React, { useState } from 'react';
  const [name, setName] = useState("");

  function Input() {

    function handleValueInput(event) {
      setName(event.target.value);
    }

    return (
      <div>
        <p>username: {name}</p>
        <input type="text" onChange={handleValueInput} />
        <!--
        nesse caso toda vida que o input for alterado
        a tag p irá atualizar o valor,
        deixando assim sempre atualizado.
        -->
      </div>
    );
  }
        `,
        ],
      },
    ],
    topic: "react",
    id: 0,
  },
];

//to add new trendings only put the id of post in the array trendings
//example:
//  export const trendings = [1, 3];
//
export const trendings = [0];
