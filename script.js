var listaJogos = [
  "https://cdn.akamai.steamstatic.com/steam/apps/223750/header.jpg?t=1631891317",
  "https://cdn.akamai.steamstatic.com/steam/apps/236390/header.jpg?t=1631265978",
  "https://cdn.akamai.steamstatic.com/steam/apps/541210/header.jpg?t=1526607792",
  "https://cdn.akamai.steamstatic.com/steam/apps/552990/header.jpg?t=1631717124",
  "https://cdn.akamai.steamstatic.com/steam/apps/107410/header.jpg?t=1631090608",
  "https://cdn.akamai.steamstatic.com/steam/apps/393380/header.jpg?t=1625690130",
  "https://cdn.akamai.steamstatic.com/steam/apps/581320/header.jpg?t=1631542792",
  "https://cdn.akamai.steamstatic.com/steam/apps/1520/header.jpg?t=1586365976",
  "https://cdn.akamai.steamstatic.com/steam/apps/686810/header_alt_assets_1.jpg?t=1631895870",
  "https://cdn.akamai.steamstatic.com/steam/apps/736220/header.jpg?t=1619806782",
  "https://cdn.akamai.steamstatic.com/steam/apps/1359090/header.jpg?t=1629820673",
  "https://cdn.akamai.steamstatic.com/steam/apps/307960/header.jpg?t=1629472363"
];

var listaLinks = [
  "https://www.digitalcombatsimulator.com/en/",
  "http://warthunder.com/en/registration?r=userinvite_50727279",
  "http://killerfishgames.com/games/cold-waters",
  "https://worldofwarships.com/pt-br/",
  "https://arma3.com/",
  "https://joinsquad.com/",
  "https://insurgency-sandstorm.com/en",
  "https://store.steampowered.com/app/1520/DEFCON/",
  "https://store.steampowered.com/app/686810/Hell_Let_Loose/",
  "https://store.steampowered.com/app/736220/Post_Scriptum/",
  "https://store.steampowered.com/app/1359090/Zero_Hour/",
  "https://store.steampowered.com/app/307960/IL2_Sturmovik_Battle_of_Stalingrad/"
];

listaJogos.forEach((valorAtual, index) => {
  document.body.innerHTML += `<a target=_blank href=${listaLinks[index]}><img src=  ${valorAtual}></a>`;
});