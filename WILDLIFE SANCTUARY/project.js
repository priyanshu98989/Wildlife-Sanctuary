const sanctuaries = [
  {
    name: "Jim Corbett National Park, India",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Jim_Corbett_National_Park_India.jpg",
    description:
      "India’s first national park, home to Bengal tigers, elephants, leopards, and more.",
  },
  {
    name: "Yellowstone National Park, USA",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/YellowstonefallJUN05.JPG",
    description:
      "The first national park in the world, with geysers, bears, wolves, and bison.",
  },
  {
    name: "Kruger National Park, South Africa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/Kruger_National_Park_Sunset_Safari.jpg",
    description:
      "One of Africa’s largest game reserves, known for the Big Five.",
  },
  {
    name: "Banff National Park, Canada",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Moraine_Lake_17092005.jpg",
    description: "Home to elk, grizzlies, and stunning mountain landscapes.",
  },
  {
    name: "Kanha Tiger Reserve, India",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Barasingha_in_Kanha_National_Park.jpg",
    description:
      "Known for barasingha deer and one of India’s best tiger habitats.",
  },
  {
    name: "Serengeti National Park, Tanzania",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Serengeti_Landscape.jpg",
    description: "Famous for the Great Migration and vast savannas.",
  },
  {
    name: "Chitwan National Park, Nepal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Chitwan_jungle_nepal.jpg",
    description:
      "A UNESCO site with rhinos, tigers, crocodiles, and elephants.",
  },
  {
    name: "Yala National Park, Sri Lanka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Yala_Sri_Lanka_Leopard_2.jpg",
    description: "Has the highest density of leopards in the world.",
  },
  {
    name: "Galápagos National Park, Ecuador",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Galapagos_Islands.jpg",
    description: "Known for unique wildlife found nowhere else on Earth.",
  },
  {
    name: "Ranthambore National Park, India",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tiger_in_Ranthambore.jpg",
    description: "Famous for tigers and a picturesque fort inside the park.",
  },
];

const container = document.getElementById("sanctuary-list");

if (container) {
  sanctuaries.forEach((sanctuary) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${sanctuary.image}" alt="${sanctuary.name}">
      <div class="card-content">
        <h2>${sanctuary.name}</h2>
        <p>${sanctuary.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}
