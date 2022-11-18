// arrays (suspectsArray, weaponsArray, roomsArray)

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        entrepreneurAge: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green'
    },
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist ',
        entrepreneurAge: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white'
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        entrepreneurAge: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple'
    },
    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actress',
        entrepreneurAge: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg',
        color: 'red'
    },
    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        entrepreneurAge: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg ',
        color: 'blue'
    },
    {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        entrepreneurAge: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow'
    },
]

const weaponsArray = [
    {
        waffe: 'rope',
        weight: 10,
    },
    {
        waffe: 'knife',
        weight: 8
    },
    {
        waffe: 'candlestick',
        weight: 2
    },
        {
        waffe: 'dumbbell',
        weight: 30
    },
        {
        waffe: 'poison',
        weight: 2
    },
        {
        waffe: 'axe',
        weight: 15
    },
    {
        waffe: 'bat',
        weight: 13
    },
    {
        waffe: 'trophy',
        weight: 25
    },
    {
        waffe: 'pistol',
        weight: 20
    },
]

const roomsArray = [
    {
        room: 'Dining Room'
    },
    {
        room: 'Conservatory'
    },
    {
        room: 'Kitchen'
    },
    {
        room: 'Study'
    },
    {
        room: 'Library'
    },
    {
        room: 'Billiard Room'
    },
    {
        room: 'Lounge'
    },
    {
        room: 'Hall'
    },
    {
        room: 'Spa'
    },
    {
        room: 'Living Room'
    },
    {
        room: 'Observatory'
    },
    {
        room: 'Theater'
    },
    {
        room: 'Guest House'
    },
    {
        room: 'Patio'
    },
]

// wähle ein zufälliges element aus einem kartenstapel
function selectRandom(element) {
    const randomElement = element[Math.floor(Math.random()* element.length)];
    // console.log(randomElement);
    return randomElement;
};

// erstelle das geheimnis
function pickMystery() {
    const neueKarte = [];
    const verdaechtiger = selectRandom(suspectsArray);
    const waffe = selectRandom(weaponsArray);
    const raum = selectRandom(roomsArray);

    neueKarte.push(verdaechtiger, waffe, raum);
    return neueKarte;
};


// enthülle das geheimniss
function revealMystery() {
    const img = document.getElementById('pic');
    console.log(img);
    const outputName = document.getElementById('outputName');
    const outputNameAndAge = document.getElementById('outputNameAndAge');
    const profession = document.getElementById('profession');
    const description = document.getElementById('description');
    const weapon = document.getElementById('weapon');
    const room = document.getElementById('room');

    let createPlayCard = pickMystery();

    img.src = `${createPlayCard[0].image}`;

    outputName.innerHTML =`<span>${createPlayCard[0].firstName} ${createPlayCard[0].lastName}</span> killed Mr. Boddy using the ${createPlayCard[1].waffe} in the ${createPlayCard[2].room}`;

    document.querySelector("span").style.color = createPlayCard[0].color;

    outputNameAndAge.textContent = `${createPlayCard[0].firstName} ${createPlayCard[0].lastName} (${createPlayCard[0].entrepreneurAge})`;

    profession.textContent = `${createPlayCard[0].occupation}`;

    description.textContent = `${createPlayCard[0].description}`;

    weapon.textContent = `${createPlayCard[1].waffe}`;

    room.textContent = `${createPlayCard[2].room}`;

}

