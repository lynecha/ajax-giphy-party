"use strict";

console.log("Let's get this party started!");

/** use axios.get to make a request and the params would be the query string
 * which would come from the form input on the html page
 */
 let $searchInput;
 let $gifContainer = $("#gifs");
 let $form = $("#form");
 let $submitButton = $("#submitButton");
 $form.on("submit", function (evt) {
      evt.preventDefault();
      console.log("im here");
      $searchInput = $("#input").val();
      return $searchInput;
 });

async function giphyRequest($searchInput) {
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { q: $searchInput, api_key: "F5CYNIl0M6UIubfF985JaQpAJLQ6uzMt"}  });
    console.log(response);
    return response.data;
}

function
