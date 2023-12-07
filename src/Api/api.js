import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

// Отримати всі олівцеві коробки
export const getAllPencilcases = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/pencilcases`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all pencilcases:', error);
        return [];
    }
};
//
// // Отримати олівцеву коробку за ID
export const getPencilcaseById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/api/pencilcases/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch pencilcase with ID ${id}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching pencilcase with ID ${id}:`, error);
        return null;
    }
};

// // Створити нову олівцеву коробку
// export const createPencilcase = async (pencilcaseData) => {
//     try {
//         const response = await fetch(BASE_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(pencilcaseData),
//         });
//         if (!response.ok) {
//             throw new Error('Failed to create pencilcase');
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Error creating pencilcase:', error);
//         return null;
//     }
// };
//
// // Оновити олівцеву коробку за ID
// export const updatePencilcase = async (id, pencilcaseData) => {
//     try {
//         const response = await fetch(`${BASE_URL}/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(pencilcaseData),
//         });
//         if (!response.ok) {
//             throw new Error(`Failed to update pencilcase with ID ${id}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error(`Error updating pencilcase with ID ${id}:`, error);
//         return null;
//     }
// };
//
// // Видалити олівцеву коробку за ID
// export const deletePencilcase = async (id) => {
//     try {
//         const response = await fetch(`${BASE_URL}/${id}`, {
//             method: 'DELETE',
//         });
//         if (!response.ok) {
//             throw new Error(`Failed to delete pencilcase with ID ${id}`);
//         }
//         return true;
//     } catch (error) {
//         console.error(`Error deleting pencilcase with ID ${id}:`, error);
//         return false;
//     }
// };
//
// // Отримати відфільтровані олівцеві коробки
export const getFilteredPencilcases = async (filters) => {
    try {
        const queryParams = new URLSearchParams(filters).toString();
        const response = await fetch(`${BASE_URL}/api/pencilcases/filtered?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to fetch filtered pencilcases');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching filtered pencilcases:', error);
        return [];
    }
};
