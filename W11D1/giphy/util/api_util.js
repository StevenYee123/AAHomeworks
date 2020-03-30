export const fetchSearchGiphys = (searchTerm) => {
    const API_Key = "6EXlNe9S3cxlSVKONAXAzYZ8eUw7qOsw"
    return $.ajax({
      method: "GET",
      url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_Key}&limit=2`
    });
}