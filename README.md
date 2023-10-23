# gating-content-with-js

A method for gating non-sensitive content using JavaScript

## Clone an example from Made in Webflow

https://some-link.com

## How this works

In this example, we're using simple JavaScript to hide non-sensitive page content. If you have content that needs to be protected or that is sensitive, make sure you're using a method that requires server-side auth (Webflow User Accounts).

### Setting up your Webflow project

#### Using the standard method (divs)

On the page(s) where you want to require an email or other information to view content, you'll need to have an overlay (in this example we're using object id's to select the elements in JavaScript) and give it an id of `overlay`.

Inside that overlay, add your content and then on your form, give your submit button an id of `submit`.

#### Using the dialog element and a Webflow DOM element

If you'd like to use the `showModal()` API and the `<dialog>` element, you can take a similar approach. Instead of using a div to create your overlays, you can add a Webflow DOM element ([learn from Timothy Ricks](https://www.youtube.com/watch?v=qULN82RqAHw)) and then give it a `<dialog>` tag.

One thing to note, to style the backdrop of the dialog element you'll need some custom CSS:

```css
::backdrop {
  background-color: #080808;
  opacity: 0.9;
}
```

Then you can hit `display: block;` with the dialog element selected to style everything in Webflow, then reset the display settings to hide it again.

### Writing your JavaScript

There are two files in this repo:

- using-divs.js
- using-dialog.js

The first is for the more traditional setup. Let's look at the code with comments:

#### Using the standard method (divs)

```javascript
// define your global variables
// targeting our submit button and
// the div with an id of overlay
const submit = document.querySelector("#submit");
const overlay = document.querySelector("#overlay");

// when the submit button is clicked
// add an item in localStorage ("gated, true")
// and hide the overlay
submit.addEventListener("click", function (event) {
  localStorage.setItem("gated", true);
  overlay.style.display = "none";
});

// on page load check if "gated" exists
// in our localStorage
if (localStorage.getItem("gated")) {
  // if it exists, hide the overlay
  overlay.style.display = "none";
} else {
  // if it doesn't, show the form
  overlay.style.display = "flex";
}
```

#### Using the dialog element and a Webflow DOM element

This method allows us to use the [dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) we added to the canvas in Webflow.

```javascript
// define your global variables
// targeting our submit button and
// the DOM element with an id of dialog
const submit = document.querySelector("#submit");
const dialog = document.querySelector("#dialog");

// when the submit button is clicked
// add an item in localStorage ("gated, true")
// and close the dialog element (hide it)
submit.addEventListener("click", function (event) {
  localStorage.setItem("gated", true);
  dialog.close();
});

// on page load check if "gated" exists
// in our localStorage
if (localStorage.getItem("gated")) {
  // if it exists, hide the overlay
  dialog.close();
} else {
  // if it doesn't, show the form
  dialog.showModal();
}
```
