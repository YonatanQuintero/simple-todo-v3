## Exercise 3: Advanced Todo App with Redux Toolkit and RTK Query

## Overview

Elevate the basic todo list application by integrating Redux Toolkit for state management and RTK Query for asynchronous operations. This exercise will demonstrate how to combine these powerful tools to construct a robust and scalable application.

## Objectives

- Implement Redux Toolkit to manage global state and handle complex state updates for todo items.
- Utilize RTK Query to manage asynchronous operations, such as fetching data from an API and persisting todo data to local storage.
- Create a `ThemeContext` using `React.createContext()` to manage the application's light and dark themes.
- Employ local storage to persist todo data across page refreshes and application restarts.

## Implementation

### Theme Management with ThemeContext

- Create a `ThemeContext` using `React.createContext()` to provide access to the current theme.
- Define a `ThemeProvider` component that wraps the application and exposes the theme context.
- Use the `ThemeContext` within components to apply the current theme to the UI.

### State Management with Redux Toolkit

- Set up Redux Toolkit to manage the global state of the application.
- Create a Redux store and define reducers for handling todo item actions (adding, removing, toggling completion status).
- Use the Redux store and reducers within components to access and update the todo list state.

### Asynchronous Operations with RTK Query

- Install RTK Query and configure it to manage API interactions as a part of Redux Toolkit.
- Define an API slice using `createSlice` from RTK Query for fetching and updating todo data.
- Utilize the generated hooks from the API slice to interact with the API in a declarative manner.

### Local Storage for Persistent Data Storage

- Utilize the `localStorage` API to store and retrieve todo data.
- When the application initializes, fetch todo data from local storage and populate the Redux store.
- When the todo list state changes, update the corresponding data in local storage.

## Benefits

- **Enhanced Code Organization:** Leverage Redux Toolkit and RTK Query to streamline state management and asynchronous operations.
- **Improved Scalability:** Build a scalable architecture capable of handling complex state updates and asynchronous tasks.
- **Persistent Data Storage:** Maintain user data even after application reloads or device restarts.
- **Customizable Theme:** Provide users with the option to switch between light and dark themes.

## Insights

- Redux Toolkit simplifies state management by providing a structured approach to defining reducers, actions, and selectors.
- RTK Query facilitates asynchronous operations by providing a declarative API for interacting with APIs.
- Local storage offers a convenient way to persist data without relying on external servers.

## Demonstration

Develop the enhanced todo application, incorporating Redux Toolkit for state management, RTK Query for asynchronous operations, and `ThemeContext` for theme management. Showcase the ability to change themes, add, remove, and toggle todo items, maintain the todo list across page refreshes, and fetch todo data from an API.
