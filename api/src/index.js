import express from 'express';
import http from 'http';


const app = express();
app.get('/anime', (req, res) => {

    const animeParam = req.query.anime
    const offset = req.query.offset

    const headers = new Headers();
    headers.append('X-MAL-CLIENT-ID', '34eab0d718fbf6178a84abfe29b4053b');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    const resp = fetch(`https://api.myanimelist.net/v2/anime?q=${animeParam}&offset=${offset}&fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,{
        headers: headers,
    })
    .then(response => response.json())
    .then(response => {
        res.send(response);
        return response
    })

    .catch(error => console.log(error))
    return resp 
})

app.get('/anime/:id', (req, res) => {

    const animeId = req.params.id
    console.log(animeId);

    const headers = new Headers();
    headers.append('X-MAL-CLIENT-ID', '34eab0d718fbf6178a84abfe29b4053b');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    const resp = fetch(`https://api.myanimelist.net/v2/anime/${animeId}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,{
        headers: headers,
    })
    .then(response => response.json())
    .then(response => {
        res.send(response);
        return response
    })

    .catch(error => console.log(error))
    return resp 
})

app.listen('3000', ()=>{
    console.log('Server running on http://localhost:3000')
});