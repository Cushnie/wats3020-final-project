const data = [{
        name: "California Sea Lion",
        taxonomy: "Zalophus californiaus"
    },
    {
        name: "Steller Sea Lion",
        taxonomy: "Eumetopias jubatus"
    },
    {
        name: "Northern Fur Seal",
        taxonomy: "Callorhinus ursinus"
    },
    {
        name: "Pacific Harbor Seal",
        taxonomy: "Phoca vitulina richardii"
    },
    {
        name: "Norther Sea Otter",
        taxonomy: "Enhydra lutris kenyoni"
    },
    {
        name: "Orca or Killer Whale",
        taxonomy: "Orcinus orca"
    },
    {
        name: "Aggregating Anemones",
        taxonomy: "Anthopleura elegantissima"
    },
    {
        name: "Ochre Sea Star",
        taxonomy: "Pisaster ochraceus"
    },
    {
        name: "Kelp Crab",
        taxonomy: "Pugettia producta"
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
}


let heartelems = document.querySelectorAll(".fa-heart");
for (heart of heartelems) {
    heart.addEventListener("click", function (event) {
        alert("Hi friend!");
    })
}
