 let pencilcases = [
    {
        title: "Ukrainian pencilcase",
        description: "It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.",
        price: 20
    },
    {
        title: "Polish pencilcase",
        description: "It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.",
        price: 900
    },
    {
        title: "Turkish pencilcase",
        description: "It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.",
        price: 20
    },
    {
        title: "Italian pencilcase",
        description: "It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.",
        price: 50
    },
    {
        title: "Spanish pencilcase",
        description: "It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.",
        price: 60
    },
];

let filteredPencilcases = [...pencilcases];

function updatePencilcaseDisplay(pencilcases) 
{
    const cardsContainer = document.querySelector('.section_with_cards');
    cardsContainer.innerHTML = '';
    pencilcases.forEach((pencilcase) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '<img src="./pencilcase.jpg" class="image_of_card" alt="pencilcase">' +
         '<p class="title_of_card">' + pencilcase.title + '</p>' +
         '<p class="description">' + pencilcase.description + '</p>' +
         '<p class="price">$' + pencilcase.price + '</p>' +
         '<button class="edit_button">Edit</button>' +
         '<button class="remove_button">Remove</button>';
        cardsContainer.appendChild(card);
    });
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
    const totalPrice = filteredPencilcases.reduce((total, pencilcase) => total + pencilcase.price, 0);
    const totalPriceElement = document.getElementById('price');
    totalPriceElement.textContent = '$' + totalPrice;
}

const sortCheckbox = document.getElementById('myCheckbox');
sortCheckbox.addEventListener('change', () => {
    if (sortCheckbox.checked) {
        sortPencilcasesByPrice();
    } else {
        updatePencilcaseDisplay(filteredPencilcases); // Use the filteredPencilcases array here
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