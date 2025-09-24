// ===================================================
// 🕵️‍♀️ DIGITAL DETECTIVE ACADEMY - SOLUTION KEY 🕵️‍♂️
// ===================================================
// This file contains complete solutions for all missions
// For instructor reference and student assistance

// ===================================================
// 🎯 MISSION 0: ACADEMY ORIENTATION - SOLUTION
// ===================================================
// This is automatically handled when students call:
detective.startInvestigation();


// ===================================================
// 🔍 MISSION 1: CRIME SCENE SETUP - SOLUTION
// ===================================================
function setupCrimeScene() {
  // 1. Use detective.log() to document that you've arrived at the scene
  detective.log("Detective arrived at crime scene - beginning investigation");

  // 2. Use detective.findClue() to record that you found a "muddy footprint"
  detective.findClue("muddy footprint near the back entrance");

  // 3. Use console.log() to display "Crime scene secured"
  console.log("Crime scene secured");
}

// Call the function
setupCrimeScene();


// ===================================================
// 🧪 MISSION 2: EVIDENCE COLLECTION - SOLUTION
// ===================================================
function interviewWitness() {
  const witnessName = "Sarah Chen";
  const timeOfCrime = "11:30 PM";
  const suspectDescription = "tall person in dark jacket";

  // Use console.log to examine each piece of information
  console.log("Witness name:", witnessName);
  console.log("Time of crime:", timeOfCrime);
  console.log("Suspect description:", suspectDescription);

  // Then use detective.collectEvidence() for each important detail
  detective.collectEvidence("Witness testimony from " + witnessName);
  detective.collectEvidence("Crime occurred at " + timeOfCrime);
  detective.collectEvidence("Suspect: " + suspectDescription);
}

// Call the function
interviewWitness();


// ===================================================
// 🎭 MISSION 3: SUSPECT SCREENING - SOLUTION
// ===================================================
const suspects = [
  { name: "Alex Kim", height: "tall", jacket: "dark", alibi: false },
  { name: "Morgan Lee", height: "short", jacket: "light", alibi: true },
  { name: "Casey Wong", height: "tall", jacket: "dark", alibi: false }
];

function screenSuspects() {
  // Loop through each suspect
  for (let i = 0; i < suspects.length; i++) {
    const suspect = suspects[i];

    console.log("Screening suspect:", suspect.name);

    // Check if they match the description AND have no alibi
    if (suspect.height === "tall" && suspect.jacket === "dark" && suspect.alibi === false) {
      detective.findClue("Person of interest identified: " + suspect.name);
      console.log(suspect.name + " matches witness description - no alibi!");
    } else {
      console.log(suspect.name + " cleared - doesn't match criteria");
    }
  }
}

// Call the function
screenSuspects();


// ===================================================
// 🧠 MISSION 4: ADVANCED DEDUCTIONS - SOLUTION
// ===================================================
function solveMuseumHeist() {
  const caseEvidence = {
    securityFootage: true,
    insiderAccess: true,
    expertKnowledge: true,
    nightShiftWorker: false,
    hasFinancialProblems: true
  };

  console.log("Analyzing museum heist evidence...");
  console.log("Security footage exists:", caseEvidence.securityFootage);
  console.log("Insider access:", caseEvidence.insiderAccess);
  console.log("Expert knowledge:", caseEvidence.expertKnowledge);
  console.log("Night shift worker:", caseEvidence.nightShiftWorker);
  console.log("Financial problems:", caseEvidence.hasFinancialProblems);

  // Check if thief meets ALL required conditions:
  // - Has insider access AND expert knowledge
  // - Works night shift OR has financial problems
  // - Security footage exists

  const hasRequiredAccess = caseEvidence.insiderAccess && caseEvidence.expertKnowledge;
  const hasMotive = caseEvidence.nightShiftWorker || caseEvidence.hasFinancialProblems;
  const hasEvidence = caseEvidence.securityFootage;

  console.log("Required access (insider && expert):", hasRequiredAccess);
  console.log("Has motive (night shift || financial problems):", hasMotive);
  console.log("Evidence available:", hasEvidence);

  if (hasRequiredAccess && hasMotive && hasEvidence) {
    console.log("All conditions met - case can be solved!");
    detective.collectEvidence("Museum heist case solved using logical deduction");
  } else {
    console.log("Insufficient evidence to solve case");
  }
}

