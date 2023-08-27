

const urlParams = new URLSearchParams(window.location.search);
const animeParam = urlParams.get("anime")
const offset = urlParams.get("offset")

async function getAnime(animeParam) {

    const resp = fetch(`http://localhost:3000/anime?anime=${animeParam}&offset=${offset}`)
    .then(response => response.json())
    .then(response => {
        return response
    })
    .catch(error => console.log(error))
    return resp 
}

async function getAnimeById(id) {

    const resp = fetch(`http://localhost:3000/anime/${id}`)
    .then(response => response.json())
    .then(response => {
        return response
    })
    .catch(error => console.log(error))
    return resp 
}

const animeInfo = getAnime(animeParam).then(response => {
        const info = response;
        let headerTemplate =''

        

        info.data.forEach(element => {
            headerTemplate = headerTemplate + 
            `
            <li>
                <div class="container__card">
                    <h2 class="title">${element.node.title}</h2>
                    <img src="${element.node.main_picture.large}">
                    <button type="button" data-id="${element.node.id}" class="anime_details_btn">Detalhes do anime</button>  
                </div>
            </li>   
        `;

        });
        document.querySelector('.container ul').innerHTML = headerTemplate;
        
        document.querySelector('.anime_details_btn').addEventListener('click', async function(event) {
            const animeId = event.target.dataset.id;
            const animeDetails = await getAnimeById(animeId);
            
            //redirect para a página de detalhes de anime 
            //a partir daqui, gerar um outro HTML template com as informações do anime
        })

    }
)


