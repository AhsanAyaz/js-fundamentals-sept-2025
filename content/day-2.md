## Day 2: The Logic - Making Decisions and Repetition

---

### Welcome Back, Code Warriors!

Yesterday you learned the **alphabet** of programming.

<!-- .element class="fragment" -->

Today we level up: **real web development** + **programming logic**.

<!-- .element class="fragment" -->

<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VzYmt6aTl4cG55dXE3ZW91ZmRmOTRta29ubTB1OWI5a2ozZ3FyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlvtIPzPdt2usKs/giphy.gif" style="height: 300px" >

<!-- .element class="fragment" -->

--

### The Big Leap: Console → Real Web Pages

Yesterday: Browser console playground

<!-- .element class="fragment" -->

Today: **Actual HTML pages with JavaScript files!**

<!-- .element class="fragment" -->

```js
// Yesterday: Typing in console
console.log('Hello, World!');

// Today: Writing in .js files that power web pages!
```

<!-- .element class="fragment" -->

--

### Why This Matters

The console was training wheels.

<!-- .element class="fragment" -->

Now you're ready for the **real development workflow** that professionals use:

<!-- .element class="fragment" -->

1. **Write HTML** for structure
<!-- .element class="fragment" -->

2. **Write JavaScript** in separate files
<!-- .element class="fragment" -->

3. **Connect them together**
<!-- .element class="fragment" -->

4. **Debug when things break** (and they will!)
<!-- .element class="fragment" -->

---

## Section 1: Setting Up Your Development Environment

--

### Creating Your First HTML + JavaScript Project

Let's build a proper project structure:

```
my-project/
├── index.html
└── script.js
```

<!-- .element class="fragment" -->

**Step 1:** Create a folder called `my-project`

<!-- .element class="fragment" -->

**Step 2:** Create these two files inside it

<!-- .element class="fragment" -->

--

### The HTML File: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My JavaScript Project</title>
</head>
<body>
    <h1>Hello from HTML!</h1>

    <!-- This is where the magic happens -->
    <script src="script.js"></script>
</body>
</html>
```

<!-- .element class="fragment" -->

The `<script src="script.js">` tag **connects** your HTML to your JavaScript!

<!-- .element class="fragment" -->

--

### The JavaScript File: `script.js`

```js
// This runs when the page loads!
console.log('Hello from JavaScript!');

// Yesterday's concepts still work here
const name = 'Student';
const message = 'Welcome to real web development, ' + name;
console.log(message);
```

<!-- .element class="fragment" -->

**Now:** Double-click `index.html` to open it in your browser

<!-- .element class="fragment" -->

**Then:** Press `F12` to see your console output!

<!-- .element class="fragment" -->

--

### Inline vs External JavaScript

**Option 1: Inline (inside HTML)**
```html
<script>
    console.log('JavaScript inside HTML');
</script>
```

<!-- .element class="fragment" -->

**Option 2: External (separate file)**
```html
<script src="script.js"></script>
```

<!-- .element class="fragment" -->

**Best Practice:** Use external files for better organization!

<!-- .element class="fragment" -->

--

### Your Development Workflow

1. **Write code** in VS Code
<!-- .element class="fragment" -->

2. **Save the file** (Ctrl+S / Cmd+S)
<!-- .element class="fragment" -->

3. **Refresh browser** (F5) to see changes
<!-- .element class="fragment" -->

4. **Check console** (F12) for output and errors
<!-- .element class="fragment" -->

**Pro tip:** Keep VS Code and browser open side by side!

<!-- .element class="fragment" -->

---

## Section 2: Debugging - Your New Superpower

--

### When Things Go Wrong (And They Will!)

<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VzYmt6aTl4cG55dXE3ZW91ZmRmOTRta29ubTB1OWI5a2ozZ3FyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlVi0wvTdl5URcQ/giphy.gif" style="height: 300px" >

<!-- .element class="fragment" -->

Everyone writes bugs. **Good developers know how to find and fix them.**

<!-- .element class="fragment" -->

--

### Your Debugging Toolkit

**Tool #1: `console.log()` - Your Best Friend**

```js
const age = 25;
console.log('The age is:', age);

