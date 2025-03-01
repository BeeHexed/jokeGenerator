document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is fully loaded!");
});

function sayJoke() {
  let apiKey = "36b4fe238810fo977tebf4ca2bcf46b6";
  let prompt = "Tell me a joke";
  let context = "Please provide jokes about kittens, bees, or Minecraft";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

axios.get(apiUrl)
    .then(response => {
      console.log("Joke:", response.data.answer); 

      let jokeElement = document.getElementById("joke");  
      if (jokeElement) {
        jokeElement.innerHTML = response.data.answer;
      } else {
        console.error("Sorry, no joke found. 😢");
      }
    })
    .catch(error => {
      console.error("Error fetching joke:", error);
    });
}


  let button = document.querySelector("button");
if (button) {
  button.addEventListener("click", sayJoke);
} else {
  console.error("Button not found!");
}