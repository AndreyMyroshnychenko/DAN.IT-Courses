function renderStarWars(filmInfo){
    filmInfo.map(item=>{
        let {episodeId, openingCrawl, name}=item;
        
        let filmName=document.createElement("h2");
        filmName.innerText=name;
        filmName.insertAdjacentHTML("afterbegin", "Episode`s name - ")

        let list=document.querySelector("#list");

        let id=document.createElement("h3");
        id.innerText=episodeId;
        id.insertAdjacentHTML("beforeend", " - Number of episode")

        let openingFilm=document.createElement("p");
        openingFilm.innerText=openingCrawl;

        list.append(id);
        list.append(filmName);
        list.append(openingFilm);

        let allCharacters=item.characters;
        
        allCharacters.forEach(character=>{
            fetch(character).then((response)=>response.json()).then((data)=>{

                let filmActors=document.createElement("p");
                filmActors.innerText=data.name;
                list.append(filmActors);
            })
        })

    })
}

fetch("https://ajax.test-danit.com/api/swapi/films")
.then((response)=>response.json())
.then((data)=>renderStarWars(data));




