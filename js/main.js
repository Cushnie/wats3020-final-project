const data = [{
        taxonomy: "Zalophus californiaus",
        name: "California Sea Lion"
    },
    {
        taxonomy: "Eumetopias jubatus",
        name: "Steller Sea Lion"
    },
    {
        taxonomy: "Phoca vitulina richardii",
        name: "Pacific Harbor Seal"
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