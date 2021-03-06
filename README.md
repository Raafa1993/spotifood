<h1 align="center">
    <img alt="SpotiFood" title="#SpotiFood" src="src/assets/logo-spotifood.jpg"/>
</h1>

<h4 align="center">
	SpotiFood 🚀
</h4>


## 💻 - iFood Frontend Test

Create a web application called Spotifood used to display the preferred playlists from iFood's customers. The web application has only one page:

A page that lists the featured playlists at Spotify according to some criteria.

## - Business rules

- The page is composed of two components:
    -One list of featured playlists
    -One filter component with API filter fields and one local search text input to filter the playlists by "name".
- The page is composed of two components:

- One list of featured playlists
One filter component with API filter fields and one local search text input to filter the playlists by "name".
The filter component should be used to filter the elements displayed by the list of featured playlists.

- The API filter fields and their possible values/type should be mounted by consuming this API [1. Playlists Filters] (http://www.mocky.io/v2/5a25fade2e0000213aa90776)

- The featured playlists to be displayed should be consumed from this API [2. See the documentation from Spotify] (https://developer.spotify.com/web-api/get-list-featured-playlists/)

- Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.

- Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.

## - Hints or Constraints

We will use one API from Spotify Web API. You should follow the Spotify guide in order to create a token needed to access Spotify's API. To mount the API filter fields on the filter component, you must consume the API that provides the metadata about the fields (Link 1). You could use Material UI, Bootstrap or any other toolkit to accelerate your resolution. We will not provide any UI prototype or design.

## - Non functional requirements

As this application will be a worldwide success, it must be prepared to be accessible, responsive, fault tolerant and resilient. We strongly recommend using React to build the application. Also, briefly elaborate on your solution architecture details, choice of patterns and frameworks. Fork this repository and submit your code.

## 🛠 - Technology's

- [Typescript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [axios](https://www.npmjs.com/package/axios)
- [Yarn](https://yarnpkg.com/)

## Wireframe

Wireframe AdobeXD
[https://xd.adobe.com/view/7d2a0660-513f-4f08-92b7-ec4f83fe2ef7-2879/]

### 🚀 - Getting Started

Rename **.env.example** to **.env** end put spotify token. **Is more important follow this step by step. Make sure everything is working normally.**


```bash
# clone this repository
$ git clone https://github.com/Raafa1993/spotifood

# Access the project folder in terminal/cmd
$ cd spotifood

# Install the dependencies
$ yarn

# Run the application in development mode
$ yarn start

# The server will start on the port:3000 - acess http://localhost:3000
```
