import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [singleItem, setSingleItem] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleQuerySubmit = (event) => {
    event.preventDefault();
    fetch(`https://fakestoreapi.com/products/${query}`)
      .then((response) => response.json())
      .then((data) => setSingleItem(data))
      .catch((error) => console.error("Error fetching single item: ", error));
  };

  return (
    <>
      <h1>List of Items</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Fetch Single Item</h2>
      <form onSubmit={handleQuerySubmit}>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter item ID"
        />
        <button type="submit">Fetch</button>
      </form>

      {singleItem && (
        <div>
          <h3>Single Item Data</h3>
          <p>ID: {singleItem.id}</p>
          <p>Title: {singleItem.title}</p>
          <p>Description: {singleItem.description}</p>
          <p>Price: ${singleItem.price}</p>
        </div>
      )}
    </>
  );
}

export default App;
