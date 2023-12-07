import axios from 'axios';

const BASE_URL = 'http://localhost:8080';


export const getAllPencilcases = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/pencilcases`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all pencilcases:', error);
        return [];
    }
};

export const getPencilcaseById = async (id) => {
    try {
        console.log(id)
        const response = await axios.get(`${BASE_URL}/api/pencilcases/${id}`);
        // if (!response.ok) {
        //     throw new Error(`Failed to fetch pencilcase with ID ${id}`);
        // }
        // return await response.json();
        return response.data;
    } catch (error) {
        console.error(`Error fetching pencilcase with ID ${id}:`, error);
        return null;
    }
};


export const getFilteredPencilcases = async (filters) => {
    try {
        const queryParams = new URLSearchParams(filters).toString();

        const response = await axios.get(`${BASE_URL}/api/pencilcases/filtered`,{queryParams});
        // if (!response.ok) {
        //     throw new Error('Failed to fetch filtered pencilcases');
        // }
        // return await response.json();
        return response.data;
    } catch (error) {
        console.error('Error fetching filtered pencilcases:', error);
        return [];
    }
};
