/* eslint-disable no-undef */
// ===================================================
// 🕵️‍♀️ DIGITAL DETECTIVE ACADEMY - CASE FILES 🕵️‍♂️
// ===================================================
// Detective, welcome to your training program!
// Complete each mission by writing JavaScript code.
// Save this file and refresh the browser to see your results.

// 📋 DETECTIVE TOOLKIT - Available Commands:
// detective.startInvestigation()     - Begin your first case
// detective.log(message)             - Add notes to your case file
// detective.findClue(clue)           - Record a discovered clue
// detective.collectEvidence(item)    - Collect physical evidence
// detective.checkProgress()          - Review your current progress

// 🎯 MISSION 1: ACADEMY ORIENTATION
// Your first task is to start your investigation.
// Uncomment and run the line below:

detective.startInvestigation();

console.log('Detective Academy case files loaded. Ready for investigation!');

// ===================================================
// 🔍 MISSION 2: CRIME SCENE SETUP
// ===================================================
// Learn the detective workflow: Write code → Save → Refresh → Debug
//
// TODO: Complete the function below to start your first investigation
function setupCrimeScene() {
  // 1. Use detective.log() to document that you've arrived at the scene
  // 2. Use detective.findClue() to record that you found a "muddy footprint"
  // 3. Use console.log() to display "Crime scene secured"

  // Write your code here:
  detective.log('Arrived at the crime scene.');
  detective.findClue('Muddy footprint');
  console.log('Crime scene secured');
}

// Uncomment the line below when you're ready to test:
setupCrimeScene();

// ===================================================
// 🧪 MISSION 3: EVIDENCE COLLECTION
// ===================================================
// Master debugging with console.log - your detective's magnifying glass!
//
// TODO: Debug the witness statement below - there are clues hidden in the logs
function interviewWitness() {
  const witnessName = 'Sarah Chen';
  const timeOfCrime = '11:30 PM';
  const suspectDescription = 'tall person in dark jacket';

  // Use console.log to examine each piece of information
  // Then use detective.collectEvidence() for each important detail

  // Your debugging code here:
  console.log('Witness Name:', witnessName);
  detective.collectEvidence(witnessName);
  console.log('Time of Crime:', timeOfCrime);
  detective.collectEvidence(timeOfCrime);
  console.log('Suspect Description:', suspectDescription);
  detective.collectEvidence(suspectDescription);
}
// Uncomment when ready:
interviewWitness();

// ===================================================
// 🎭 MISSION 4: SUSPECT SCREENING
// ===================================================
// Use conditionals to identify suspects based on witness descriptions
//
suspects = [...suspectDatabase];

// TODO: Complete the function to screen suspects
function screenSuspects() {
  // Loop through each suspect
  // Use if/else statements to check:
  // - Is the suspect tall?
  // - Are they wearing a dark jacket?
  // - Do they have an alibi?
  // If they match the description AND have no alibi, they're a person of interest!
  // Use detective.findClue() to record persons of interest
  // For each suspect screened, use detective.checkMissionCompletion()
  // Your screening code here:
  for (let i = 0; i < suspects.length; i++) {
    const suspect = suspects[i];

    console.log('Screening suspect:', suspect.name);

    // Check if they match the description AND have no alibi
    if (
      suspect.height === 'tall' &&
      suspect.jacket === 'dark' &&
      suspect.alibi === false
    ) {
      detective.findClue('Person of interest identified: ' + suspect.name);
      console.log(suspect.name + ' matches witness description - no alibi!');
    } else {
      console.log(suspect.name + " cleared - doesn't match criteria");
    }
    detective.checkMissionCompletion();
  }
}

// Uncomment when ready:
screenSuspects();

