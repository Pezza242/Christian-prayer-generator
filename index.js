function generatePrayer(event) {
  event.preventDefault();
  new Typewriter("#prayer-answer", {
    strings:
      "God, thank you for everything. Help me to be a better person today.",
    autoStart: true,
    delay: 60,
  });
}

let prayerForm = document.querySelector("#prayer-form");
prayerForm.addEventListener("submit", generatePrayer);

function shecodesAI(){
let prompt = "";
let context = "";
let apiKey = "eb79bof31898546ffea432d4bb90t390";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`:
}


new Typewriter("#prayer-answer", {
  strings:
    " Your prayer will appear here. <br/> God bless you on your prayer journey to become closer to God. x",
  autoStart: true,
  delay: 60,
});