// Use it to track what's happening
const canVote = age >= 18;
console.log('Can vote:', canVote);
```

<!-- .element class="fragment" -->

**When in doubt, `console.log()` it out!**

<!-- .element class="fragment" -->

--

### Tool #2: Reading Error Messages

**Errors appear in red in the console:**

```js
// This has a typo - 'consolee' instead of 'console'
consolee.log('Hello');
```

<!-- .element class="fragment" -->

**Error message:**
```
ReferenceError: consolee is not defined
    at script.js:2
```

<!-- .element class="fragment" -->

**Translation:** "I don't know what 'consolee' is, check line 2 in script.js"

<!-- .element class="fragment" -->

--

### Tool #3: Browser DevTools

**Press F12 to open DevTools:**

1. **Console tab** - See output and errors
<!-- .element class="fragment" -->

2. **Sources tab** - See your code files
<!-- .element class="fragment" -->

3. **Elements tab** - See your HTML
<!-- .element class="fragment" -->

**Start with Console - it's your main debugging window!**

<!-- .element class="fragment" -->

--

### Tool #4: Breakpoints (Advanced)

**What's a breakpoint?** A pause button for your code.

<!-- .element class="fragment" -->

**Method 1:** Add `debugger;` in your code
```js
const age = 25;
debugger;  // Code pauses here
const canVote = age >= 18;
```

<!-- .element class="fragment" -->

**Method 2:** Click line numbers in DevTools Sources tab

<!-- .element class="fragment" style="font-size: 0.7em;" -->

**When to use:** When `console.log()` isn't enough


<!-- .element class="fragment" style="font-size: 0.7em;" -->


--

### Common Beginner Mistakes

**Missing quotes:**
```js
// Wrong
const name = Alex;  // Error!

// Right
const name = 'Alex';
```

<!-- .element class="fragment" -->

**Typos in variable names:**
```js
const userName = 'Alex';
console.log(username);  // Error! (wrong case)
```

<!-- .element class="fragment" -->

**Wrong file path:**
```html
<!-- Wrong file name -->
<script src="scripts.js"></script>
```

<!-- .element class="fragment" -->

---

## Section 3: Making Decisions with Conditionals

--

### The Power of "If"

Every smart decision starts with a question:

<!-- .element class="fragment" -->

"**IF** this is true, **THEN** do that"

<!-- .element class="fragment" -->

```js
if (weather === 'rainy') {
  console.log('Take an umbrella!');
}
```

<!-- .element class="fragment" -->

This is how we give our programs **intelligence**.

<!-- .element class="fragment" -->

--

### The Basic `if` Statement

```js
const age = 20;

if (age >= 18) {
  console.log('You can vote!');
}
```

**Anatomy of an `if` statement:**

<!-- .element class="fragment" -->

1. The keyword `if`
<!-- .element class="fragment" -->

2. A condition in parentheses `(age >= 18)`
<!-- .element class="fragment" -->

3. Code to run in curly braces `{ }`
<!-- .element class="fragment" -->

--

### Adding an Alternative: `else`

What if the condition is false? We need a backup plan:

```js
const age = 16;

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('Wait a few more years!');
}
```

<!-- .element class="fragment" -->

**Every `if` can have an `else` - but it's optional.**

<!-- .element class="fragment" -->

--

### Multiple Choices: `else if`

Sometimes we need more than two options:

```js
const grade = 85;

