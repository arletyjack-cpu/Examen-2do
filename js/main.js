let catalog = [
    {
        id: 0,
        name: "Low Poly Chibi Cat",
        genre: "Silly",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/242736117898472/',
        imageLink:"images/chibicat.webp",
        description: 'My most successful character so far, and one of my personal top 3. Made it in one class when I got quite bored, scrolled trought instagram and at some point saw a poligonal drawing of a cat, and wanted to do one of my one, but 3D.'
    },
    {
        id: 1,
        name: "Silly Low Poly Kitty",
        genre: "Silly",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/461612',
        imageLink:"images/lowpolykitty.webp",
        description: 'My first character, actually made it because I wanted to have a little of me "present" when playing Roblox with my friends, never thought I would be doing this long term, and get as much joy out of it as I have.'
    },
    {
        id: 2,
        name: "Neco Arcsin",
        genre: "Silly",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/71568023445998/',
        imageLink:"images/necoArcsin.webp",
        description: "Roblox is one of the best games when it comes to personalization, and growing up, I always liked the creature and whatever OCs people made out of it, and decided to make it easier and better looking (competition is looking rough) for all people."
    },
    {
        id: 3,
        name: "Legged Silly Worm",
        genre: "Silly",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/133601664288662/',
        imageLink:"images/worm.webp",
        description: 'One day was tired of trying to come up with interesting ideas, and decided to just make a worm, not even a snake, still it became one of my top sellers. At one point was forced to add limbs, but it was a straight up sausage. Sometimes simplicity is good enough.'
    },
    {
        id: 4,
        name: "Not Deer",
        genre: "Scawwy",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/13545634210807/',
        imageLink:"images/notdeer.webp",
        description: 'Wanted to make a fresno nightcrawler, but Roblox had just banned all bundles that had missing or hidden limbs, so instead just made another funny cryptid.'
    },
    {
        id: 5,
        name: "Shadow Man",
        genre: "Scawwy",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/228547627775657/',
        imageLink:"images/shadowman.webp",
        description: 'After a long time of not experiencing anything "paranormal" I finally saw one of those Shadow Men, and thought, "Thats funny, imma make a bundle out of it". Had to sensor the paranormal out of it, now it just looks weird.'
    },
    {
        id: 6,
        name: "Scary Cat Mask",
        genre: "Scawwy",
        type: "Accessory",
        buyLink: 'https://www.roblox.com/bundles/210356380382098/',
        imageLink:"images/scarycat.webp",
        description: 'Optical illusions were gaining a lot of of traction, so decided to quickly get in on it too. Took my classic Low Poly Kitty head, and made it "Scawwy".'
    },
    {
        id: 7,
        name: "Sheet Ghost Costume",
        genre: "Scawwy",
        type: "Clothing",
        buyLink: 'https://www.roblox.com/catalog/107086871629651/',
        imageLink:"images/ghost.webp",
        description: 'Back in last halloween when I started to get on layered clothing, decided to make a little something for the holidays, simple, attractive and silly.'
    },
    {
        id: 8,
        name: "Kemono Furry Fursuit",
        genre: "Furry",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/265301923798914/',
        imageLink:"images/furryfursuit.webp",
        description: "Furries didn't really have a lot of options, and decided to give them a little variation other than their typical creators, this is the latest iteration of my furry bundles."
    },
    {
        id: 9,
        name: "Furry Puppy Head",
        genre: "Furry",
        type: "Head",
        buyLink: 'https://www.roblox.com/bundles/1597101/',
        imageLink:"images/furrypuppy.webp",
        description: "Of course, if we are talking fursuit variation and personalization, I had to give them head options as well. Based on my friends puppy."
    },
    {
        id: 10,
        name: "Furry Wolf Head",
        genre: "Furry",
        type: "Head",
        buyLink: 'https://www.roblox.com/bundles/1605102/',
        imageLink:"images/furrywolf.webp",
        description: "Of course, if we are talking fursuit variation and personalization, I had to give them head options as well. Actually based on a husky."
    },
    {
        id: 11,
        name: "Silly Low Poly Pilot",
        genre: "Silly",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/591696/',
        imageLink:"images/lowpolypilot.webp",
        description: 'When the Silly Cat became my mark, decided to play around with it a little bit more, and came up with this. Initially wanted to test the limits of Roblox character complexity, and found it very quickly, still managed to give it a bunch of little details that I really liked.'
    },
    {
        id: 12,
        name: "Drawn Stickman",
        genre: "Doodle",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/133267929753901/',
        imageLink:"images/drawnstickman.webp",
        description: 'I love doing doodles, thats where the low poly cat came from, but I just had to go back and take notes from the basics, delivered this dude.'
    },
    {
        id: 13,
        name: "Slug",
        genre: "Doodle",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/185164498456328/',
        imageLink:"images/slug.webp",
        description: "Drew this guy on whatsapp's image editor, I was bored... at a wedding, and totally sober of course. Love this goofball, might have to give her limbs at some point, yes she's a gal."
    },
]


//---------Initialize

const grid = document.getElementById('Grid')
const creator = "xXArlyetaXx"
const myInput = document.getElementById('searchInput');

//--Retrieve and create grid
let localCatalog = localStorage.getItem("savedCatalog");

if (localCatalog) {
    localCatalog = JSON.parse(localCatalog);
    populateGrid(localCatalog)
}
else {
    populateGrid(catalog)
}

addAddButtonToAddStuff()


//--------------------------------------------------------CREATE

//----Create char card

