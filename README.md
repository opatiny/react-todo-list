This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React exercise: to-do list web page

Responsive web app allowing you to add things to do to a todo list. The entries are saved in Local Storage.

Made following this tutorial: [https://www.youtube.com/watch?v=sBws8MSXN7A](https://www.youtube.com/watch?v=sBws8MSXN7A).

## [Use the app](https://opatiny.github.io/react-todo-list/)

## Starting the server

```bash
npm start
```

Once the server is started, it will update automatically when changes are done in the code.

## Packages used

- `create-react-app`: to easily start a react project
- `uuid`: to get unique ids automatically
- `react-router-dom`: This package provides us the `kkk` and the `Route` components, which allow to handle the web pages and the urls
- `debug`(dev): for debug messages in the console
- `serve`: To run the build folder.

## Making a usable app out of the tutorial code

### Storing data

[Local Storage tutorial](https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/)

It is possible to store data on a user's browser (approx 5Mb per web page). The page can be closed, or accessed from a different device and the data will be recovered. This is called "local storage". It is possible to inspect it from the js console, under "Application" -> "Local Storage".

We use two functions, to read and write data to the local storage: `.setIdem()` and `.getItem()`. The data in local storage is organized as an object. Each entry has a key and a value, which must be a string. In our case, we want to store a JSON, so we have to stringify it after reading, and parse it before writing it to the local storage.

#### Reading data
```js
const rawState = window.localStorage.getItem('data');
const parsedState = JSON.parse(rawState);
```

#### Writing data
```js
window.localStorage.setItem('data', JSON.stringify(this.state));
```
### Building

Once the code is working, you have to build it to make it stand-alone and usable by others.

Add this line to `packages.json` to make paths relative:

```json
  "homepage": "./",
```

Build the project:

```bash
npm run build
```

### Running the build

The package `serve` was installed globally, it allows to run the build folder with:

```bash
serve -s build
```
