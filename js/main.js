const defaultCatalog = [
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


//---------Initialize variables

const grid = document.getElementById('Grid')
const descBox = document.getElementById('descriptionBox')
const creator = "xXArlyetaXx"
const searchInput = document.getElementById('searchInput')
const successIcon = "images/checkmark-circle-outline.svg"
const failIcon = "images/close-circle-outline.svg"
const defaultDescriptionBox = `
                    <p class="title has-text-white has-text-centered">Arlet's Monopoly</p>
                    <figure class="image m-5"><img src="images/community.webp" alt="Placeholder image" /></figure>
                    <p class="subtitle has-text-white has-text-centered">Just wanted my skin on Roblox, now I do this for a living</p>
                    `
let localCatalog = localStorage.getItem("savedCatalog")

//--------------------------------------------------------------------------------CREATE

//---Save Catalog
document.getElementById(`saveCatalog`).addEventListener('click', () => {
    try {
        localStorage.setItem("savedCatalog", JSON.stringify(catalog));
        descBox.innerHTML = 
        `
            <div class="my-auto">
                <div class="card-image invert is-flex is-justify-content-center is-align-items-center" style="min-height: 100%;">
                    <figure class="image is-flex is-align-items-center" style="width: 50%;"><img src=${successIcon} alt="Placeholder image" style="width: 50%;"><img src=images/save-outline.svg alt="Placeholder image" style="width: 45%;"></figure>
                    <p class="title has-text-black ml-5">Saved to local storage</p>
                </div>
            </div>
        `;
        setTimeout(() => {
            initializeDescriptionBox();
        }, 1000);
    } catch (error) {
        console.log("Tried to save but something weird happened or sum, idkkkk...", error)
        descBox.innerHTML = 
        `
            <div class="my-auto">
                <div class="card-image invert is-flex is-justify-content-center is-align-items-center" style="min-height: 100%;">
                    <figure class="image is-flex is-align-items-center" style="width: 50%;"><img src=${failIcon} alt="Placeholder image" style="width: 50%;"><img src=images/save-outline.svg alt="Placeholder image" style="width: 45%;"></figure>
                    <p class="title has-text-black ml-5">Couldn't save to local storage</p>
                </div>
            </div>
        `;
        setTimeout(() => {
            initializeDescriptionBox();
        }, 1000);
    }
});

function initializeGrid(){
    //--Retrieve and create grid
    if (localCatalog) {
        try {
            catalog = JSON.parse(localCatalog);
            localCatalog = catalog;
        } catch (error) {
            console.log("During initialization, tried to load saved catalog but it had corrupted JSON, loading default catalog and deleting corrupted files...", error)
            localStorage.removeItem("savedCatalog")
            catalog = defaultCatalog.map(item => ({ ...item }));
            localCatalog = catalog;
        }
    }
    else {
        catalog = defaultCatalog.map(item => ({ ...item }));
        localCatalog = catalog;
    }
    populateGrid(catalog);
};

function initializeDescriptionBox(){
    //--Retrieve and create description box
    descBox.innerHTML = defaultDescriptionBox;
}

//----Create char card

function createCard(item){
    
    grid.insertAdjacentHTML('beforeend',
        `
            <div class="card cell has-background-primary-10 mb-0" id="ID-${item.id}">
                <div class="card-image">
                    <figure class="image">
                        <img src="${item.imageLink}" alt="${item.name}" onerror="this.src='images/imagenotfound.webp';"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media mb-3">
                        <div class="media-left">
                            <figure class="image is-64x64"><img src="images/pfp.webp" alt="Placeholder image" onerror="this.src='images/imagenotfound.webp';"/> </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">${item.name}</p>
                            <p class="subtitle is-6">Type: ${item.type}<br>Category: ${item.genre}</p>
                        </div>            
                    </div>
                    <div>
                        <p class="has-text-weight-bold has-text-white ">Created by: <a href="https://www.roblox.com/users/3719978880/profile" style="text-decoration: underline;">@${creator}</a></p>
                    </div> 
                </div>
                <footer class="card-footer is-size-5 p-4">
                    <a class="card-footer-item icon my-auto" href="${item.buyLink}"><figure class="image invert pr-4"><img src="images/arrow-up-left-box-outline.svg" alt="Placeholder image" style="width: 30px;"></figure>Buy</a>
                    <a class="card-footer-item icon my-auto" id="editItem${item.id}"><figure class="image invert pr-4"><img src="images/pen-to-square-regular-full.svg" alt="Placeholder image" style="width: 32px;"></figure>Edit</a>
                    <a class="card-footer-item icon my-auto" id="DescriptionCaller${item.id}"><figure class="image invert pr-4"><img src="images/ellipsis-horizontal-circle-outline.svg" alt="Placeholder image" style="width: 32px;"></figure>Read</a>
                </footer>
            </div>
        `
    );
    document.getElementById(`DescriptionCaller${item.id}`).addEventListener('click', () => {
    descBox.innerHTML = 
    `
        <h1 class="title has-text-centered ">${item.name}</h1>
        <div class="is-flex is-justify-content-center">
            <figure class="image" style="width: 50%; height=50%">
                <img src="${item.imageLink}" alt="${item.name}" onerror="this.src='images/imagenotfound.webp';"/>
            </figure>
        </div>
        <div class="is-flex is-flex-direction-column is-justify-content-center" style="height: 240px; max-height: 240px;">
            <p class="subtitle has-text-white">Description</p>
            <p style="overflow-y: auto;" id="descriptionText"></p>
        </div>
    `;
    document.getElementById("descriptionText").textContent = item.description;
    });
}

function populateGrid(itemArray){
    grid.innerHTML=``
    itemArray.forEach(item => {createCard(item);});
    grid.insertAdjacentHTML('beforeend',
        `
            <div class="card cell has-background-primary-10 p-auto" style="min-height: 606px;">
                <div class="card-image is-flex is-justify-content-center is-align-items-center" style="min-height: 100%;">
                    <a id="addToCatalog"><figure class="image invert"><img src="images/add-circle-outline.svg" alt="Placeholder image" style="width: 100px;"></figure></a>
                </div>
            </div>
        `
    );
}

//--------------------------------------------------------READ

//---Load Catalog
document.getElementById(`loadCatalog`).addEventListener('click', () => {
    const savedCatalog = localStorage.getItem("savedCatalog");
    if (!savedCatalog) return (
        console.log("No saved data found"),
        descBox.innerHTML = 
        `
            <div class="my-auto">
                <div class="card-image invert is-flex is-justify-content-center is-align-items-center" style="min-height: 100%;">
                    <figure class="image is-flex is-align-items-center" style="width: 50%;"><img src=${failIcon} alt="Placeholder image" style="width: 50%;"><img src=images/cloud-upload-outline.svg alt="Placeholder image" style="width: 45%;"></figure>
                    <p class="title has-text-black ml-5">No local storage found</p>
                </div>
            </div>
        `);

    try {
        console.log("Loaded catalog data")
        catalog = JSON.parse(savedCatalog);
        localCatalog = catalog;
        const searchTerm = searchInput.value.toLowerCase();
        grid.innerHTML = "";
        populateGrid(catalog.filter(item => item.name.toLowerCase().includes(searchTerm) || item.genre.toLowerCase().includes(searchTerm) || item.type.toLowerCase().includes(searchTerm) ));
        descBox.innerHTML = 
        `
            <div class="my-auto">
                <div class="card-image invert is-flex is-justify-content-center is-align-items-center" style="min-height: 100%;">
                    <figure class="image is-flex is-align-items-center" style="width: 50%;"><img src=${successIcon} alt="Placeholder image" style="width: 50%;"><img src=images/cloud-upload-outline.svg alt="Placeholder image" style="width: 50%;"></figure>
                    <p class="title has-text-black ml-5">Loaded from local storage</p>
                </div>
            </div>
        `;
        setTimeout(() => {
            initializeDescriptionBox();
        }, 1000);
    } catch (error) {
        console.log("Tried to load saved catalog but it had a corrupted JSON, loading default catalog and deleting corrupted files...", error)
        descBox.innerHTML = 
        `
            <div class="my-auto">
                <div class="card-image invert is-flex is-justify-content-center is-align-items-center" style="min-height: 100%;">
                    <figure class="image is-flex is-align-items-center" style="width: 50%; gap: 0.5rem;"><img src=${failIcon} alt="Placeholder image" style="width: 50%;"><img src=images/cloud-upload-outline.svg alt="Placeholder image" style="width: 45%;"></figure>
                    <p class="title has-text-black is-size-4 ml-5">Couldn't load from local storage</p>
                </div>
            </div>
        `;
        setTimeout(() => {
            initializeDescriptionBox();
        }, 1000);
        localStorage.removeItem("savedCatalog")
        catalog = defaultCatalog
    }
});

//-----Search Box
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const items = (localCatalog || catalog).filter(item =>
        item.name.toLowerCase().includes(searchTerm) || item.genre.toLowerCase().includes(searchTerm) || item.type.toLowerCase().includes(searchTerm)
    );

    grid.innerHTML = "";
    populateGrid(items);
});