function createCard(character){
    
    grid.insertAdjacentHTML('beforeend',
        `
            <div class="card cell has-background-primary-10 mb-0" id="ID-${character.id}">
                <div class="card-image">
                    <figure class="image">
                        <img src="${character.imageLink}" alt="${character.name}" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media mb-3">
                        <div class="media-left">
                            <figure class="image is-64x64"><img src="images/pfp.webp" alt="Placeholder image" /> </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">${character.name}</p>
                            <p class="subtitle is-6">Type: ${character.type}<br>Category: ${character.genre}</p>
                        </div>            
                    </div>
                    <div>
                        <p class="has-text-weight-bold has-text-white ">Created by: <a href="https://www.roblox.com/users/3719978880/profile" style="text-decoration: underline;">@${creator}</a></p>
                    </div> 
                </div>
                <footer class="card-footer p-4">
                    <a class="card-footer-item icon my-auto" href="${character.buyLink}"><figure class="image invert"><img src="images/arrow-up-left-box-outline.svg" alt="Placeholder image" style="width: 30px;"></figure></a>
                    <a class="card-footer-item icon my-auto" href="${character.buyLink}"><figure class="image invert"><img src="images/pen-to-square-regular-full.svg" alt="Placeholder image" style="width: 32px;"></figure></a>
                    <a class="card-footer-item icon my-auto" id="DescriptionCaller${character.id}"><figure class="image invert"><img src="images/ellipsis-horizontal-circle-outline.svg" alt="Placeholder image" style="width: 32px;"></figure></a>
                </footer>
            </div>
        `
    );
    document.getElementById(`DescriptionCaller${character.id}`).addEventListener('click', () => {
    document.getElementById("descriptionBox").innerHTML = 
    `
        <h1 class="title has-text-centered ">${character.name}</h1>
        <div class="is-flex is-justify-content-center">
            <figure class="image" style="width: 50%; height=50%">
                <img src="${character.imageLink}" alt="${character.name}" />
            </figure>
        </div>
        <div style="max-height: 200px; overflow-y: auto;">
            <p class="subtitle">Description</p>
            <p id="descriptionText"></p>
        </div>
    `;
    document.getElementById("descriptionText").textContent = character.description;
    });
}


function populateGrid(characterArray){
    characterArray.forEach(character => {createCard(character);});
    grid.insertAdjacentHTML('beforeend',
        `
            <div class="card cell has-background-primary-10 p-auto">
                <div class="card-image is-flex is-justify-content-center is-align-items-center" style="min-height: 100%;">
                    <a id="addToCatalog"><figure class="image invert"><img src="images/add-circle-outline.svg" alt="Placeholder image" style="width: 100px;"></figure></a>
                </div>
            </div>
        `
    );
}

//----AddItems
function addAddButtonToAddStuff() {
    document.getElementById(`addToCatalog`).addEventListener('click', () => {
        const characters = localCatalog || catalog;
        const nextId = characters.reduce((maxId, character) => Math.max(maxId, Number(character.id) || 0), -1) + 1;

        document.getElementById("descriptionBox").innerHTML = `
            <h1 class="title has-text-centered">Add a character</h1>
            <form id="catalogForm">
                <div class="field"><label class="label" for="newId">ID</label><input class="input" id="newId" name="id" type="number" value="${nextId}" readonly></div>
                <div class="field"><label class="label" for="newName">Name</label><input class="input" id="newName" name="name" type="text" required></div>
                <div class="field"><label class="label" for="newGenre">Genre</label><input class="input" id="newGenre" name="genre" type="text" required></div>
                <div class="field"><label class="label" for="newType">Type</label><input class="input" id="newType" name="type" type="text" required></div>
                <div class="field"><label class="label" for="newBuyLink">Buy link</label><input class="input" id="newBuyLink" name="buyLink" type="url" required></div>
                <div class="field"><label class="label" for="newImageLink">Image link</label><input class="input" id="newImageLink" name="imageLink" type="text" required></div>
                <div class="field"><label class="label" for="newDescription">Description</label><textarea class="textarea" id="newDescription" name="description" required></textarea></div>
                <button class="button" type="submit">Add character</button>
                <button class="button" id="cancelCatalogForm" type="button">Cancel</button>
            </form>
        `;

        document.getElementById("catalogForm").addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const newCharacter = {
                id: Number(formData.get("id")),
                name: formData.get("name").trim(),
                genre: formData.get("genre").trim(),
                type: formData.get("type").trim(),
                buyLink: formData.get("buyLink").trim(),
                imageLink: formData.get("imageLink").trim(),
                description: formData.get("description").trim()
            };

            characters.push(newCharacter);
            localCatalog = characters;
            localStorage.setItem("savedCatalog", JSON.stringify(localCatalog));

            const searchTerm = myInput.value.toLowerCase();
            grid.innerHTML = "";
            populateGrid(characters.filter(character =>
                character.name.toLowerCase().includes(searchTerm) ||
                character.genre.toLowerCase().includes(searchTerm) ||
                character.type.toLowerCase().includes(searchTerm)
            ));
            document.getElementById("descriptionBox").textContent = "Character added to the catalog.";
        });

        document.getElementById("cancelCatalogForm").addEventListener("click", () => {
            document.getElementById("descriptionBox").innerHTML = "";
        });
    });
}

//--------------------------------------------------------READ

//-----Search Box
myInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const characters = (localCatalog || catalog).filter(character =>
        character.name.toLowerCase().includes(searchTerm) || character.genre.toLowerCase().includes(searchTerm) || character.type.toLowerCase().includes(searchTerm)
    );

    grid.innerHTML = "";
    populateGrid(characters);
});