// Call the function
solveMuseumHeist();


// ===================================================
// 🔄 MISSION 5: SYSTEMATIC INVESTIGATION - SOLUTION
// ===================================================
const witnesses = [
  "Emma Thompson", "John Davis", "Lisa Rodriguez", "Michael Brown", "Sarah Johnson"
];

function conductInterviews() {
  detective.log("Beginning systematic witness interviews");

  // Use a for loop to interview each witness
  for (let i = 0; i < witnesses.length; i++) {
    detective.log("Interviewing witness " + (i + 1) + ": " + witnesses[i]);
    console.log("Interview " + (i + 1) + " with " + witnesses[i] + " completed");
  }

  // After interviewing all witnesses, collect the final evidence
  detective.collectEvidence("All " + witnesses.length + " witness interviews completed");
  detective.log("Systematic interview process complete");
}

function searchForEvidence() {
  let roomsSearched = 0;
  let evidenceFound = false;
  const maxRooms = 5;

  detective.log("Beginning systematic evidence search");

  // Use a while loop to search rooms until evidence is found or max rooms reached
  while (roomsSearched < maxRooms && !evidenceFound) {
    roomsSearched++;
    detective.log("Searching room " + roomsSearched);

    // Each room has a 60% chance of containing evidence
    if (Math.random() > 0.4) {
      evidenceFound = true;
      detective.log("Evidence found in room " + roomsSearched + "!");
      detective.collectEvidence("Physical evidence discovered during systematic search");
    } else {
      detective.log("Room " + roomsSearched + " - no evidence found");
    }
  }

  if (!evidenceFound) {
    detective.log("Search completed - no evidence found in " + maxRooms + " rooms");
  }

  console.log("Evidence search complete. Rooms searched:", roomsSearched);
}

// Call the functions
conductInterviews();
searchForEvidence();


// ===================================================
// 🔐 MISSION 6: CODE BREAKER CHALLENGE - SOLUTION
// ===================================================
function crackPasscode() {
  const correctPasscode = Math.floor(Math.random() * 100) + 1; // Random number 1-100
  let attempts = 0;
  let maxAttempts = 7;
  let passcodecracked = false;

  detective.findClue("Passcode is between 1 and 100");
  detective.findClue("You have 7 attempts to crack it");

  console.log("Starting passcode cracking sequence...");
  console.log("Target passcode (for testing):", correctPasscode);

  // Simulate systematic guessing - could be made interactive
  const guesses = [50, 25, 75, 37, 62, 43, 56]; // Binary search approach

  for (let i = 0; i < guesses.length && attempts < maxAttempts && !passcodecracked; i++) {
    const guess = guesses[i];
    attempts++;

    console.log("Attempt " + attempts + ": Trying passcode " + guess);
    detective.log("Testing passcode: " + guess);

    if (guess === correctPasscode) {
      passcodecracked = true;
      console.log("SUCCESS! Passcode cracked in " + attempts + " attempts");
      detective.collectEvidence("Digital safe successfully opened");
    } else if (guess > correctPasscode) {
      console.log("Too high - trying lower number");
    } else {
      console.log("Too low - trying higher number");
    }
  }

  if (!passcodecracked) {
    console.log("FAILURE: Maximum attempts exceeded - alarm triggered!");
    detective.log("Code breaking attempt failed - investigating backup options");
  }
}

// Call the function
crackPasscode();


