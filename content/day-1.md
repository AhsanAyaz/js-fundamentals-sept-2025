## Day 1: An Introduction to JavaScript

---

### Let's talk about your projects...

You just built some amazing things with HTML and CSS.

Seriously, give yourselves a round of applause! 👏👏👏

--

### But let's be real for a second...

<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VzYmt6aTl4cG55dXE3ZW91ZmRmOTRta29ubTB1OWI5a2ozZ3FyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13FrpeVH09Zrb2/giphy.gif" style="height: 400px" >

Making things look good is hard, and you did it!

--

### What was missing?

You built the **skeleton** (HTML).

<!-- .element class="fragment" -->

You chose the **clothes** (CSS).

<!-- .element class="fragment" -->

But how do we make our creation... _think_? _act_? _do things_?

<!-- .element class="fragment" -->

We need to give it a **brain**.

<!-- .element class="fragment" -->

---

## Section 1: What IS JavaScript?

--

### JavaScript is the Brain

It's the language of the web that adds **interactivity** and **logic**.

- HTML: The Noun (The person, the button)
- CSS: The Adjective (The tall person, the red button)
- **JS: The Verb (The person _runs_, the button _submits_)**

--

#### The hard problem of consciousness

![Expanding Brain Meme for Web Dev](assets/images/expanding_brain.jpg)

<!-- .element style="height: 500px;" -->

This is the moment we level up.

--

### What can you do with JS?

- Respond to user actions (clicks, scrolls, key presses)
<!-- .element class="fragment" -->
- Change HTML and CSS on the fly
<!-- .element class="fragment" -->
- Fetch data from servers (Weather, Movies, etc.)
<!-- .element class="fragment" -->
- Create animations and games
<!-- .element class="fragment" -->
- ...and so much more!
<!-- .element class="fragment" -->

Basically, almost everything you _interact with_ on a website is powered by JavaScript.

<!-- .element class="fragment" -->

--

### Our Goal for the Next 3 Days

We are not going to build a full-blown app in 3 days.

<!-- .element class="fragment" -->

Our goal is to **learn the alphabet of programming**.

<!-- .element class="fragment" -->

We'll learn the core building blocks so you can write any "story" you want later.

<!-- .element class="fragment" -->

---

## Section 2: Our Playground

--

### The Browser Console

The console is your best friend. It's a direct line to the browser's JavaScript engine.

It's a place to:

1.  Experiment with code safely.
<!-- .element class="fragment" -->
2.  See output from your program.
<!-- .element class="fragment" -->
3.  Debug when things go wrong.
<!-- .element class="fragment" -->

--

### Let's Open It!

<p class="fragment">Windows/Linux: `Ctrl` + `Shift` + `J`</p>
<p class="fragment">Mac: `Cmd` + `Option` + `J`</p>

It looks a little scary, but trust me, it's not.

<!-- .element class="fragment" -->

--

### "Hello, World!"

This is a rite of passage for every programmer. Type this into the console and press Enter:

```js
console.log('Hello, World!');
```

`console.log()` is how we "print" things out. It's how we ask our program, "Hey, what's the value of this thing right now?"

<!-- .element class="fragment" style="font-size: 24px;" -->

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

<!-- .element class="fragment" -->

The browser will solve it for you instantly!

<!-- .element class="fragment"  -->

---

## Section 3: Storing Information - Variables

--

### What is a variable?

Imagine you have a box. You can put something in the box and write a label on it.

<!-- .element class="fragment" style="font-size: 24px;" -->

**A variable is a labeled box for storing data.**

<!-- .element class="fragment" style="font-size: 24px;" -->

![Variables](assets/images/variables.png)

<!-- .element class="fragment" style="height: 500px;"  -->

--

### Creating Variables: `let` and `const`

We have two main types of "boxes".

1.  **`let`**: A standard box. You can change what's inside it later.
<!-- .element class="fragment"  -->

2.  **`const`**: A "constant" box. Once you put something in it, you can't change it. It's like you taped it shut.
<!-- .element class="fragment"  -->

--

```js
// Use 'let' for values you expect to change
let score = 0;
score = score + 10; // This is okay! The score is now 10.

// Use 'const' for values that should never change
const name = 'Ahsan';
// name = "Laura"; // This will cause an error!
```

**Rule of thumb: Always use `const` unless you know you will need to change the variable's value.**

<!-- .element class="fragment"  -->

---

## Section 4: The Types of Data

--

### Data Types

JavaScript needs to know what _kind_ of data it's working with. There are three main basic types we'll start with.

- **String**: Text. Anything in quotes.
<!-- .element class="fragment"  -->

- **Number**: ...Numbers. With or without decimals.
<!-- .element class="fragment"  -->

- **Boolean**: `true` or `false`. A light switch.
<!-- .element class="fragment"  -->

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

<!-- .element class="fragment"  -->

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

<!-- .element class="fragment"  -->

This is a super useful tool for debugging!

<!-- .element class="fragment"  -->

---

## Section 5: Let's Do Something!

--

### Operators

We can use operators to perform actions with our variables.

<!-- .element class="fragment"  -->

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

<!-- .element class="fragment"  -->

--

### The Weird Part: String Concatenation

What happens when you use `+` with strings? It joins them together!

<!-- .element class="fragment"  -->

```js
const firstName = 'Zico';
const lastName = 'Silva';

const fullName = firstName + ' ' + lastName;

console.log(fullName);
// expected output: "Zico Silva"
```

<!-- .element class="fragment"  -->

--

### JavaScript Math Can Be Funny

Watch out for this! It gets every new developer.

<!-- .element class="fragment"  -->

![JS Math Meme](assets/images/math_meme.webp)

<!-- .element class="fragment"  -->

--

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

<!-- .element class="fragment"  -->

```js
// Equality
10 === 10; // true (strictly equals)
10 !== 5; // true (not equals)
```

<!-- .element class="fragment"  -->

--

### Size Comparisons

```js
10 > 5; // true (greater than)
5 < 10; // true (less than)
10 >= 10; // true (greater than or equal)
5 <= 10; // true (less than or equal)
```

<!-- .element class="fragment"  -->

These will be super useful for checking conditions!

<!-- .element class="fragment"  -->

--

### The `===` Operator

**The `===` operator checks two things:**

1.  Is the **value** the same?
<!-- .element class="fragment"  -->

2.  Is the **data type** the same?
<!-- .element class="fragment"  -->

```js
10 === 10; // true
'hello' === 'hello'; // true
10 === '10'; // false! (Value is the same, but type is different)
```

<!-- .element class="fragment"  -->

**Always use `===` for checking equality.** It's safer.

<!-- .element class="fragment"  -->

---

## Your Mission, Should You Choose to Accept It...

--

### What We've Learned Today

**The Building Blocks of Programming:**

<!-- .element class="fragment"  -->

- **JavaScript** is the brain of web pages
<!-- .element class="fragment"  -->

- **Variables** (`let` and `const`) store our data
<!-- .element class="fragment"  -->

- **Data Types** tell us what kind of information we have
<!-- .element class="fragment"  -->

- **Operators** let us work with and compare data
<!-- .element class="fragment"  -->

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

```

```
