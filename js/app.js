const form = document.querySelector("#form")
const searchInput = document.querySelector("#search")
const songsContainer = document.querySelector("#songs-container")
const prevAndNextContainer = document.querySelector("#prev-and-next-container")

const apiURL = `https://api.lyrics.ovh`

const getMoreSongs = async url => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await response.json()

    insertSongsIntoPage(data)
}

const insertSongsIntoPage = songsInfo => {

    console.log(songsInfo)
    songsContainer.innerHTML = songsInfo.data.map(song => `
    <li class="song">
        <span class="song-artist"><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class="btn" data-artist="${song.artist.name}" data-song-title="${song.title}">Ver letra</button>
    </li>
}

const fetchSongs = async term => {
    const response = await fetch(`${ apiURL } / suggest / ${ term }`)
    const data = await response.json()

    insertSongsIntoPage(data)
}

form.addEventListener('submit', event => {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (!searchTerm) {
        songsContainer.innerHTML = `< li class= "warning-messege" > Digite um termo válido</li > `
        return;
    }

    fetchSongs(searchTerm)
})