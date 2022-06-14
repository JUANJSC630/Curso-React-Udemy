//Api Key
const apiKey = "ru9qOi9USA5KHaB9gAjnIdPI91ACvxvt";

//Url Api
const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

//Consumiendo datos de api
peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
    console.log(data.images.original);
  })
  .catch(console.warn);