if (grade >= 90) {
  console.log('Grade: A');
} else if (grade >= 80) {
  console.log('Grade: B');
} else if (grade >= 70) {
  console.log('Grade: C');
} else {
  console.log('Grade: F');
}
```

<!-- .element class="fragment" -->

**JavaScript checks each condition in order and stops at the first true one.**

<!-- .element class="fragment" -->

--

<div style="display: flex; gap: 8px; align-items: center;">
<h3>The Decision Tree</h3>
<img src="assets/images/decision_tree.png" style="height: 600px;" >
<!-- .element class="fragment" -->
</div>
--

This is how your program "thinks" through decisions.

--

### Comparison Operators Refresher

Remember these from yesterday? They're the **questions** we ask:

```js
// Equality
10 === 10;    // true
10 !== 5;     // true (not equal)

// Size comparisons
10 > 5;       // true (greater than)
5 < 10;       // true (less than)
10 >= 10;     // true (greater than or equal)
5 <= 10;      // true (less than or equal)
```

<!-- .element class="fragment" -->

--

### Logical Operators: AND, OR, NOT

Sometimes we need to combine conditions:

```js
const age = 25;
const hasLicense = true;

// AND - both must be true
if (age >= 18 && hasLicense === true) {
  console.log('You can drive!');
}

// OR - at least one must be true
if (age < 16 || hasLicense === false) {
  console.log('No driving for you!');
}

// NOT - flip true/false
if (!hasLicense) {
  console.log('Get a license first!');
}
```

<!-- .element class="fragment" -->

--

### Let's Practice: Traffic Light in a Real File!

**Create this in your `script.js`:**
<!-- .element style="font-size: 0.7em;" -->

```js
// Traffic light simulator
const lightColor = 'green';
console.log('Current light:', lightColor);

if (lightColor === 'red') {
  console.log('🛑 STOP!');
} else if (lightColor === 'yellow') {
  console.log('🟡 Slow down!');
} else if (lightColor === 'green') {
  console.log('🟢 Go!');
} else {
  console.log('⚠️ Broken light - be careful!');
}
```

**Try this:** Change `lightColor` to different values, save, and refresh!


<!-- .element style="font-size: 0.7em;" -->


---

## Section 4: Loops - Doing Things Over and Over

--

### Why Do We Need Loops?

Imagine you want to count from 1 to 100...

<!-- .element class="fragment" -->

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// ... 95 more lines?!
console.log(100);
```

<!-- .element class="fragment" -->

--

### Or..

<img src="assets/images/ly3000.jpg" style="height: 500px;">
<!-- .element class="fragment" -->

--
```js
console.log('I love you 1');
console.log('I love you 2');
console.log('I love you 3');
console.log('I love you 4');
console.log('I love you 5');
// ... 2994 more lines?!
console.log('I love you 3000');
```

--
<img src="assets/images/typing_crying.gif" style="height: 500px;">

There has to be a better way!

<!-- .element class="fragment" -->

--

**Enter: LOOPS** 🔄

<!-- .element class="fragment" -->

--

### The `for` Loop: Your Counting Robot

Think of a `for` loop as **giving instructions to a robot**:

<!-- .element class="fragment" -->

1. **Start here** (initialization)
<!-- .element class="fragment" -->

2. **Keep going while this is true** (condition)
<!-- .element class="fragment" -->

3. **After each step, do this** (increment)
<!-- .element class="fragment" -->

--

```js
for (let i = 1; i <= 5; i++) {
  console.log('Count: ' + i);
}
```
--

<img src="assets/images/for_loop.png" style="height: 500px; object-fit: contain;">

--

### Breaking Down the `for` Loop

```js
for (let i = 1; i <= 5; i++) {
  console.log('Count: ' + i);
}
```

**Part 1:** `let i = 1` - "Start with i = 1"

<!-- .element class="fragment" -->

**Part 2:** `i <= 5` - "Keep going while i is 5 or less"

<!-- .element class="fragment" -->

**Part 3:** `i++` - "After each round, add 1 to i"

<!-- .element class="fragment" -->

**The body:** What happens each time through the loop

