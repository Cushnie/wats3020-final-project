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
        taxonomy: "Oligocottus maculatus",
        info: "Sculpins are carnivores, and this little species hunts for the small crustaceans and worms of several types that are common in its habitat. It is similarly sought by larger predatory species. Most sculpins are protected from predation by sharp spines on their head and gill covers, but this species is not very heavily spined. They have the ability to extract oxygen directly from the air; in other words, they breathe air."
    },
    {
        name: "Lemon Peel Nudibranch",
        taxonomy: "Anisodoris nobilis",
        info: "Most nudibranchs sport bright colors—sea lemons are deep yellow to burnt orange. Black spots mingle with protruding bumps (tubercles) on the sea lemon's back. Fleshy antennae (sensory organs) and a rosette of gills protrude from the back of a sea lemon's slim, flat body. Sea lemons breathe through the rosette of gills on their back."

    },
    {
        name: "Bull Kelp",
        taxonomy: "Nereocytis luetkeana",
        info: "Bull Kelp is easily recognized by its very long stipe (stalk), up to 30 meters or more in length, extending from the holdfast that attaches it to the bottom to a floating hollow bulb that may be over 10 centimeters in diameter. Long, leaflike blades up to three meters in length branch from the bulb and spread out to float on the surface. These blades provide the plant with both photosynthesis and nutrient absorption. The hollow upper part of the stalk is also filled with gas (including carbon monoxide!), so the stalks float in long snaky rows at lower tides."
    },
    {
        name: "Glaucous-winged Sea Gull",
        taxonomy: "Larus glaucescens",
        info: "Although a dozen species of gulls occur in and around Puget Sound, the Glaucous-winged is the only one that breeds in the Sound and is usually by far the most commonly seen species. Light brown juveniles grow in more gray and white plumage with every molt, and the bill changes from black to yellow with a red spot, the feet from dull to bright pink."
    },
    {
        name: "Pigeon Guillemot",
        taxonomy: "Cepphus columba",
        info: "Pigeon Guillemots are one of only a few species of seabirds that nest on the shores of Puget Sound. They are able to do this because they are crevice and burrow nesters, and the dark recesses of docks and piers are seen as adequate substitutes for natural crevices or burrows they themselves dig in vertical banks above the water."
    },
    {
        name: "Great Blue Heron",
        taxonomy: "Ardea herodias",
        info: "These large birds are easily recognizable by their long neck and legs and overall gray-blue coloration. With further scrutiny, you can see that they are really handsomely patterned, with black plumes on a white head, bold black patches on the underparts, and even swatches of rufous on the wings and thighs. The flight feathers are conspicuously darker than the rest of the wing. Great Blue Herons take off with neck extended, but then pull it into a graceful S shape as they fly."
    },
    {
        name: "Bald Eagle",
        taxonomy: "Haliaeetus leucocephalus",
        info: "They are present year-round throughout most parts of Washington with the highest densities in the Puget Sound region. Individuals occur in the Puget Sound basin as migrants, winter residents and members of the breeding population. They are often associated with shorelines and large, open expanses of water. Bald eagles are opportunistic foragers that feed most frequently on fish and waterfowl, consuming live fish and birds as well as scavenging upon dead fish, birds and mammals. They are known to hunt in both seabird and great blue heron colonies."
    },
    {
        name: "Black Oystercatcher",
        taxonomy: "Haematopus bachmani",
        info: "Found on the North American Pacific coast from the Aleutian Islands in Alaska to Baja California, the black oystercatcher’s thick, long beak glows orange-red so from a distance it looks like it’s eating a carrot! Sturdy pinkish-grey legs and large feet allow it to confidently stroll through rocks and tide pools looking for prey. Today’s estimated 11,000 oystercatchers is a much smaller population than flourished in the Pacific Northwest a century ago."
    },
    {
        name: "Western Grebe",
        taxonomy: "Aechmophorus occidentalis",
        info: "Western Grebes are large and slender with long necks and long, thin bills. Plumage is dark gray above and white below, with a clear color division. The top of the face is black, and the bottom white. The black extends below the eye in the Western Grebe. (In the closely related and similar-appearing Clark's Grebe, the black ends above the eye.) The bill of the Western Grebe is yellowish to dull olive."
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
// <!-- trying to figure out how to create a "clicked" & "record" event with the icons ... using some script from the tic tac toe game and seeing how I can incorporate it here -->

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