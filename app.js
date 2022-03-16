"use strict";

console.log("Let's get this party started!");

/** use axios.get to make a request and the params would be the query string
 * which would come from the form input on the html page
 */
 let $searchInput;
 let $gifContainer = $("#gifs");
 let $form = $("#form");
 let $submitButton = $("#submitButton");

 /** Conductor function on the event listener. When user submits the form, it will
  * call the giphyRequest and appendGif functions.
  */
 $form.on("submit", async function (evt) {
      evt.preventDefault();
      console.log("im here");
      $searchInput = $("#input").val();
      let generatedGif = await giphyRequest($searchInput);
      appendGif(generatedGif);

 });

 /**Submitted our request to GIPHY and generating a random response to the input. */
async function giphyRequest($searchInput) {
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { q: $searchInput, api_key: "0769YYRyMYdbiaT3p8RRAzg0Ls9d8Wq3"}  });
    //console.log(response);
    console.log("response data =", response.data);
    let randomImage = generateRandomImage(response.data.data);
    return response.data.data[randomImage].images.original.url;
}

/**Append the GIF to the DOM */
function appendGif (generatedGif){
    let $gifMain = $(`<img src = ${generatedGif}>`);
    $gifContainer.append($gifMain);

}

/**Generate a random image based on the length of the API array. */
function generateRandomImage (imageArray){
   return Math.floor(Math.random() * imageArray.length);
}