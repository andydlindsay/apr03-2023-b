# Breakout - Flexbox

### To Do
- [x] Review Parent/Child Relationships in HTML
- [x] Flexbox Demo
- [x] Styling a Header/Navbar
- [x] Questions?

### Parent/Child Relationships in HTML
* The DOM is implemented as a tree data structure
* Nodes in a tree can have:
  * an unlimited number of children
  * an unlimited number of siblings
  * only one parent

* A child is anything that comes between the opening and closing tags

```html
<!-- this <h2> has one child: a text node containing "Hello World" -->
<h2>Hello World</h2>

<!-- this <div> has two children: a <p> and a <div> (the child <div> also has a child <h2>) -->
<div>
  <p>I'm a paragraph</p>
  <div>
    <h2>Nested element</h2>
  </div>
</div>
```

```html
<!-- note: self-closing tags will not have child elements -->
<img />
<input />
```

### Useful Links
* [Flexbox Cheat Sheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
