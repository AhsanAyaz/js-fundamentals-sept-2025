## Day 3: The Structure — Arrays, Objects, and Putting It Together

---

### How was yesterday?

--

![multitasking](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnNrYWtrcXdtY29qczMwa2ZmNWphMnJjeTlwYWJ5eTQ3dmh3Z3R3MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NV4cSrRYXXwfUcYnua/giphy.gif) <!-- .element: style="height: 600px" -->

--

Yesterday got real with debugging — it was tough at first, then started to click.

That’s normal. Today we’ll keep that momentum while leveling up your data skills.

<!-- .element class="fragment" -->

--

- Goal: organize information with arrays and objects.
- Keep using your debugging toolkit: console, errors, breakpoints.
<!-- .element class="fragment" -->
- Capstone: build the logic for a tiny app (no UI yet).
<!-- .element class="fragment" -->

---

## Section 0: Warm‑up — FizzBuzz (30 min)

--

### The Challenge

Print numbers from 1 to 100. For multiples of 3 print "Fizz", for 5 print "Buzz", for both print "FizzBuzz".

<!-- .element class="fragment" -->

```js
for (let i = 1; i <= 100; i++) {
  const fizz = i % 3 === 0;
  const buzz = i % 5 === 0;
  if (fizz && buzz) console.log('FizzBuzz');
  else if (fizz) console.log('Fizz');
  else if (buzz) console.log('Buzz');
  else console.log(i);
}
```

<!-- .element class="fragment" -->

--

### Debugging Focus (5 min)

- Read errors: unexpected token? missing `{}` or `)`?
<!-- .element class="fragment" -->
- Inspect values with `console.log(i, fizz, buzz)`.
<!-- .element class="fragment" -->
- Off‑by‑one: are you stopping at 99? Check loop condition.
<!-- .element class="fragment" -->

---

## Section 1: Arrays — Lists of Things

--

### What Is an Array?

A list for ordering multiple values. Think: shopping list, students, todos.

<!-- .element class="fragment" -->

```js
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // 'apple'
console.log(fruits.length); // 3
```

<!-- .element class="fragment" -->

--

### Changing Arrays

```js
const list = [];
list.push('milk'); // ['milk']
list.push('bread'); // ['milk', 'bread']
list.pop(); // ['milk']
list.unshift('eggs'); // ['eggs', 'milk']
list.shift(); // ['milk']
```

<!-- .element class="fragment" -->

--

### Looping Arrays

```js
const nums = [2, 4, 6, 8];
for (let i = 0; i < nums.length; i++) {
  console.log(i, nums[i]);
}

// or
for (const n of nums) {
  console.log(n);
}
```

<!-- .element class="fragment" -->

--

### Debugging Arrays (Common Pitfalls)

- `undefined` when accessing: check the index and `.length`.
<!-- .element class="fragment" -->

- Off‑by‑one: last index is `length - 1`.
<!-- .element class="fragment" -->

- Mutations: where did I `.push()` or `.pop()`? Log before/after.
<!-- .element class="fragment" -->

---

## Section 2: Objects — Structured Information

--

### What Is an Object?

A collection of key–value pairs about one thing. Think: user profile, product, game character.

<!-- .element class="fragment" -->

```js
const user = {
  name: 'Muhammad',
  email: 'muhammad@example.com',
  isAdmin: false,
};

console.log(user.name); // 'Muhammad'
console.log(user['email']); // 'muhammad@example.com'

user.isAdmin = true; // update
user.age = 21; // add
```

<!-- .element class="fragment" -->

--

### Nested Data and Arrays of Objects

```js
const todos = [
  { text: 'Buy milk', completed: false },
  { text: 'Walk dog', completed: true },
];

// access
console.log(todos[0].text); // 'Buy milk'

// update
todos[0].completed = true;
```

<!-- .element class="fragment" -->

--

### Debugging Objects (Common Pitfalls)

- `Cannot read properties of undefined`: log the parent first.
<!-- .element class="fragment" -->

- Typos in keys: `user.emailAdress` vs `user.emailAddress`.
<!-- .element class="fragment" -->

- Dot vs bracket: use bracket `obj[key]` when the key is a variable.
<!-- .element class="fragment" -->

---

## Section 3: Building Blocks for a To‑Do App (Logic Only)

--

### Requirements (What the Brain Should Do)

- Store todos (text + completed).
<!-- .element class="fragment" -->
- Add a new todo.
<!-- .element class="fragment" -->
- Toggle a todo as completed/not completed.
<!-- .element class="fragment" -->
- List todos in a readable way.
<!-- .element class="fragment" -->

--

### Starter Data Structure

```js
let todos = [
  { id: 1, text: 'Buy milk', completed: false },
  { id: 2, text: 'Walk dog', completed: true },
];
```

<!-- .element class="fragment" -->

--

### Core Functions (Skeleton)

```js
function addTodo(text) {
  const id = Date.now();
  todos.push({ id, text, completed: false });
}

function toggleTodo(id) {
  for (const todo of todos) {
    if (todo.id === id) {
      todo.completed = !todo.completed;
      break;
    }
  }
}

function removeTodo(id) {
  todos = todos.filter((t) => t.id !== id);
}

function listTodos() {
  for (const t of todos) {
    const status = t.completed ? '✅' : '⬜️';
    console.log(`${status} (${t.id}) ${t.text}`);
  }
}
```

<!-- .element class="fragment" -->

--

### Debugging This Mini‑App

- After each function, call `listTodos()` to verify state.
<!-- .element class="fragment" -->

- Log inputs: `console.log('toggle', id)` to check values.
<!-- .element class="fragment" -->

- Breakpoints: step through the loop in `toggleTodo`.
<!-- .element class="fragment" -->

---

## Section 4: Guided Build (60–90 min)

--

### Plan, Then Code

1. Pseudocode your steps first (comments only).
<!-- .element class="fragment" -->

2. Implement one function at a time.
<!-- .element class="fragment" -->

3. Test with small, visible logs.
<!-- .element class="fragment" -->

--

### Suggested Milestones

- Milestone 1: `addTodo` works and `listTodos` shows 3 items.
<!-- .element class="fragment" -->

- Milestone 2: `toggleTodo` flips status correctly.
<!-- .element class="fragment" -->

- Milestone 3: `removeTodo` deletes by `id` without breaking indexes.
<!-- .element class="fragment" -->

---

## Section 5: Teaser — Connecting to the Page (15–30 min)

--

### You Built the Brain. Now, a Peek at the Body.

```html
<!-- pretend this already exists in index.html -->
<ul id="todos"></ul>
```

```js
// super quick render (no deep DOM lesson today)
const ul = document.querySelector('#todos');
ul.innerHTML = '';
for (const t of todos) {
  const li = document.createElement('li');
  li.textContent = `${t.completed ? '✅' : '⬜️'} ${t.text}`;
  ul.appendChild(li);
}
```

<!-- .element class="fragment" -->

Emphasis: Next week you’ll learn DOM properly. Today was the logic.

<!-- .element class="fragment" -->

---

## Wrap‑Up and Exit Ticket

- One sentence: what clicked about arrays or objects?
<!-- .element class="fragment" -->

- Confidence check: 1–5 on debugging comfort.
<!-- .element class="fragment" -->

- Prep: skim MDN on arrays/objects; try adding `editTodo(id, newText)` at home.
<!-- .element class="fragment" -->
