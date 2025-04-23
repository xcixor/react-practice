# React Components Overview

Components are the building blocks of React applications. 

## Types of Components

### 1. Function Components
- Modern and preferred way to write components
- JavaScript functions that return JSX
- Simpler syntax and better performance


### 2. Class Components
- Traditional way using ES6 classes
- Provides more features but more verbose


## Key Component Concepts

1. **Props**
   - Read-only inputs passed to components
   - Allow parent-to-child communication

2. **State**
   - Internal data that can change
   - Managed with `useState` hook in function components

3. **Composition**
   - Components can contain other components
   - Promotes reusability and modularity


## Key differences of class components from the functional component:
- Uses `class` syntax extending `React.Component`
- Props are accessed through `this.props`
- Render logic goes inside the `render()` method
- Props are destructured from `this.props` at the beginning of render method



NB: Components should follow the Single Responsibility Principle and be reusable when possible.