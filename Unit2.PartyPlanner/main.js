const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/events';

const mainEL = document.querySelector('main');
const formEL = document.querySelector('form');
const partyName = document.querySelector('#partyName');
const dateControl = document.querySelector('#Date');
const pLocation = document.querySelector('#Location');
const description = document.querySelector('#Description');

async function getParty() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(err);
    }
}

function render(parties) {
    const template = parties.map(party => {
        const time = party.date.split(`T`);
        console.log(time);
        return (
        `<section>
            <h2>${party.name}</h2>
            <p>${time[0]}</p>
            <p>${time[1]}</p>
            <p>${party.location}</p>
            <p>${party.description}</p>
            <button data-id="${party.id}">Delete Party</button>
        </section>`
        )
    }).join('');
    mainEL.innerHTML = template;
}

async function partyApp(){
    const parties = await getParty();
    render(parties);
}

partyApp();

formEL.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: partyName.value,
                date: new Date(),
                location: pLocation.value,
                description: description.value, 
            })
            
        });

        console.log(partyName.value)
        console.log(dateControl.value)
        console.log(pLocation.value)
        console.log(description.value)
        partyName.value = '';
        dateControl.value = '';
        location.value = '';
        description.value = '';
        
        partyApp();
    } catch (err) {
        console.error(err);
    }
});

mainEL.addEventListener('click', async (event) => {
    if(event.target.matches('button')) {
        const id = event.target.dataset.id;
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        partyApp();
    }
});