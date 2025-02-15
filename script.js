const adjectives = [
  "aufmerksam", "begabt", "bescheiden", "dankbar", "ehrlich", "eifrig", "fleißig",
  "freundlich", "geduldig", "großzügig", "hilfsbereit", "humorvoll", "intelligent",
  "kreativ", "lebendig", "mutig", "nachdenklich", "optimistisch", "organisiert",
  "ruhig", "sanft", "schlau", "selbstbewusst", "sensibel", "sportlich", "stark",
  "tapfer", "warmherzig", "weise", "witzig", "zuversichtlich", "zielstrebig",
  "zuverlässig", "charmant", "charismatisch", "entspannt", "fantasievoll",
  "gerecht", "inspirierend", "leidenschaftlich", "lernfähig", "respektvoll",
  "selbstständig", "tolerant", "umsichtig", "verantwortungsbewusst", "vernünftig",
  "verlässlich", "verständnisvoll", "zielorientiert",

  "arrogant", "boshaft", "chaotisch", "eifersüchtig", "egoistisch", "eingebildet",
  "faul", "feige", "gereizt", "geizig", "grob", "habgierig", "hinterhältig",
  "ignorant", "impulsiv", "intolerant", "kindisch", "kalt", "launisch", "lügnerisch",
  "manipulativ", "nachtragend", "neidisch", "oberflächlich", "rechthaberisch",
  "rücksichtslos", "sarkastisch", "selbstsüchtig", "schüchtern", "spießig",
  "starrköpfig", "stur", "taktlos", "überheblich", "ungeduldig", "unehrlich",
  "unfair", "unhöflich", "unnachgiebig", "unsicher", "unsozial", "unzuverlässig",
  "verbittert", "verschlossen", "verzweifelt", "wankelmütig", "wehleidig",
  "wortkarg", "zickig", "zynisch"
];

document.getElementById("randomize-btn").addEventListener("click", () => {
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const adjectiveElement = document.getElementById("adjective");
  adjectiveElement.textContent = randomAdjective;
  adjectiveElement.classList.remove("hidden");
  adjectiveElement.style.opacity = 1;
});
