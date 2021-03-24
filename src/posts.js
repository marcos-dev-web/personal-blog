//all topic names should be in lowercase

export const topics = ["javascript", "react", "html", "css"];

export const posts = [
  {
    title: "Experiência de contato com o ReactJS",
    texts: [
      `Eu comecei a estudar programação quando tinha 15 anos. Comecei a estudar porque queria entender como que as coisas eram feitas, por exemplo: sites, aplicativos, jogos, etc.`,

      `Ouvi muito falar que para começar a programar eu precisaria estudar primeiro lógica de programação. Então fui em busca dessa tal lógica de programação. Encontrei algo chamado portugol e quem estava ensinando era um professor que admiro muito (Gustavo Guanabara), então fui ver esse conteúdo.`,

      `Assisti algumas aulas, escrevi alguns algoritmos, mas eu não estava contente (eu costumo aprender muito rápido), então decidi que não ia começar com lógica de programação, e sim, logo com uma linguagem de programação.`,

      `Pesquisando, ouvi falar de uma linguagem chamada Python, fiquei muito curioso, e como não havia tido contato com qualquer coisa relacionada a programação a não ser o portugol, Fui pesquisar um local onde pudesse estudar. Então, procurando no YouTube, encontrei um curso gratuito do professro Gustavo Guanabara, achei interessante e fiz o curso, e mesmo sem aprender a lógica de programação primeiro, eu consegui aprender uma linguagem e junto a lógica de programação.`,

      `Agora você deve estar se perguntando: “mas o tópico não era sobre ReactJS?” E a resposta é sim! Mas pensei que seria interessante lhe falar como eu aprendi a primeira linguagem, para que você pudesse ter um contexto sobre mim. Eu usava Python para fazer scripts para meu dia a dia, como por exemplo: organizar pastas, mover arquivos automaticamente, ou até mesmo utilizando o selenium webdriver para automatizar mensagens.`,

      `Mas eu não estava muito contente, eu queria algo que me desse um resultado visual, e eu até fazia algumas telas com Python utilizando a biblioteca Tkinter, mas não era o que eu queria. Então acabei decidindo que queria construir sites.`,

      `Comecei com o básico, HTML/CSS & JavaScript (puro). Depois de um tempo percebi que estava se tornando muito ruim criar códigos para projetos um pouco maiores com javascript puro, pois tinha que digitar muito código para fazer algo, então, após utilizar o Jquery (uma bliblioteca do javascript), encontrei o framework ReactJS através da Rocketseat! Fui ver como funcionava, e me apaixonei, foi algo que eu não esperava. Você poder escrever seus componentes utilizando o javascript com a novidade do JSX para criar seu “html”, você poder usar estados, separar partes da sua aplicação em componentes, e tudo isso e muito mais, com o javascript.`,

      `Um exemplo de porque o react é tão bom, é o seu modo de renderização. Se, por exemplo, você estiver utilizando um estado em que guarda o nome de um usuário em um App, e esse usuário pode mudar o seu nome a qualquer momento, quando o usuário digitar seu nome e salvar, apenas aquela parte que foi modificada será alterada, e você não precisa escrever outro código para modificar aquilo o própio react já cuida disso. esse é um dos mais básicos motivos que me faz gostar do ReactJS.`,

      `Bom esse artigo já está bem grande haha, se você gostou do conteúdo ou quer dar uma sugestão de tópico, ou até mesmo uma crítica ou reporte de erro, utilize uma de minhas formas de contato, no footer do site e contact-me! Compartilhe esse blog com seus amigos, pois também sairão assuntos de como resolver alguns problemas do dia a dia de um desenvolvedor front-end, e dessa forma talvez você encontre a solução do erro que está lhe atormentando!`,
  
      `Fique com esse exemplo de código utilizando ReactJs!`,

      `Por hoje é isso, até a próxima!`,
    ],
    codes: [
      {
        language: "javascript",
        code: [
          `
  import React, { useState } from 'react';

  function Input() {

    const [name, setName] = useState("");
  
    function handleValueInput(event) {
      setName(event.target.value);
    }

    return (
      <div>
        <p>username: {name}</p>
        <input type="text" onChange={handleValueInput} />
        <!--
        nesse caso sempre que o input for alterado
        a tag p irá atualizar o seu valor,
        ficando assim sempre atualizado.
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
