function displayInspo(response) {
  new Typewriter("#inspo", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateInspo(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are a creator and visionary that has many amazing ideas. Your mission is to give inspriation for creative projects. Make sure to follow the user instructions about what kind of project they are working on and then provide a prompt or creative direction. This should be delivered as a title in a <strong> element then a paragraph in a <p> element and it needs to end with 'Happy creating!' inside a <strong> element.";
  let prompt = `User instructions: Come up with a creative prompt or idea for ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let inspoElement = document.querySelector("#inspo");
  inspoElement.classList.remove("hidden");
  inspoElement.innerHTML = `<div class="generating">✨ Coming up with something inpiring...</div>`;

  axios.get(apiURL).then(displayInspo);
}

let inspoFormElement = document.querySelector("#inspo-generator-form");
inspoFormElement.addEventListener("submit", generateInspo);
