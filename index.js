function generatePrayer(response) {
  let answer = response.data.answer;

  new Typewriter("#prayer-answer", {
    strings: answer,
    autoStart: true,
    delay: 60,
  });
}
function getPrayer(event) {
  event.preventDefault();
  let searchKeyword = document.querySelector("#search-bar");

  let context =
    "You are learning about Christianity so you can help other christians with their religious journey. Your task is to generate a short prayer based the topic they have picked. Your can add scriptures about the topic too if you want. Make sure to follow user's instructions.";
  let prompt = `User instructions: Generate a prayer about ${searchKeyword.value}`;
  let apiKey = "eb79bof31898546ffea432d4bb90t390";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generatePrayer);
}

let prayerForm = document.querySelector("#prayer-form");
prayerForm.addEventListener("submit", getPrayer);

new Typewriter("#prayer-answer", {
  strings:
    " Your prayer will appear here. <br/> God bless you on your journey to become closer to God. x",
  autoStart: true,
  delay: 60,
});
