import React, {useState,useEffect}from 'react'

const FormCreate = ({ onAdd, onUpdate, editItem }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        if (editItem) {
            setName(editItem.name);
        } else {
            setName('');
        }
    }, [editItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editItem) {
            onUpdate(editItem.id, { name });
        } else {
            onAdd({ name });
        }
        setName('');
    };
  return (
  <form onSubmit={handleSubmit}>
    <input 
    type='text'
    placeholder='Enter the Name'
    value={name}
    onChange={(e)=>setName(e.target.value) }/>
    <button type="submit" >{editItem ? 'update':'Add'}</button>
  </form>
  )
}

export default FormCreate