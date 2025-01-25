# Inventory Management App

This is a simple **Inventory Management App** built using React.js. The app allows users to manage an inventory of items efficiently. It includes features to add, edit, delete, filter, and sort items, and highlights low-stock items for easy identification.

---

## Features

### 1. **Add New Items**
Users can add new items to the inventory by filling out a form with the following fields:
- Item Name
- Category
- Quantity
- Price

### 2. **Edit Existing Items**
Users can edit existing items in the inventory. Clicking the **Edit** button for an item pre-fills the form with the current item details, allowing for easy updates.

### 3. **Delete Items**
Items can be deleted from the inventory using the **Delete** button associated with each item.

### 4. **Filter by Category**
Users can filter the inventory table by selecting a category from a dropdown menu. This helps in viewing only items of a specific category.

### 5. **Sort by Quantity**
The inventory table can be sorted by item quantity in ascending or descending order. This feature makes it easy to identify items with the highest or lowest stock.

### 6. **Highlight Low-Stock Items**
Items with a quantity below 10 are visually highlighted to draw attention to low-stock items.

---

## Implementation Details

### **React Features Used**
- **Functional Components**: The app is built entirely using React's functional components for a modern, efficient design.
- **useReducer Hook**: Used for state management to handle complex state updates such as adding, editing, deleting, filtering, and sorting inventory items.

### **Reducer Actions**
The reducer manages the following actions:
- `Add`: Adds a new item to the inventory.
- `Edit`: Updates an existing item's details.
- `Delete`: Removes an item from the inventory.
- `Filter`: Filters items based on the selected category.
- `Sort`: Sorts items by quantity.

### **State Management**
The app maintains two key states:
1. **Inventory State**: Managed by the `useReducer` hook for all inventory-related actions.
2. **Form State**: Managed by the `useState` hook to handle user input for adding and editing items.

---

## How to Run the App

### **Prerequisites**
- Node.js and npm installed on your system.

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/inventory-management-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd inventory-management-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to use the app.

---

## File Structure
```
src/
|-- components/
|   |-- Inventory.jsx  // Main inventory component
|   |-- InventoryForm.jsx  // Form for adding/editing items
|-- reducers/
|   |-- inventoryReducer.js  // Reducer logic for inventory management
|-- App.js  // Root component
|-- index.js  // Entry point
```

---

## Future Improvements
- Add user authentication for secure inventory management.
- Implement pagination for large inventories.
- Add export functionality to download the inventory as a CSV file.
- Integrate a backend API for persistent data storage.

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute this app as per the terms of the license.

