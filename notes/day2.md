# React Fundamentals Notes

## State Management in React

### What is State?
- State represents data that can change over time in a component
- When state changes, React automatically re-renders the component
- State helps create dynamic and interactive UIs
- State is component-specific and not accessible to other components unless passed as props

### useState Hook

```jsx
const [stateName, setStateName] = useState(initialValue);
```

- The `useState` hook returns an array containing:
  - Current state value
  - Function to update that state

#### Example from Component
```jsx
const [products, setProducts] = useState([
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image: "...",
    isFeatured: true,
  },
  // more products...
]);

const [newProduct, setNewProduct] = useState({
  name: "",
  price: "",
  image: "https://via.placeholder.com/150",
});
```

#### Updating State
- State should never be modified directly (state is immutable)
- Always use the setter function returned by useState
- For objects and arrays, create a new copy when updating

```jsx
// Updating object state
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewProduct({
    ...newProduct,  // spread existing properties
    [name]: value,  // update specific property
  });
};

// Updating array state
const handleAddProduct = () => {
  setProducts([...products, newProductWithId]);
};
```

## Rendering Lists in React

### Using map() for Lists
- The `map()` method transforms each item in an array into JSX elements
- Always provide a unique `key` prop when rendering lists
- Keys help React identify which items have changed, added, or removed

```jsx
{products.map((product) => (
  <div key={product.id} className="...">
    {/* component content */}
  </div>
))}
```

### Best Practices for List Rendering
- Use stable identifiers (like database IDs) for keys
- Avoid using array index as keys when the list can change
- Extract complex list items into separate components

## Conditional Rendering

### Methods for Conditional Rendering

1. **Using && operator**
```jsx
{isLoading && (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
  </div>
)}
```

2. **Using ternary operator**
```jsx
<img
  className={`h-full w-full object-cover ${
    isLoading ? "invisible" : "visible"
  }`}
/>
```

3. **Using if/else in JSX (with immediate return)**
```jsx
{products.length === 0 && (
  <p className="text-center text-gray-500 py-8">
    No products available. Add some!
  </p>
)}
```

### Managing UI States
- Loading states (showing spinners or placeholders)
- Error states (displaying messages when things go wrong)
- Empty states (showing messages when no data is available)
- Different visual states (like highlighting on mouse hover)

```jsx
// Example of multiple conditional states
{isLoading && (
  <div>Loading...</div>
)}

{hasError && (
  <div>Error message</div>
)}

{!isLoading && !hasError && (
  <div>Content</div>
)}
```

## Putting It All Together

The sample component demonstrates all these concepts working together:
- Uses `useState` to track product data and form inputs
- Renders a list of products using `map()`
- Conditionally renders loading states, error messages, and empty states
- Updates state based on user interactions (adding/removing products)

This pattern forms the foundation of most React applications, allowing for dynamic, interactive user interfaces that respond to both user input and data changes.