/* Opgave 1*/
// din kode her
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");
let storyData;

fetch(myDataFileUrl)
        .then((response) => {
        
        return response.json();
        
        })
        .then((data) => {
        storyData = data;
        console.log(storyData)
        myStoryElement.innerHTML = storyData.DK.headline + "<br><br>" + storyData.DK.text + "<br><br>" + `<img src="../../opgavefiler/img/felix.jpg" alt="kodekatten Felix"></img>`;
        })
        .catch((error) => {
        console.error(error);
        });

/* Opgave 2 - skriv videre på koden her: */

const myStoryElement2 = document.getElementById("theStory2");
const myDropdown = document.createElement("select");

const langArr = ["DK", "SE", "FI", "UK"];
langArr.forEach((lang) => {
    const option = document.createElement('option');
    option.value = lang;
    option.text = lang;

    myDropdown.append(option)
})
myStoryElement2.parentElement.append(myDropdown)

myDropdown.addEventListener("change", () => {

    const lang = myDropdown.value;
    fetch(myDataFileUrl)
        .then((response) => {
        
        return response.json();
        
        })
        .then((data) => {
        storyData = data;
        console.log(storyData)
        myStoryElement2.innerHTML = storyData[lang].headline + "<br><br>" + storyData[lang].text + "<br><br>" + `<img src="../../opgavefiler/img/felix.jpg" alt="kodekatten Felix"></img>`;
        })
        .catch((error) => {
        console.error(error);
        });
})

/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

const getUsers = async () => { 

    try {

        const response = await fetch(userURI);
        const data = await response.json()
        console.log("userData", data)

        data.forEach((user) => {

            const {name, address} = user;
            
            const person = `<h2>${name}</h2>
                <p>Adresse: ${address.street}  ${address.suite}</br>
                   post nummer: ${address.zipcode}</br>
                   by: ${address.city}</p>`;

            myUserlistElement.innerHTML += person;
            
        })

        
    } catch(err) {
        console.log(err.message)
    }
        
}

getUsers();

/* Opgave 4*/
// din kode her
const myDog = document.getElementById("theDog");
const myDogUrl = "https://dog.ceo/api/breeds/image/random";

fetch(myDogUrl)
    .then(response => response.json())
    .then(data => {
        myDog.innerHTML = `<img src="${data.message}" alt="en hund">`;
    })
    .catch(error => {
        myDog.innerText = "Kunne ikke hente hundebillede.";
        console.error(error);
    });