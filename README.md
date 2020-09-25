<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/logo.svg"/>
</h1>

<h4 align="center">
	SpotiFood 🚀
</h4>


## 💻 - Sobre o projeto

Crie um aplicativo da web chamado Spotifood usado para exibir as listas de reprodução preferidas dos clientes. O aplicativo da web possui apenas uma página:

Uma página que lista as listas de reprodução em destaque no Spotify de acordo com alguns critérios.

## - Regras do negócio

- A página é composta por dois componentes:
    -Uma lista de playlists em destaque
    -Um componente de filtro com campos de filtro de API e uma entrada de texto de pesquisa local para filtrar as listas de reprodução por "nome".
- O componente de filtro deve ser usado para filtrar os elementos exibidos pela lista de listas de reprodução em destaque.
- Os campos de filtro da API e seus possíveis valores / tipo devem ser montados consumindo esta API [1. Filtros de listas de reprodução] ( http://www.mocky.io/v2/5a25fade2e0000213aa90776 )
- As listas de reprodução apresentadas a serem exibidas devem ser consumidas a partir desta API [2. Consulte a documentação do Spotify] ( https://developer.spotify.com/web-api/get-list-featured-playlists/ )
- Cada vez que o usuário altera qualquer informação no componente do filtro, a lista deve ser atualizada de acordo. Em caso de alteração do campo do filtro de API, você deve chamar a API de listas de reprodução com os parâmetros de filtro todas as vezes.
- Considerando que vivemos em um mundo caótico e em rápida mudança, a página deve atualizar seu conteúdo a cada 30 segundos, para ver se alguma informação das APIs do Spotify foi alterada.

## - Dicas ou restrições

Usaremos uma API da API da Web do Spotify. Você deve seguir o guia do Spotify para criar um token necessário para acessar a API do Spotify. Para montar os campos de filtro de API no componente de filtro, você deve consumir a API que fornece os metadados sobre os campos (Link 1). Você pode usar o Material UI, Bootstrap ou qualquer outro kit de ferramentas para acelerar sua resolução. Não forneceremos nenhum protótipo ou design de IU.

## - Requisitos não Funcionais

Como esta aplicação será um sucesso mundial, ela deve estar preparada para ser acessível, responsiva, tolerante a falhas e resiliente. É altamente recomendável usar o React para criar o aplicativo. Além disso, elabore brevemente os detalhes da arquitetura de sua solução, a escolha de padrões e estruturas. Bifurque este repositório e envie seu código.

## 🛠 - Tecnologias

- [Typescript]
- [React-js]
- [axios][nodejs]
- [Javascript]


## 🚀 - Como executar o projeto



### 🚀 - Como executar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/Raafa1993/spotifood

# Acesse a pasta do projeto no terminal/cmd
$ cd spotifood

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```
