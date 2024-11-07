 import { useState, useEffect } from 'react';
import './App.css';
import FormCreate from './components/FormCreate';
import ItemList from './components/ItemList';
import { addItem } from './api';
import { updateItem } from './api';
import { fetchItems } from './api';
import { deleteItem } from './api'
function App() {
  const [items,setItems] = useState([]);
  const[editItem, setEditItem] = useState(null);

  //Fetch items on Compound mount

  useEffect(() => {
    fetchItems()
        .then(response => {
            console.log("Fetched items:", response.data); // Check if data is an array
            setItems(Array.isArray(response.data) ? response.data : []); // Ensure it's an array
        })
        .catch(error => {
            console.error("Error fetching items:", error);
            setItems([]); // Set to an empty array on error
        });
}, []);
  const handleAddItem =(item)=>{
    addItem(item)
    .then(response => {
        console.log("New item from API:", response.data); // Confirm response structure
        setItems(prevItems => [...prevItems, response.data]);
    })
    .catch(error => console.error("Error adding item", error))
  }
  //update an existing item

  const handleUpdateItem =(id,updatedData) =>{
    updateItem(id, updatedData)
.then(response => {
  setItems(items.map(item => (item.id === id ? response.data : item)));
  setEditItem(null) // clear the edit Item
})
.catch(error =>console.error("Error updating item",error))
  }
  //Delete an item
  const handleDeleteItem = (id) => {
    deleteItem(id)
    .then(() => setItems(items.filter(item => item.id !== id)))
    .catch(error => console.error("Error deleting item", error));
  }

  return (
    <div className="App">
    <h1>Crud app</h1>
    <FormCreate onAdd ={handleAddItem} onUpdate={handleUpdateItem} editItem={editItem} />
    <ItemList item={items} onEdit={setEditItem} onDelete={handleDeleteItem}/>
    </div>
  );
}

export default App;
