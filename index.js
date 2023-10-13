let pencilcases = [
    
];

let filteredPencilcases = [...pencilcases];
let lastId = 0; 

function updatePencilcaseDisplay(pencilcases) 
{
    const cardsContainer = document.querySelector('.section_with_cards');
    cardsContainer.innerHTML = '';
    
    pencilcases.forEach((pencilcase) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('card_id', pencilcase.id); 
        card.innerHTML = '<img src="./pencilcase.jpg" class="image_of_card" alt="pencilcase">' +
         '<p class="title_of_card">' + pencilcase.title + '</p>' +
         '<p class="description">' + pencilcase.description + '</p>' +
         '<p class="price">$' + pencilcase.price + '</p>' +
         '<button id="edit_home_button">edit</button>' +
         '<button class="remove_button">Remove</button>';
        cardsContainer.appendChild(card);
    });
}

function addPencilcase(newPencilcase) {
    lastId++; 
    newPencilcase.id = lastId; 
    pencilcases.push(newPencilcase);
    filteredPencilcases = [...pencilcases];
    updatePencilcaseDisplay(filteredPencilcases);
}
function updatePencilcaseInArray(updatedPencilcase) {
    const id = updatedPencilcase.id;
    const index = pencilcases.findIndex((pencilcase) => pencilcase.id == id);

    console.log("Updating pencil case with ID:", id);
    console.log("Updated pencil case:");
    console.log(updatedPencilcase);
    console.log("Index of pencil case in the array:", index);

    if (index !==-1) {
        pencilcases[index] = updatedPencilcase;
        console.log("Pencil case updated in the array:", pencilcases[index]);
        
        
    } else {
        console.log("Pencil case with ID", id, "not found in the array.");
    }

    console.log("Updated pencil cases array:", pencilcases);
}


function sortPencilcasesByPrice() {
    filteredPencilcases.sort((a, b) => b.price - a.price);
    updatePencilcaseDisplay(filteredPencilcases);
}

function searchPencilcases(model_pencilcase) {
    filteredPencilcases = pencilcases.filter((pencilcase) =>
        pencilcase.title.toLowerCase().includes(model_pencilcase.toLowerCase())
    );
    updatePencilcaseDisplay(filteredPencilcases);
}

function countTotalPrice() {
    updatePencilcaseDisplay(filteredPencilcases);
    const totalPrice = filteredPencilcases.reduce((total, pencilcase) => total + pencilcase.price, 0);
    const totalPriceElement = document.getElementById('price');
    totalPriceElement.textContent = '$' + totalPrice;
}

const sortCheckbox = document.getElementById('myCheckbox');
sortCheckbox.addEventListener('change', () => {
    if (sortCheckbox.checked) {
        sortPencilcasesByPrice();
    } else {
        updatePencilcaseDisplay(filteredPencilcases);
    }
});

const searchButton = document.getElementById('Search_button');
searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('Type_input').value;
    searchPencilcases(searchInput);
});

const countButton = document.getElementById('count_button');
countButton.addEventListener('click', () => {
    countTotalPrice();
});

updatePencilcaseDisplay(pencilcases);

function Alert_price() {
    alert("The price must be int");
  }

const submitButton = document.getElementById('button_submit_create_page');
submitButton.addEventListener('click', () => {
    const title = document.getElementById('create_title_input').value;
    const description = document.getElementById('create_description_input').value;
    const price = parseInt(document.getElementById('create_price_input').value);

    if (isNaN(price)){
        Alert_price()
        return
    }

    const newPencilcase = {
        title: title,
        description: description,
        price: price,
    };

    addPencilcase(newPencilcase);
    document.getElementById('create_title_input').value="";
    document.getElementById('create_description_input').value="";
    document.getElementById('create_price_input').value="";
    openCity({ currentTarget: document.getElementById("home_button") }, "My_pencilcase");
});





document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'edit_home_button') {
        openCity({ currentTarget: document.getElementById("edit_home_button") }, "edit");
    }
});

let selectedPencilcaseId = null;

document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'edit_home_button') {
        selectedPencilcaseId = event.target.parentElement.getAttribute('card_id');
        const pencilcase = pencilcases.find(pencilcase => pencilcase.id == selectedPencilcaseId);
        console.log(selectedPencilcaseId)
        if (pencilcase) {
            
            document.getElementById('title_edit_input').value = pencilcase.title;
            document.getElementById('title_edit_dexcription_input').value = pencilcase.description;
            document.getElementById('title_edit_price_input').value = pencilcase.price;

            
            openCity({ currentTarget: document.getElementById("edit_home_button") }, "edit");
        }
    }
});

document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'button_submit_edit_page') {
        
        const updatedTitle = document.getElementById('title_edit_input').value;
        const updatedDescription = document.getElementById('title_edit_dexcription_input').value;
        const updatedPrice = parseInt(document.getElementById('title_edit_price_input').value);
        console.log(selectedPencilcaseId)
        
        if (isNaN(updatedPrice)){
            Alert_price()
            return
        }

        const updatedPencilcase = {
            id: selectedPencilcaseId,
            title: updatedTitle,
            description: updatedDescription,
            price: updatedPrice,
        };

        
        updatePencilcaseInArray(updatedPencilcase);

    
        updatePencilcaseDisplay(pencilcases);

        pencilcases = [...pencilcases]; 
        filteredPencilcases = [...pencilcases]; 
        

    }
});
