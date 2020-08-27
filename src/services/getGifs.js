const apiKey = "UfNk4gUbbi5gb6Pg5SuTSUvw5Uv280Nq";

export default function getGifs ({searchTerm} = {}) {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`)
      .then(response => response.json())
      .then(res => {
        const {data = []} = res;
        const gifs = data.map(image => {
            const {images, title, id} = image; 
            const {url} = images.downsized_medium;
            return {title, id, url}
        });
        return gifs;
    })
}