//--------------------------------------------------------------------------UPDATE

//----Listening for clicks
grid.addEventListener('click', (event) => {
    //-------------------------------------AddItems
    if (event.target.closest('#addToCatalog')) {
        const items = localCatalog || catalog;
        const nextId = items.reduce((maxId, item) => Math.max(maxId, Number(item.id) || 0), -1) + 1;

        descBox.innerHTML = `
            <h1 class="title has-text-centered">Add a item</h1>
            <div class="is-rounded" style="max-height: 90%; overflow-y: auto;">
                <input class="input mb-2" type="text" id="newId" value="${nextId}" readonly/>
                <input class="input mb-2" type="text" id="newName" placeholder="Name"/>
                <input class="input mb-2" type="text" id="newGenre" placeholder="Genre"/>
                <input class="input mb-2" type="text" id="newType" placeholder="Type"/>
                <input class="input mb-2" type="text" id="newBuyLink" placeholder="Buy Link"/>
                <input class="input mb-2" type="text" id="newImageLink" placeholder="Image Link"/>
                <input class="input mb-2 textarea" type="text" id="newDescription" placeholder="Description"/>
                <button class="button" type="button" id="submitForm">Add item</button>
                <button class="button" type="button" id="cancelForm">Cancel</button>
            </div>
        `;
        descBox.querySelector('#submitForm').addEventListener('click', () => {
            const items = localCatalog || catalog;
            const newItem = {
                id: descBox.querySelector('#newId').value,
                name: descBox.querySelector('#newName').value.trim(),
                genre: descBox.querySelector('#newGenre').value.trim(),
                type: descBox.querySelector('#newType').value.trim(),
                buyLink: descBox.querySelector('#newBuyLink').value.trim(),
                imageLink: descBox.querySelector('#newImageLink').value.trim(),
                description: descBox.querySelector('#newDescription').value.trim()
            };

            descBox.querySelectorAll('.is-danger').forEach(element => {
                element.classList.remove('is-danger');
            });

            if (!newItem.name || !newItem.genre || !newItem.type) {
                if (!newItem.name) {
                    descBox.querySelector('#newName').classList.add("is-danger");
                }
                if (!newItem.genre) {
                    descBox.querySelector('#newGenre').classList.add("is-danger");
                }
                if (!newItem.type) {
                    descBox.querySelector('#newType').classList.add("is-danger");
                }
                return;
            }

            items.push(newItem);
            catalog = items;
            localCatalog = items;
            grid.innerHTML = '';
            populateGrid(catalog);
            initializeDescriptionBox();
        });
        descBox.querySelector('#cancelForm').addEventListener('click', () => {
        initializeDescriptionBox();
        return;
        });
    }

    //-------------------------------------EditItems
    const editButton = event.target.closest('[id^="editItem"]');
    if (editButton) {
        const items = localCatalog || catalog;
        const item = items.find(item => `editItem${item.id}` === editButton.id);

        descBox.innerHTML = `
            <h1 class="title has-text-centered">Edit a item</h1>
            <div class="is-rounded" style="max-height: 90%; overflow-y: auto;">
                <input class="input mb-2" type="text" id="editId" readonly/>
                <input class="input mb-2" type="text" id="editName" placeholder="Name"/>
                <input class="input mb-2" type="text" id="editGenre" placeholder="Genre"/>
                <input class="input mb-2" type="text" id="editType" placeholder="Type"/>
                <input class="input mb-2" type="text" id="editBuyLink" placeholder="Buy Link"/>
                <input class="input mb-2" type="text" id="editImageLink" placeholder="Image Link"/>
                <textarea class="textarea mb-2" id="editDescription" placeholder="Description"></textarea>
                <button class="button" type="button" id="submitEdit">Save changes</button>
                <button class="button" type="button" id="cancelEdit">Cancel</button>
                <button class="button is-danger ml-auto" type="button" id="delete">Delete</button>
            </div>
        `;

        descBox.querySelector('#editId').value = item.id;
        descBox.querySelector('#editName').value = item.name;
        descBox.querySelector('#editGenre').value = item.genre;
        descBox.querySelector('#editType').value = item.type;
        descBox.querySelector('#editBuyLink').value = item.buyLink;
        descBox.querySelector('#editImageLink').value = item.imageLink;
        descBox.querySelector('#editDescription').value = item.description;

        descBox.querySelector('#submitEdit').addEventListener('click', () => {
            const updatedItem = {
                name: descBox.querySelector('#editName').value.trim(),
                genre: descBox.querySelector('#editGenre').value.trim(),
                type: descBox.querySelector('#editType').value.trim(),
                buyLink: descBox.querySelector('#editBuyLink').value.trim(),
                imageLink: descBox.querySelector('#editImageLink').value.trim(),
                description: descBox.querySelector('#editDescription').value.trim()
            };

            descBox.querySelectorAll('.is-danger').forEach(element => element.classList.remove('is-danger'));
            if (!updatedItem.name || !updatedItem.genre || !updatedItem.type) {
                if (!updatedItem.name) descBox.querySelector('#editName').classList.add('is-danger');
                if (!updatedItem.genre) descBox.querySelector('#editGenre').classList.add('is-danger');
                if (!updatedItem.type) descBox.querySelector('#editType').classList.add('is-danger');
                return;
            }

            Object.assign(item, updatedItem);
            catalog = items;
            localCatalog = items;
            const searchTerm = searchInput.value.toLowerCase();
            grid.innerHTML = '';
            populateGrid(items.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                item.genre.toLowerCase().includes(searchTerm) ||
                item.type.toLowerCase().includes(searchTerm)
            ));
            initializeDescriptionBox();
        });
        descBox.querySelector('#cancelEdit').addEventListener('click', () => {
            initializeDescriptionBox();
        });
    }
    
//-----------------------------------------------------------------------------DELETE
    //-------------------------------------DeleteItems
    descBox.querySelector('#delete').addEventListener('click', () => {
        const items = localCatalog || catalog;
        const itemId = descBox.querySelector('#editId').value;
        const itemIndex = items.findIndex(item => item.id == itemId);

        if(!confirm(`Are you sure you want to delete ${items[itemIndex].name}?`)) {
            return;
        }
        catalog = items.filter(item => item.id != itemId);
        localCatalog = catalog;
        const searchTerm = searchInput.value.toLowerCase();
        grid.innerHTML = '';
        populateGrid(catalog.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.genre.toLowerCase().includes(searchTerm) ||
            item.type.toLowerCase().includes(searchTerm)
        ));
        initializeDescriptionBox();
    })
});


//---Reset Catalog/Delete local storage
document.getElementById(`resetCatalog`).addEventListener('click', () => {
    catalog = defaultCatalog.map(item => ({ ...item }));
    localCatalog = catalog;
    localStorage.removeItem("savedCatalog");

    const searchTerm = searchInput.value.toLowerCase();
    grid.innerHTML = "";
    populateGrid(catalog.filter(item => item.name.toLowerCase().includes(searchTerm) || item.genre.toLowerCase().includes(searchTerm) || item.type.toLowerCase().includes(searchTerm) ));
    descBox.innerHTML = 
    `
        <div class="my-auto">
            <div class="card-image invert is-flex is-justify-content-center is-align-items-center" style="min-height: 100%;">
                <figure class="image is-flex is-align-items-center" style="width: 50%; gap: 0.5rem;"><img src=${successIcon} alt="Placeholder image" style="width: 50%;"><img src=images/refresh-outline.svg alt="Placeholder image" style="width: 45%;"></figure>
                <p class="title has-text-black is-size-3 ml-5">Local storage deleted</p>
            </div>
        </div>
    `;
    setTimeout(() => {
        initializeDescriptionBox();
    }, 1000);
});

//--------------Initialize functions

initializeGrid();
initializeDescriptionBox();