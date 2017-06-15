# React Components as Routes Lab

## Overview

In this lab, you will create a simple Client-Side routing application with __React Router__.

## Objectives

* Practice building an application with __React Router__
* Access routes using a Navbar with matched routes
* Visit different "views" in the application by accessing different routes

## React Router App

In this lab we are going to build out an application that has routes for a Home Page, Actors Page, Movies Page and Directors Page. Our goal is to provide routes and links for these 4 pages.

This is what our app should look like when we are done with this lab:

* [Home Page](https://s3.amazonaws.com/learn-verified/react-router-lab-home-page.png)
* [Movies Page](https://s3.amazonaws.com/learn-verified/react-router-lab-movies-page.png)
* [Directors Page](https://s3.amazonaws.com/learn-verified/react-router-lab-directors-page.png)
* [Actors Page](https://s3.amazonaws.com/learn-verified/react-router-lab-actors-page.png)

Let's work through this one component at a time

### Components

Our `src` folder contains the following:
```
src/
├── data.js
├── index.js
|-- containers/
|   |-- App.js
└── components/
    ├── Actors.js
    ├── Directors.js
    ├── Home.js
    ├── Movies.js
    └── NavBar.js
```

All of the file and module imports are done for you, so you just need to focus on the JSX for these components.

#### `Index.js`

Our `index.js` file is partially completed for us. It loads in the `BrowserRouter as Router` from __React Router__.

#### `data.js`

This file contains seed data for __Actors, Movies, and Directors__

## Component Info

#### `App`

This component should render our `Navbar` and 4 __React Router__ `Route` components with paths to __/, /movies, /directors, /actors__ and has a props of the corresponding component. When a user visits the root url, they should see the Home component.

#### `Navbar`

This component needs to render 4 `<NavLink>` components. They will be for __/, /movies, /directors, /actors__ <-- in this order(test checks for this).

#### `Home`

This component should render the text `Home Page`.

#### `Movies`

This component should render the text `Movies Page`, and make a new `<div>` for each movie. The `<div>` should contain the movie's title, time and an `<ul>` for each genre.

#### `Directors`

This component should render the text `Directors Page`, and make a new `<div>` for each director. The `<div>` should contain the director's name and an `<ul>` for each of their movies.

#### `Actors`

This component should render the text `Actors Page`, and make a new `<div>` for each actor. The `<div>` should contain the actor's name and an `<ul>` for each of their movies.

## Resources

[React Router](https://github.com/ReactTraining/react-router)
[React Router Tutorial](https://reacttraining.com/react-router/web/guides/quick-start)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-components-as-routes-lab'>React Components As Routes Lab</a> on Learn.co and start learning to code for free.</p>