// ===================================================
// 📊 MISSION 7: THE FIZZBUZZ FILES - SOLUTION
// ===================================================
function decodeFizzBuzzMessage() {
  detective.findClue("Found encrypted notebook with numbers 1-30");
  detective.findClue("Pattern: Numbers divisible by 3 = 'FIZZ', by 5 = 'BUZZ', by both = 'FIZZBUZZ'");

  console.log("Decoding FizzBuzz message...");

  // Use a for loop to decode numbers 1-30
  for (let i = 1; i <= 30; i++) {
    let output = "";

    // IMPORTANT: Check the "both" condition first!
    if (i % 3 === 0 && i % 5 === 0) {
      output = "FIZZBUZZ";
    } else if (i % 3 === 0) {
      output = "FIZZ";
    } else if (i % 5 === 0) {
      output = "BUZZ";
    } else {
      output = i;
    }

    console.log(i + ": " + output);
  }

  detective.collectEvidence("FizzBuzz pattern successfully decoded - message revealed");
  console.log("Message decoding complete!");
}

// Call the function
decodeFizzBuzzMessage();


// ===================================================
// 💻 MISSION 8: CASE CLOSED INTERFACE - SOLUTION
// ===================================================
function presentFindings() {
  const caseReport = {
    suspect: "Multiple persons of interest identified",
    evidence: [
      "Witness testimonies collected",
      "Physical evidence documented",
      "Digital safe cracked",
      "Communication patterns decoded"
    ],
    solved: true
  };

  console.log("=== CASE REPORT ===");
  console.log("Primary Suspects:", caseReport.suspect);
  console.log("Evidence Collected:");

  for (let i = 0; i < caseReport.evidence.length; i++) {
    console.log("- " + caseReport.evidence[i]);
  }

  console.log("Case Status:", caseReport.solved ? "SOLVED" : "ONGOING");

  detective.collectEvidence("Comprehensive case report compiled");
  console.log("Case findings presented to the jury!");
}

// Call the function
presentFindings();


// ===================================================
// 🎓 GRADUATION CHALLENGE - SOLUTION
// ===================================================
function graduateFromAcademy() {
  console.log("🎉 Congratulations! You've mastered:");
  console.log("✅ Variables and basic JavaScript syntax");
  console.log("✅ Debugging with console.log");
  console.log("✅ Conditional statements (if/else)");
  console.log("✅ Logical operators (&&, ||, !)");
  console.log("✅ For loops and while loops");
  console.log("✅ Problem-solving and programming logic");
  console.log("🕵️‍♀️ Welcome to the elite Digital Detective force!");

  detective.collectEvidence("Digital Detective Academy graduation certificate earned");
}

// Call graduation
graduateFromAcademy();


// ===================================================
// 📝 INSTRUCTOR NOTES
// ===================================================
/*
TEACHING POINTS FOR EACH MISSION:

Mission 1: HTML + JS Development Workflow
- Emphasize the save → refresh → debug cycle
- Show how function calls work
- Introduce the concept of API methods (detective object)

Mission 2: Strategic Debugging with console.log
- Teach systematic debugging approach
- Show how to examine variables step by step
- Emphasize labeling console.log output

Mission 3: Comparison Operators & Conditionals
- Focus on exact equality (===) vs assignment (=)
- Show how to build complex conditions
- Practice with real-world screening scenarios

Mission 4: Logical Operators
- Distinguish between && (AND) and || (OR)
- Show how to combine multiple conditions
- Emphasize order of operations in complex logic

Mission 5: Loop Fundamentals
- Contrast for vs while loops
- When to use each type
- Show systematic processing patterns

Mission 6: Number Guessing Game Logic
- Introduce game state management
- Show how to handle user input conceptually
- Practice with win/lose conditions

Mission 7: The Classic FizzBuzz
- Critical: Explain why order matters in conditionals
- Show modulo operator (%) usage
- This pattern appears in job interviews!

COMMON STUDENT MISTAKES TO WATCH FOR:
1. Forgetting to call functions after defining them
2. Using = instead of === for comparison
3. Not understanding truthy/falsy values
4. Infinite loops (especially in while loops)
5. FizzBuzz: checking single conditions before combined ones
6. Case sensitivity in string comparisons
7. Forgetting to increment loop counters

DEBUGGING HELP:
- Students should use F12 → Console tab extensively
- Encourage liberal use of console.log for debugging
- Show how to read error messages
- Teach the importance of testing edge cases
*/