## JSX without using HTML

/** @jsx myJsxFunction */
function myJsxFunction(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith("on") && name.toLowerCase() in window)
      element.addEventListener(name.toLowerCase().substr(2), value);
    else element.setAttribute(name, value.toString());
  });

  children.forEach((child) => {
    appendChild(element, child);
  });

  return element;
}

function appendChild(parent, child) {
  if (typeof child === "string") child = document.createTextNode(child);
  parent.appendChild(child);
}

const myElement = (
  <div>
    <h1>Hello World!</h1>
    <p>This is an example of using JSX without React.</p>
    <button onClick={() => alert("You clicked me!")}>Click me!</button>
  </div>
);

document.body.appendChild(myElement);

This code creates a myJsxFunction function that takes the same parameters as React.createElement and creates real DOM nodes that you can add to your DOM. The /** @jsx myJsxFunction */ comment tells Babel to use myJsxFunction instead of React.createElement when converting JSX tags into JavaScript.