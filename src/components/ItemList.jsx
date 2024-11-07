import React from 'react'

const ItemList = ({ items = [], onEdit, onDelete }) => {
  if (!Array.isArray(items)) {
    console.error("ItemList expects 'items' to be an array", items);
    return null;
}


  return (
    <ul>
    {items.map(item => (
        <li key={item.id}>
            {item.name}
            <button onClick={() => { console.log("Edit clicked"); onEdit(item); }}>Edit</button>
<button onClick={() => { console.log("Delete clicked"); onDelete(item.id); }}>Delete</button>

        </li>
    ))}
</ul>
  )
}

export default ItemList