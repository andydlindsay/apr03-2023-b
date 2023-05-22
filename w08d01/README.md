# W08D01 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Pure Function
* no side effects
* given the same arguments will always return the same result

```js
let addition = 5;
let i = 10;

const addTwo = (num) => {
  i = 15;
  const total = num + addition;
  return total;
};
```

### Examples of side effects
* console.log
* setting timers and intervals
* establishing web socket connections
* data fetching
* modifying the DOM directly

```js
useEffect(() => {}); // calls the callback once AFTER every render
useEffect(() => {}, [username]); // calls the callback on the first render and then only if `username` changes
useEffect(() => {}, []); // called on the first render AND THEN never again
```

```js
router.get("/images/:url", (request, response) => {
    const url = request.params.url;

    response.sendFile(path.join(__dirname, '../public/images', url));
});
```




```js
counter = 0;
setCounter(counter + 1);
setCounter(counter + 1);
setCounter((prev) => prev + 1);
setCounter((prev) => prev + 1);
setCounter((prev) => prev + 1);

setInput(event.target.value)
```















