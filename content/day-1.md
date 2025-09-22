### **Day 1: The Spark - An Introduction to JavaScript**

````markdown
# Course 2: JavaScript Fundamentals

## Day 1: The Spark

<p>Ahsan Ayaz</p>

---

## Let's talk about your projects...

You just built some amazing things with HTML and CSS.

Seriously, give yourselves a round of applause! 👏👏👏

--

### But let's be real for a second...

![CSS is awesome meme](https://i.imgflip.com/34WH0R.jpg)

Making things look good is hard, and you did it!

--

### What was missing?

You built the **skeleton** (HTML).
You chose the **clothes** (CSS).

But how do we make our creation... _think_? _act_? _do things_?

We need to give it a **brain**.

---

## Section 1: What IS JavaScript?

--

### JavaScript is the Brain

It's the language of the web that adds **interactivity** and **logic**.

- HTML: The Noun (The person, the button)
- CSS: The Adjective (The tall person, the red button)
- **JS: The Verb (The person _runs_, the button _submits_)**

--

### The Holy Trinity of Frontend

![Expanding Brain Meme for Web Dev](https://i.imgflip.com/79619h.jpg)

This is the moment we level up.

--

### What can you do with JS?

- Respond to user actions (clicks, scrolls, key presses)
- Change HTML and CSS on the fly
- Fetch data from servers (Weather, Movies, etc.)
- Create animations and games
- ...and so much more!

Basically, almost everything you _interact with_ on a website is powered by JavaScript.

--

### Our Goal for the Next 3 Days

We are not going to build a full-blown app in 3 days.

Our goal is to **learn the alphabet of programming**.

We'll learn the core building blocks so you can write any "story" you want later.

---

## Section 2: Our Playground

--

### The Browser Console

The console is your best friend. It's a direct line to the browser's JavaScript engine.

It's a place to:

1.  Experiment with code safely.
2.  See output from your program.
3.  Debug when things go wrong.

--

### Let's Open It!

<p class="fragment">Windows/Linux: `Ctrl` + `Shift` + `J`</p>
<p class="fragment">Mac: `Cmd` + `Option` + `J`</p>

It looks a little scary, but trust me, it's not.

--

### "Hello, World!"

This is a rite of passage for every programmer. Type this into the console and press Enter:

```js
console.log('Hello, World!');
```
````

`console.log()` is how we "print" things out. It's how we ask our program, "Hey, what's the value of this thing right now?"

--

### The Console is also a Calculator

Try typing these directly into the console:

```js
2 + 2;
// expected output: 4

50 * 3;
// expected output: 150

100 / 5 + 1;
// expected output: 21
```

The browser will solve it for you instantly!

---

## Section 3: Storing Information - Variables

--

### What is a variable?

Imagine you have a box. You can put something in the box and write a label on it.

**A variable is a labeled box for storing data.**

![Box Analogy](https://i.imgur.com/8xQ3o1a.png)

Instead of using the data directly, we can just refer to the label on the box.

--

### Creating Variables: `let` and `const`

We have two main types of "boxes".

1.  **`let`**: A standard box. You can change what's inside it later.
2.  **`const`**: A "constant" box. Once you put something in it, you can't change it. It's like you taped it shut.

```js
// Use 'let' for values you expect to change
let score = 0;
score = score + 10; // This is okay! The score is now 10.

// Use 'const' for values that should never change
const name = 'Ahsan';
// name = "Laura"; // This will cause an error!
```

**Rule of thumb: Always use `const` unless you know you will need to change the variable's value.**

--

### The Distracted Boyfriend Guide to `let` vs `const`

![Distracted Boyfriend Meme for let vs const](https://i.imgur.com/2O5Yf7N.png)

`let` can be reassigned to a new value.
`const` is loyal and will throw an error if you try.

---

## Section 4: The Types of Data

--

### Data Types

JavaScript needs to know what _kind_ of data it's working with. There are three main basic types we'll start with.

- **String**: Text. Anything in quotes.
- **Number**: ...Numbers. With or without decimals.
- **Boolean**: `true` or `false`. A light switch.

--

### 1. String

Used for text. You can use single `' '` or double `" "` quotes.

```js
const firstName = 'Duygu';
let message = 'Welcome to the bootcamp!';
```

--

### 2. Number

Used for any kind of number.

```js
const students = 25;
let price = 99.99;
```

--

### 3. Boolean

Used for true/false logic.

```js
const isLearning = true;
let hasFinished = false;
```

--

### The `typeof` Operator

How can we check the data type of a variable? Use the `typeof` operator!

```js
const name = 'Andress';
typeof name;
// expected output: "string"

const age = 30;
typeof age;
// expected output: "number"

const isInstructor = true;
typeof isInstructor;
// expected output: "boolean"
```

This is a super useful tool for debugging!

---

## Section 5: Let's Do Something!

--

### Operators

We can use operators to perform actions with our variables.

```js
let a = 10;
let b = 5;

// Math operators
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0 (remainder after division)
```

--

### The Weird Part: String Concatenation

What happens when you use `+` with strings? It joins them together!

```js
const firstName = 'Zico';
const lastName = 'Silva';

const fullName = firstName + ' ' + lastName;

console.log(fullName);
// expected output: "Zico Silva"
```

--

### JavaScript Math Can Be Funny

Watch out for this! It gets every new developer.

![JS Math Meme](https://i.redd.it/s7e63b3671f31.jpg)

If you add a Number and a String, JavaScript will convert the Number to a String and join them.

```js
const number1 = 10;
const string1 = '5';

console.log(number1 + string1);
// expected output: "105"  <-- It's a string!
```

--

### Comparison Operators

How do we compare values? JavaScript gives us several comparison operators:

```js
// Equality
10 === 10; // true (strictly equals)
10 !== 5;  // true (not equals)
```

--

### Size Comparisons

```js
10 > 5;   // true (greater than)
5 < 10;   // true (less than)
10 >= 10; // true (greater than or equal)
5 <= 10;  // true (less than or equal)
```

These will be super useful for checking conditions!

--

### The `===` Operator

**The `===` operator checks two things:**
1.  Is the **value** the same?
2.  Is the **data type** the same?

```js
10 === 10; // true
'hello' === 'hello'; // true
10 === '10'; // false! (Value is the same, but type is different)
```

**Always use `===` for checking equality.** It's safer.

---

## Your Mission, Should You Choose to Accept It...

--

### What We've Learned Today

**The Building Blocks of Programming:**

- **JavaScript** is the brain of web pages
- **Variables** (`let` and `const`) store our data
- **Data Types** tell us what kind of information we have
- **Operators** let us work with and compare data

--

### Working with Multiple Variables

In real programming, you'll combine variables to create something meaningful:

```js
const firstName = 'Luke';
const lastName = 'Skywalker';
const age = 23;

// Combine them with the + operator
const fullName = firstName + ' ' + lastName;
console.log(fullName); // "Luke Skywalker"
```

This is the foundation of all programming logic!

--

### Ready for Your Mission?

Today's lab will put everything together in a **Space Firefighter Command** scenario.

You'll command a spaceship using:
- Variables to store mission data
- Math operators for calculations
- Comparison operators for safety checks
- String concatenation for reports

**No prior code knowledge needed - just follow the missions step by step!**

---

## Time to Launch! 🚀

Open the Space Firefighter lab and let's start coding!

--

## Questions?

```

```