<!-- .element class="fragment" -->

--

### What `i++` Really Means

`i++` is shorthand for `i = i + 1`

```js
let count = 0;
count++;        // count is now 1
count++;        // count is now 2
count++;        // count is now 3

// Same as:
count = count + 1;
```

<!-- .element class="fragment" -->

**It's the most common way to "step forward" in a loop.**

<!-- .element class="fragment" -->

--

### Loop in Action: Step by Step

**Add this to your `script.js` and watch it in the console:**

```js
console.log('Starting loop...');

for (let i = 1; i <= 3; i++) {
  console.log('Step ' + i);
}

console.log('Loop finished!');
```
--

**What happens:**

<!-- .element class="fragment" -->

1. `i = 1`, check `1 <= 3` ✓, print "Step 1", then `i++` → `i = 2`
<!-- .element class="fragment" -->

2. `i = 2`, check `2 <= 3` ✓, print "Step 2", then `i++` → `i = 3`
<!-- .element class="fragment" -->

3. `i = 3`, check `3 <= 3` ✓, print "Step 3", then `i++` → `i = 4`
<!-- .element class="fragment" -->

4. `i = 4`, check `4 <= 3` ✗, **STOP!**
<!-- .element class="fragment" -->

--

### Common Loop Patterns

**Counting up:**
```js
for (let i = 1; i <= 10; i++) {
  console.log(i);  // 1, 2, 3, ..., 10
}
```

<!-- .element class="fragment" -->

**Counting down:**
```js
for (let i = 10; i >= 1; i--) {
  console.log(i);  // 10, 9, 8, ..., 1
}
```

<!-- .element class="fragment" -->

**Even numbers only:**
```js
for (let i = 2; i <= 10; i += 2) {
  console.log(i);  // 2, 4, 6, 8, 10
}
```

<!-- .element class="fragment" -->

--

### Let's Build Something: Multiplication Table

**Create a new file called `multiplication.js` and try this:**

```js
const number = 7;

console.log('=== Multiplication Table for ' + number + ' ===');

for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(number + ' x ' + i + ' = ' + result);
}

console.log('=== Table complete! ===');
```

<!-- .element class="fragment" -->

**Don't forget:** Update your HTML to use the new file: `<script src="multiplication.js"></script>`

<!-- .element class="fragment" style="font-size: 0.7em;" -->

--

### The `while` Loop: When You Don't Know How Many Times

Sometimes you don't know exactly how many times to loop:

```js
// Simulating a password system
let attempts = 0;
let maxAttempts = 3;

while (attempts < maxAttempts) {
  console.log('Attempt ' + (attempts + 1) + ' of ' + maxAttempts);
  attempts++;
}

console.log('Maximum attempts reached!');
```

<!-- .element class="fragment" -->

**Use `while` when the number of iterations depends on a condition.**

<!-- .element class="fragment" style="font-size: 0.7em" -->

---

## Section 5: Putting It All Together

--

### Combining Conditionals and Loops

The real power comes from combining these concepts in your JS files:

```js
// Create even-odd-checker.js
console.log('=== Even/Odd Checker ===');

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even 🔢');
  } else {
    console.log(i + ' is odd 🔣');
  }
}

console.log('=== Analysis complete! ===');
```

<!-- .element class="fragment" -->

This checks each number from 1 to 10 and tells us if it's even or odd!

<!-- .element class="fragment" style="font-size: 0.7em;" -->

--

### The Classic: FizzBuzz Challenge

A programming challenge that uses everything we've learned:
<!-- .element style="font-size: 0.7em;" -->

```js
// Create fizzbuzz.js
console.log('=== FizzBuzz Challenge ===');

for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz 🎉');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

console.log('=== Challenge complete! ===');
```

<!-- .element class="fragment" -->

**Rules:** Numbers divisible by 3 = "Fizz", by 5 = "Buzz", by both = "FizzBuzz"

