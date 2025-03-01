document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is fully loaded!");
});

function sayJoke() {
  let apiKey = "36b4fe238810fo977tebf4ca2bcf46b6";
  let prompt = "Tell me a joke";
  let context = "Provide jokes about kittens, bees, or Minecraft";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
}
axios.get(apiUrl)

let button = document.querySelector("button");
button.addEventListener("click", sayJoke);