// ===================================================
// 🧠 MISSION 5: ADVANCED DEDUCTIONS
// ===================================================
// Use logical operators (&&, ||, !) to solve complex cases
//
// TODO: Solve the "Museum Heist" case
function solveMuseumHeist() {
  const caseEvidence = {
    securityFootage: true,
    insiderAccess: true,
    expertKnowledge: true,
    nightShiftWorker: false,
    hasFinancialProblems: true,
  };

  console.log('Analyzing museum heist evidence...');
  console.log('Security footage exists:', caseEvidence.securityFootage);
  console.log('Insider access:', caseEvidence.insiderAccess);
  console.log('Expert knowledge:', caseEvidence.expertKnowledge);
  console.log('Night shift worker:', caseEvidence.nightShiftWorker);
  console.log('Financial problems:', caseEvidence.hasFinancialProblems);

  const hasRequiredAccess =
    caseEvidence.insiderAccess && caseEvidence.expertKnowledge;
  const hasMotive =
    caseEvidence.nightShiftWorker || caseEvidence.hasFinancialProblems;
  const hasEvidence = caseEvidence.securityFootage;

  console.log('Required access (insider && expert):', hasRequiredAccess);
  console.log('Has motive (night shift || financial problems):', hasMotive);
  console.log('Evidence available:', hasEvidence);

  if (hasRequiredAccess && hasMotive && hasEvidence) {
    console.log('All conditions met - case can be solved!');
    detective.collectEvidence(
      'Museum heist case solved using logical deduction'
    );
  } else {
    console.log('Insufficient evidence to solve case');
  }

  // The thief must meet ALL of these conditions:
  // - Has insider access AND expert knowledge
  // - Works night shift OR has financial problems
  // - Security footage exists

  // Use logical operators to determine if we can solve the case
  // Log your deduction process with console.log

  // Your deduction code here:
}

// Uncomment when ready:
solveMuseumHeist();

// ===================================================
// 🔄 MISSION 6: SYSTEMATIC INVESTIGATION
// ===================================================
// Use loops to investigate multiple leads efficiently
//
witnesses = [
  'Emma Thompson',
  'John Davis',
  'Lisa Rodriguez',
  'Michael Brown',
  'Sarah Johnson',
];

// TODO: Interview all witnesses using a for loop
function conductInterviews() {
  // Use a for loop to interview each witness
  // Log each interview with detective.log()
  // After interviewing all witnesses, collect the final evidence
  // Your systematic investigation code here:
  detective.log('Beginning systematic witness interviews');

  // Use a for loop to interview each witness
  for (let i = 0; i < witnesses.length; i++) {
    detective.log('Interviewing witness ' + (i + 1) + ': ' + witnesses[i]);
    console.log(
      'Interview ' + (i + 1) + ' with ' + witnesses[i] + ' completed'
    );
  }

  // After interviewing all witnesses, collect the final evidence
  detective.collectEvidence(
    'All ' + witnesses.length + ' witness interviews completed'
  );
  detective.log('Systematic interview process complete');
}

// TODO: Keep investigating until you find the key evidence (while loop practice)
function searchForEvidence() {
  let roomsSearched = 0;
  let evidenceFound = false;
  let maxRooms = 5;

  // Use a while loop to search rooms until evidence is found or max rooms reached
  // Each room has a 60% chance of containing evidence: Math.random() > 0.4
  // Log each room search with detective.log()

  // Your evidence search code here:
  detective.log('Beginning systematic evidence search');

  // Use a while loop to search rooms until evidence is found or max rooms reached
  while (roomsSearched < maxRooms && !evidenceFound) {
    roomsSearched++;
    detective.log('Searching room ' + roomsSearched);

    // Each room has a 60% chance of containing evidence
    if (Math.random() > 0.4) {
      evidenceFound = true;
      detective.log('Evidence found in room ' + roomsSearched + '!');
      detective.collectEvidence(
        'Physical evidence discovered during systematic search'
      );
    } else {
      detective.log('Room ' + roomsSearched + ' - no evidence found');
    }
  }

  if (!evidenceFound) {
    detective.log(
      'Search completed - no evidence found in ' + maxRooms + ' rooms'
    );
  }

  console.log('Evidence search complete. Rooms searched:', roomsSearched);
}

// Uncomment when ready:
conductInterviews();
searchForEvidence();

