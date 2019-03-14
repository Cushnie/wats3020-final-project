const data = [{
        name: "California Sea Lion",
        taxonomy: "Zalophus californiaus",
        info: "California sea lions are known for their intelligence, playfulness, and noisy barking. Males reach 850 pounds and seven feet in length. Females grow to 220 pounds and up to six feet in length."
        // pic: "images/califsealion.jpg"     
    },
    {
        name: "Steller Sea Lion",
        taxonomy: "Eumetopias jubatus",
        info: "Steller sea lions are sometimes confused with California sea lions, but are much larger & lighter in color. Males may grow to 11 feet (3.25 m) in length and weigh almost 2,500 pounds. Females are much smaller and may grow to nine feet in length and weigh 1,000 pounds."
    },
    {
        name: "Northern Fur Seal",
        taxonomy: "Callorhinus ursinus",
        info: "Fur seals are known and named for their thick fur, which has 300,000 hairs per square inch. Male pups weigh 12 pounds and grow to 385-605 pounds  and seven feet in length. Female pups, however, only weigh 10 pounds and grow to 66-110 pounds and 4.5 feet in length."
    },
    {
        name: "Pacific Harbor Seal",
        taxonomy: "Phoca vitulina richardii",
        info: "Pacific harbor seals have spotted coats in a variety of shades from white or silver-gray to black or dark brown. They reach five to six feet in length and weigh up to 300 pounds. They are true or crawling seals, having no external ear flaps. True seals have small flippers and must move on land by flopping along on their bellies."
    },
    {
        name: "Norther Sea Otter",
        taxonomy: "Enhydra lutris kenyoni",
        info: "The sea otter is the largest member of the weasel family. Their fur is made up of a dense underfur and longer guard hairs. The guard hairs can be brown to black to silver. Their hind feet are webbed to aid in swimming. Adult sea otters may grow up to 5 feet in length. The males weigh 80–100 pounds. The females are smaller, weighing 50–70 pounds."
    },
    {
        name: "Orca or Killer Whale",
        taxonomy: "Orcinus orca",
        info: "Orcas are the largest members of the dolphin family.Male orcas usually grow to an average of 20-26 feet and weigh an average of 8,000-12,000 pounds. Females evolve to an average of 16-23 feet and weigh between 3,000–6,000 pounds."
    },
    {
        name: "Aggregating Anemones",
        taxonomy: "Anthopleura elegantissima",
        info: "Aggregating anemones, elegant flowerlike animals, have a tube-shaped body crowned with tentacles. Anemones are voracious feeders that eat almost anything. Stinging cells (nematocysts) on their tentacles paralyze small prey animals. Anemones can even ingest small crabs and then spew out the shells."
    },
    {
        name: "Ochre Sea Star",
        taxonomy: "Pisaster ochraceus",
        info: "Ochre Sea Stars are relatively large sea stars, with five arms and a rough surface, the short spines on the upper surface arranged in wavy patterns. They move by means of tube feet. Ochre Sea Stars are the most commonly seen member of their group in many Pacific Northwest coastal areas. Virtual swarms of orange and/or purple starfish are exposed at especially low tides, often clustered under shady ledges or in crevices where they won’t get baked by the sun."
    },
    {
        name: "Kelp Crab",
        taxonomy: "Pugettia producta",
        info: "These crabs are in a large group of crabs called spider crabs. They generally have long legs with relatively small body, usually conspicuously pointed in front. this species is usually dark brown, with a roughly squareish carapace except for the pointed front. Males are a bit larger than females and may be as much as 4 inches across. Younger crabs may be olive-green as well as red or brown."
    },
    {
        name: "Tidepool Sculpin",
        taxonomy: "Oligocottus maculatus"
    },
    {
        name: "Lemon Peel Nudibranch",
        taxonomy: "Anisodoris nobilis"
    },
    {
        name: "Bull Kelp",
        taxonomy: "Nereocytis luetkeana"
    },
    {
        name: "Glaucous-winged Sea Gull",
        taxonomy: "Larus glaucescens"
    },
    {
        name: "Pigeon Guillemot",
        taxonomy: "Cepphus columba"
    },
    {
        name: "Great Blue Heron",
        taxonomy: "Ardea herodias"
    },
    {
        name: "Bald Eagle",
        taxonomy: "Haliaeetus leucocephalus"
    },
    {
        name: "Black Oystercatcher",
        taxonomy: "Haematopus bachmani"
    },
    {
        name: "Western Grebe",
        taxonomy: "Aechmophorus occidentalis"
    }
]

let elems = document.querySelectorAll("article");
for (let i = 0; i < data.length; i++) {
    let marinebio = data[i];
    let elem = elems[i];
    let nameelem = elem.querySelector('.name');
    if (nameelem) {
        nameelem.innerHTML = marinebio.name;
    }
    let taxonomyelem = elem.querySelector('.taxonomy');
    if (taxonomyelem) {
        taxonomyelem.innerHTML = marinebio.taxonomy;
    }
    let infoelem = elem.querySelector('.info');
    if (infoelem) {
        infoelem.innerHTML = marinebio.info;
    }

}

//  recordMove(event) {
//     let tile_x = event.target.dataset.x;
//     let tile_y = event.target.dataset.y;
//     if (!this.gameState[tile_x][tile_y]) {
//       this.gameState[tile_x][tile_y] = this.currentPlayer.token;
//       event.target.setAttribute('class', `tile played fas fa-${this.currentPlayer.token}`)
//     } else {
//       return false;
//     }
//   }

let heartelems = document.querySelectorAll(".fa-heart");
for (heart of heartelems) {
    heart.addEventListener("click", function (event) {
        alert("I love you too!");
    })
}

let eyeelems = document.querySelectorAll(".fa-eye");
for (eye of eyeelems) {
    eye.addEventListener("click", function (event) {
        alert("Hi friend!");
    })
}

let globeelems = document.querySelectorAll(".fa-globe");
for (globe of globeelems) {
    globe.addEventListener("click", function (event) {
        alert("Where did you see me today?");
    })
}