<!-- .element class="fragment" style="font-size: 0.7em;" -->
--

### What We've Learned: The Logic

**Decision Making:**

<!-- .element class="fragment" -->

- **`if/else`** - Choose different paths based on conditions
<!-- .element class="fragment" -->

- **Comparison operators** - Ask questions about our data
<!-- .element class="fragment" -->

- **Logical operators** - Combine multiple conditions
<!-- .element class="fragment" -->

--

**Repetition:**

- **`for` loops** - When you know how many times
<!-- .element class="fragment" -->

- **`while` loops** - When you loop until a condition changes
<!-- .element class="fragment" -->

--

### The Programming Mindset

You now think like a programmer:

<!-- .element class="fragment" -->

1. **Break problems into steps**
<!-- .element class="fragment" -->

2. **Ask yes/no questions** (conditionals)
<!-- .element class="fragment" -->

3. **Repeat actions** (loops)
<!-- .element class="fragment" -->

4. **Combine simple ideas** to solve complex problems
<!-- .element class="fragment" -->

This is the foundation of **ALL** programming!

<!-- .element class="fragment" -->

---

## Your Afternoon Mission

--

### Two Epic Coding Adventures Await!

Choose your path through immersive JavaScript challenges:

<!-- .element class="fragment" -->

**🚀 Console Labyrinth** - Navigate through space using programming logic
<!-- .element class="fragment" -->

**🕵️‍♀️ Digital Detective Academy** - Solve crimes using debugging and logic
<!-- .element class="fragment" -->

--
<!-- .slide: style="scale: 0.8;" -->

### Lab 1: Console Labyrinth

Master the fundamentals through space navigation:

<!-- .element class="fragment" -->

- **Movement Logic** - `labyrinth.moveDown()`, `labyrinth.scan()`
<!-- .element class="fragment" -->

- **Conditional Navigation** - `if (labyrinth.isWallAhead())`
<!-- .element class="fragment" -->

- **Loop Control** - `for` loops with `break` statements
<!-- .element class="fragment" -->

- **Defensive Programming** - Handle obstacles and hazards
<!-- .element class="fragment" -->

--
<!-- .slide: style="scale: 0.8;" -->

### Lab 2: Digital Detective Academy

Solve crimes while mastering advanced concepts:

<!-- .element class="fragment" -->

- **HTML + JS Workflow** - Real development process in `main.js`
<!-- .element class="fragment" -->

- **Strategic Debugging** - `console.log()` like a detective's magnifying glass
<!-- .element class="fragment" -->

- **Complex Logic** - Logical operators (`&&`, `||`) for case deductions
<!-- .element class="fragment" -->

- **Classic Challenges** - Number guessing, FizzBuzz, systematic processing
<!-- .element class="fragment" -->

--

### Pair Programming: Detective Partners 🤝
<!-- .slide: style="scale: 0.8;" -->

Work together through both labs:

<!-- .element class="fragment" -->

**Navigation Challenges** - Help each other escape the labyrinth

<!-- .element class="fragment" -->

**Crime Solving** - Collaborate on detective missions and evidence analysis

<!-- .element class="fragment" -->

**Debugging Partners** - Share console.log strategies and troubleshooting

<!-- .element class="fragment" -->

**Code Review** - Compare solutions and learn from each other's approaches

<!-- .element class="fragment" -->

--

### Remember: It's Okay to Struggle

<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VzYmt6aTl4cG55dXE3ZW91ZmRmOTRta29ubTB1OWI5a2ozZ3FyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlVi0wvTdl5URcQ/giphy.gif" style="height: 300px" >

<!-- .element class="fragment" -->

**Struggling means you're learning!**

<!-- .element class="fragment" -->

Every programmer has been exactly where you are right now.

<!-- .element class="fragment" -->

---

## Ready to Think Like a Computer?

Let's start coding! 🚀

--

## Questions?

```

```

```

```

```

```
