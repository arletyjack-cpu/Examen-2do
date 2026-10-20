let catalog = [
    {
        id: 1,
        name: "Silly Low Poly Kitty",
        genre: "Silly",
        type: "Bundle",
        buyLink: 'https://www.roblox.com/bundles/461612',
        description: 'My first character, actually made it because I wanted to have a little of me "present" when playing Roblox with my friends, never thought I would be doing this long term, and get as much joy out of it as I have'
    },
    {
        id: 2,
        name: "Silly Low Poly Pilot",
        genre: "Silly",
        type: "Bundle",
        buyLink: '',
        description: 'When the Silly Cat became my mark, decided to play around with it a little bit more, and came up with this. Initially wanted to test the limits of Roblox character complexity, and found it very quickly, still managed to give it a bunch of little details that I really liked'
    },
    {
        id: 3,
        name: "Silly Worm",
        genre: "Silly",
        type: "Bundle",
        buyLink: '',
        description: 'One day was tired of trying to come up with interesting ideas, and decided to just make a worm, not even a snake, still it became one of my top sellers. Sometimes simplicity is good enough'
    },
    {
        id: 4,
        name: "Not Deer",
        genre: "Scawwy",
        type: "Bundle",
        buyLink: '',
        description: 'Wanted to make a fresno nightcrawler, but Roblox had just banned all bundles that had missing or hidden limbs, so instead just made another funny cryptid'
    },
    {
        id: 5,
        name: "Shadow Man",
        genre: "Scawwy",
        type: "Bundle",
        buyLink: '',
        description: 'After a long time of not experiencing anything "paranormal" I finally saw one of those Shadow Men, and thought, "Thats funny, imma make a bundle out of it"'
    },
    {
        id: 6,
        name: "Scary Cat Mask",
        genre: "Scawwy",
        type: "Accessory",
        buyLink: '',
        description: 'Optical illusions were gaining a lot of of traction, so decided to quickly get in on it too. Took my classic Low Poly Kitty head, and made it "Scawwy"'
    },
    {
        id: 7,
        name: "Sheet Ghost Costume",
        genre: "Scawwy",
        type: "Clothing",
        buyLink: '',
        description: 'Back in last halloween when I started to get on layered clothing, decided to make a little something for the holidays, simple, attractive and silly'
    },
    {
        id: 8,
        name: "Kemono Furry Fursuit",
        genre: "Furry",
        type: "Bundle",
        buyLink: '',
        description: "Furries didn't really have a lot of options, and decided to give them a little variation other than their typical creators, this is the latest iteration of my furry bundles"
    },
    {
        id: 9,
        name: "Furry Puppy Head",
        genre: "Furry",
        type: "Head",
        buyLink: '',
        description: "Of course, if we are talking fursuit variation and personalization, I had to give them head options as well. Based on my friends puppy"
    },
    {
        id: 10,
        name: "Furry Wolf Head",
        genre: "Furry",
        type: "Head",
        buyLink: '',
        description: "Of course, if we are talking fursuit variation and personalization, I had to give them head options as well. Actually based on a husky"
    },
]

const character = '<div class="cell card" id="CharContainer"> <div class="card-image"> <figure class="image is-4by3"> <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="Placeholder image"/> </figure> </div> <div class="card-content"> <div class="media-content"> <p class="title is-4" id="Name"></p> <p class="subtitle is-6" id="Type"></p></div></div></div> </div>';

const grid = document.getElementById('Grid')

grid.insertAdjacentHTML('beforeend', character);