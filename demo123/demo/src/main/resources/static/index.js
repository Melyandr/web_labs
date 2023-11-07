let pencilcases = [];
let filteredPencilcases = [];
let lastId = 0;

function updatePencilcaseDisplay(pencilcases) {
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
            '<button class="edit_button" card_id="' + pencilcase.id + '">Edit</button>' +
            '<button class="remove_button" card_id="' + pencilcase.id + '">Remove</button>';
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
        console.log("Pencil case with id", id, "not found in the array.");
    }

    console.log("Updated pencil cases array:", pencilcases);


    refreshFilteredPencilcases();                                                                        //m fokmfok gmof


}
function refreshFilteredPencilcases() {
    filteredPencilcases = [...pencilcases];
}

function fetchAllPencilcases() {
    fetch('/api/pencilcases')
        .then((response) => response.json())
        .then((data) => {
            pencilcases = data;
            refreshFilteredPencilcases();
            updatePencilcaseDisplay(filteredPencilcases);
        })
        .catch((error) => {
            console.error('Error fetching Pencilcases:', error);
        });
}

function createPencilcaseOnBackend(newPencilcase) {

    fetch('/api/pencilcases', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPencilcase),
    })
        .then((response) => response.json())
        .then((data) => {
            fetchAllPencilcases()
            openCity({ currentTarget: document.getElementById("home_button") }, "My_pencilcase");
        })
        .catch((error) => {
            console.error('Error creating Pencilcase:', error);
        });
}

function updatePencilcaseOnBackend(id, updatedPencilcase) {
    fetch(`/api/pencilcases/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPencilcase),
    })
        .then((response) => response.json())
        .then((data) => {
            updatePencilcaseInArray(data);
            updatePencilcaseDisplay(filteredPencilcases);
            openCity({ currentTarget: document.getElementById("home_button") }, "My_pencilcase");
        })
        .catch((error) => {
            console.error('Error updating Pencilcase:', error);
        });

}

function deletePencilcaseOnBackend(id) {
    fetch(`/api/pencilcases/${id}`, {
        method: 'DELETE',
    })
        .then((response) => {
            if (response.status === 200) {

                const index = pencilcases.findIndex(pencilcase => pencilcase.id == id);
                if (index !== -1) {
                    pencilcases.splice(index, 1);
                    refreshFilteredPencilcases();
                    updatePencilcaseDisplay(filteredPencilcases);
                    openCity({ currentTarget: document.getElementById("home_button") }, "My_pencilcase"); // Switch to the "My pencilcase" tab
                } else {
                    throw new Error('Object is not found in the array');
                }
            } else {
                throw new Error('Error deleting Pencilcase');
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

function addPencilcase(newPencilcase) {
    createPencilcaseOnBackend(newPencilcase);
}

document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('edit_button')) {
        const cardId = event.target.getAttribute('card_id');
        console.log("in function")
        console.log(pencilcases)

        const pencilcase = pencilcases.find((pencilcase) => pencilcase.id == cardId);
        console.log(pencilcase)
        if (pencilcase) {


            document.getElementById('edit_title_input').value = pencilcase.title;
            document.getElementById('edit_description_input').value = pencilcase.description;
            document.getElementById('edit_price_input').value = pencilcase.price;
            document.getElementById('edit_button_submit').setAttribute('data-card-id', cardId);
            openCity({ currentTarget: document.getElementById("edit_home_button") }, "edit");
        }

    }

    if (event.target && event.target.classList.contains('remove_button')) {
        const cardId = event.target.getAttribute('card_id');
        deletePencilcaseOnBackend(cardId);
    }
});

window.onload = () => {
    const editButtonSubmit = document.getElementById('edit_button_submit');

    if (editButtonSubmit) {
        editButtonSubmit.addEventListener('click', () => {
            const updatedTitle = document.getElementById('edit_title_input').value;
            const updatedDescription = document.getElementById('edit_description_input').value;
            const updatedPrice = parseFloat(document.getElementById('edit_price_input').value);
            const cardId = editButtonSubmit.getAttribute('data-card-id');

            if (updatedTitle === '' || updatedDescription === '' || isNaN(updatedPrice) || updatedPrice < 0) {
                alert('Please enter corect data');
                return;
            }

            const updatedPencilcase = {
                id: parseInt(cardId),
                title: updatedTitle,
                description: updatedDescription,
                price: updatedPrice,
            };

            updatePencilcaseOnBackend(cardId, updatedPencilcase);

            document.getElementById('edit_title_input').value = '';
            document.getElementById('edit_description_input').value = '';
            document.getElementById('edit_price_input').value = '';
            editButtonSubmit.removeAttribute('data-card-id');

        });
    }
};

const submitButton = document.getElementById('button_submit_create_page');
submitButton.addEventListener('click', () => {
    const title = document.getElementById('create_title_input').value;
    const description = document.getElementById('create_description_input').value;
    const price = parseFloat(document.getElementById('create_price_input').value);

    if (title === '' || description === '' || isNaN(price) || price < 0) {
        alert('Please enter corect data');
        return;
    }

    const newPencilcase = {
        title: title,
        description: description,
        price: price,
    };

    addPencilcase(newPencilcase);
});

document.addEventListener('DOMContentLoaded', () => {
    fetchAllPencilcases();
});
