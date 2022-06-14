//Metodo normal
// const getImagenPromesa = () => {
//   const promesa = new Promise((resolve, reject) => {
//     resolve("https://asjhdjahsd.com");
//   });
//   return promesa;
// };

//Metodo acortado

// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("https://asjhdjahsd.com"));

// getImagenPromesa().then(console.log);

//Metodo Async

const getImage = async () => {
  try {
    const apiKey = "ru9qOi9USA5KHaB9gAjnIdPI91ACvxvt";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    //manejo del error
    const ErrorImg =
      "https://wpdirecto.com/wp-content/uploads/2017/08/solucionar-error-wordpress.jpg";
    const img = document.createElement("img");
    img.src = ErrorImg;

    document.body.append(img);
  }
};
getImage();

//Nasa api
// const GetDataNasa = async () => {
//   const apikey = "M4LdQJGkqfb6wxRDmUKoGaN7u8vJhTRLbMM6Hknz";
//   const resp = fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`);

//   const data = await (await resp).json();

//   const { title, url, explanation } = data;

//   const Contenedor = document.createElement("div");
//   const newtitle = document.createTextNode(title);
//   const img = document.createElement("img");
//   img.src = url;
//   const newParrafo = document.createTextNode(explanation);

//   Contenedor.append(newtitle, img, newParrafo);

//   document.body.append(Contenedor);
// };

// GetDataNasa();
