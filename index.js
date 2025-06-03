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

new Typewriter("#prayer-answer", {
  strings:
    " Your prayer will appear here. <br/> God bless you on your prayer journey to become closer to God. x",
  autoStart: true,
  delay: 60,
});
new Typewriter("footer", {
  strings: `Coded by  <a href="https://github.com/Pezza242" target="_blank"> Peri Williams-Yearwood</a>, open-sourced on <a href="https://github.com/Pezza242/Christian-prayer-generator" target="_blank">Github</a>, and hosted on <a href="https://shecode-ai-christian-prayer-generator.netlify.app/" target="_blank">Netlify</a>`,
  autoStart: true,
  cursor: "",
  delay: 60,
});
