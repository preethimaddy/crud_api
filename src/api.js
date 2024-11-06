
// src/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users'; // Placeholder API for demonstration

// Get all items
export const fetchItems = () => axios.get(API_URL);

// Add a new item
export const addItem = (data) => axios.post(API_URL, data);

// Update an item
export const updateItem = (id, data) => axios.put(`${API_URL}/${id}`, data);

// Delete an item
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
