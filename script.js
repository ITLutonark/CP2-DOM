let script = document.createElement('script');
script.src = 'cats.js';
document.head.appendChild(script);

script.onload = function() {
    setTimeout(function() {
        for (let cat of cats){
            loadCat(cat)
        }
    }, 0);
};

function loadCat(cat){

    let divCatBlock = document.createElement("div")
    divCatBlock.className = "catBlock"
    divCatBlock.setAttribute("id", cat.id)

    let catName = document.createElement("h1")
    catName.innerHTML = cat.name
    catName.className = "catName"

    let divCatImg = document.createElement("div")
    divCatImg.className = "divImg"
    let img = document.createElement("img")
    img.src = cat.img_link
    img.alt = `${cat.name} - ${cat.description}`

    let isFavourite = document.createElement("div")
    isFavourite.className = "favourite fa fa-heart fa-3x"


    let divRating = document.createElement("div")
    divRating.innerHTML = `<b>Рейтинг:</b> ${cat.rate}/10`
    divRating.className = "rating"
 

    let divCatInfo = document.createElement("div")
    let catAge = document.createElement("p")
    catAge.innerHTML = `<b>Возраст (лет):</b> ${cat.age}`
    let catDesc = document.createElement("p")
    catDesc.innerHTML = cat.description

    img.width = "300"


    document.body.appendChild(divCatBlock)
    divCatBlock.appendChild(catName)
    divCatBlock.appendChild(divCatImg)
    divCatImg.appendChild(img)
    if (cat.favourite){
        divCatBlock.classList.add('favourite');
    }
    divCatBlock.appendChild(divRating)
    divCatBlock.appendChild(divCatInfo)
    divCatInfo.appendChild(catAge)
    divCatInfo.appendChild(catDesc)


}



