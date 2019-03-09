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
    {   name: "Norther Sea Otter",
        taxonomy: "Enhydra lutris kenyoni"
    },
    {
        name: "Orca or Killer Whale",
        taxonomy: "Orcinus orca"
    }
]
// for (pinniped in data) {
//     let elems = document.querySelectorAll("article .taxonomy")
//     for (elem in elems) {
//         elem.innerHTML = pinniped.taxonomy
//     }
// }
let elems = document.querySelectorAll("article");
for (let i = 0; i < data.length; i++) {
    let pinniped = data[i];
    let elem = elems[i];
    let nameelem = elem.querySelector('.name');
    if (nameelem) {
        nameelem.innerHTML = pinniped.name;
    }
    let taxonomyelem = elem.querySelector('.taxonomy');
    if (taxonomyelem) {
        taxonomyelem.innerHTML = pinniped.taxonomy;
    }
}


// let actionelems = document.querySelectorAll(".fa-bars");
// for (let action of actionelems) {
//     action.addEventListener("click", function (event) {
let heartelems = document.querySelectorAll(".fa-heart");
for (heart of heartelems) {
    heart.addEventListener("click", function (event) {
        alert("Hi friend!");
    })
}
//     })
// }