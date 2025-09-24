/* eslint-disable no-undef */
// Console Labyrinth: Student Code File
// Write your JavaScript code here to navigate through the labyrinth
// Each mission will guide you through different programming concepts
// Save this file and refresh the browser to execute your code

// Available commands:
// labyrinth.scan() - Activate scanners and show the map
// labyrinth.moveUp() - Move player up
// labyrinth.moveDown() - Move player down
// labyrinth.moveLeft() - Move player left
// labyrinth.moveRight() - Move player right
// labyrinth.isWallAhead(direction) - Check if there's a wall (returns true/false)
// labyrinth.hasBlocker(direction) - Check if there's debris blocking the path (returns true/false)
// labyrinth.clearBlocker(direction) - Clear debris from the path
// labyrinth.hasWater(direction) - Check if there's water blocking the path (returns true/false)
// labyrinth.jumpOver(direction) - Jump over water safely
// console.log(message) - Log a message

// Your code goes below this line:

labyrinth.scan();
labyrinth.moveDown();
if (labyrinth.hasBlocker('right')) {
  labyrinth.clearBlocker('right');
}
labyrinth.moveRight();
for (let i = 0; i < 4; i++) {
  labyrinth.moveDown();
}

for (let i = 0; i < 6; i++) {
  if (labyrinth.isWallAhead('right')) {
    break;
  } else {
    labyrinth.moveRight();
  }
}
for (let i = 0; i < 5; i++) {
  if (labyrinth.hasWater('down')) {
    labyrinth.jumpOver('down');
  }
  labyrinth.moveDown();
}