// ===================================================
// 🔐 MISSION 7: CODE BREAKER CHALLENGE
// ===================================================
// Crack the suspect's phone passcode (Number Guessing Game)
//
// TODO: Create a passcode cracking function
// function crackPasscode() {
//   const correctPasscode = Math.floor(Math.random() * 100) + 1; // Random number 1-100
//   let attempts = 0;
//   let maxAttempts = 7;
//
//   // The detective has discovered these clues about the passcode:
//   detective.findClue("Passcode is between 1 and 100");
//   detective.findClue("You have 7 attempts to crack it");
//
//   // TODO: Create a guessing system that:
//   // 1. Makes guesses (you can hardcode a few guesses for testing)
//   // 2. Provides feedback if guess is too high/low
//   // 3. Tracks attempts
//   // 4. Logs the final result
//
//   // Your code cracking logic here:
//
// }

// Uncomment when ready:
// crackPasscode();

// ===================================================
// 📊 MISSION 8: THE FIZZBUZZ FILES
// ===================================================
// Decode the criminal's encrypted message pattern
//
// TODO: Decode the pattern in the suspect's notebook
// function decodeFizzBuzzMessage() {
//   detective.findClue("Found encrypted notebook with numbers 1-30");
//   detective.findClue("Pattern: Numbers divisible by 3 = 'FIZZ', by 5 = 'BUZZ', by both = 'FIZZBUZZ'");
//
//   // Use a for loop to decode numbers 1-30
//   // Apply the FizzBuzz rules to reveal the hidden message
//   // Log each decoded entry
//
//   // Your decoding logic here:
//
// }

// Uncomment when ready:
// decodeFizzBuzzMessage();

// ===================================================
// 💻 FINAL MISSION: CASE CLOSED INTERFACE
// ===================================================
// Present your findings through an interactive case summary
//
// TODO: Create functions that will work with HTML buttons (coming soon!)
// function presentFindings() {
//   const caseReport = {
//     suspect: "Unknown",
//     evidence: [],
//     solved: false
//   };
//
//   // Compile all your evidence
//   // Generate final case report
//   // This will connect to HTML buttons in the advanced mission!
//
//   detective.collectEvidence("Case report compiled");
//   console.log("Case findings presented to the jury!");
// }

// Uncomment when ready:
// presentFindings();

// ===================================================
// 🎓 GRADUATION CHALLENGE
// ===================================================
// Complete all missions above to unlock your detective badge!
//
// function graduateFromAcademy() {
//   console.log("🎉 Congratulations! You've mastered:");
//   console.log("✅ Variables and basic JavaScript syntax");
//   console.log("✅ Debugging with console.log");
//   console.log("✅ Conditional statements (if/else)");
//   console.log("✅ Logical operators (&&, ||, !)");
//   console.log("✅ For loops and while loops");
//   console.log("✅ Problem-solving and programming logic");
//   console.log("🕵️‍♀️ Welcome to the elite Digital Detective force!");
// }

// ===================================================
// 📚 DETECTIVE REFERENCE GUIDE
// ===================================================
/*

🔧 BASIC SYNTAX REMINDER:
- Variables: let name = "Detective"; const age = 30;
- Strings: "text in quotes"
- Numbers: 42, 3.14
- Booleans: true, false
- Arrays: [1, 2, 3] or ["a", "b", "c"]

🔍 CONDITIONALS:
if (condition) {
  // do something
} else if (anotherCondition) {
  // do something else
} else {
  // default action
}

🔗 LOGICAL OPERATORS:
&& = AND (both conditions must be true)
|| = OR (at least one condition must be true)
!  = NOT (flips true/false)

🔄 LOOPS:
for (let i = 0; i < 10; i++) {
  // repeat 10 times
}

while (condition) {
  // keep going while condition is true
}

🐛 DEBUGGING:
console.log(variable); // See what's inside a variable
console.log("Message:", variable); // Label your outputs
console.log("Reached this point"); // Track code execution

*/

// ===================================================
// Ready to start your detective training?
// Uncomment the missions one by one and solve each case!
// Remember: Save this file and refresh the browser after each change!
// ===================================================
