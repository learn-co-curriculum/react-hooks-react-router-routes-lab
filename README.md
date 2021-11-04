# Basic Routes Lab

## Learning Goals

- Use the `<Route>` component to display different components based on the URL
- Use the `<NavBar>` component to allow client-side navigation

## Introduction

In this lab we are going to build out a Movie application that has routes for a
Home Page, Actors Page, Movies Page and Directors Page. Our goal is to provide
routes and links for these 4 pages.

Here is what each page of our app should look like when we are done with this lab:

- [Home Page](https://s3.amazonaws.com/learn-verified/react-router-lab-home-page.png)
- [Movies Page](https://s3.amazonaws.com/learn-verified/react-router-lab-movies-page.png)
- [Directors Page](https://s3.amazonaws.com/learn-verified/react-router-lab-directors-page.png)
- [Actors Page](https://s3.amazonaws.com/learn-verified/react-router-lab-actors-page.png)

Let's work through this one component at a time.

## Setup

Our `src` folder contains the following:

```txt
src/
├── data.js
├── index.js
└── components/
    ├── App.js
    ├── Actors.js
    ├── Directors.js
    ├── Home.js
    ├── Movies.js
    └── NavBar.js
```

All of the file and module imports are done for you, so you just need to focus
on the JSX for these components.

### index.js

Our `index.js` file is completed for us. It loads the `BrowserRouter` component
from React Router, as well as `App` as the top level component.

### data.js

This file contains seed data for **Actors**, **Movies**, and **Directors**.

## Components

### App

Inside this component, we'll need to render our `NavBar` and four **React
Router** `Route` components with the following paths:

- `/movies`: should render the `Movies` component
- `/directors`: should render the `Directors` component
- `/actors`: should render the `Actors` component
- `/`: should render the `Home` component

### NavBar

This component needs to render four `NavLink` components. They will be for `/`,
`/movies`, `/directors`, `/actors`, in this order (test checks for this).

### Home

This component should render the text `Home Page` in an `<h1>`.

### Movies

This component should render the text `Movies Page` in an `<h1>`, and make a new
`<div>` for each movie. The `<div>` should contain the movie's title, time and a
`<ul>` with a list of its genres, each within their own `<li>`.

### Directors

This component should render the text `Directors Page` in an `<h1>`, and make a
new `<div>` for each director. The `<div>` should contain the director's name
and a `<ul>` with a list of their movies.

### Actors

This component should render the text `Actors Page` in an `<h1>`, and make a new
`<div>` for each actor. The `<div>` should contain the actor's name and a `<ul>`
with a list of their movies.

> Note: The tests will count how many `<div>`s are nested inside your `Movies`,
> `Directors`, and `Actors` components. So to get tests to pass, you must create
> _exactly one_ `<div>` for each movie, director, or actor, and no additional
> nested `<div>`s in those components.

## Resources

- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
