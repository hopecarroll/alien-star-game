# alien-star-game-p5.js-
assignment-3-hopecarroll created by GitHub Classroom Challenge 1: Using a function I created a green alien sprite to be used as the "catcher" for my game. I created the alien using the color "yellowgreen" with an ellipse for the head, lines and ellipses for the ears, a rect for the body and two ellipses and an arc for the face. The face of the alien features are black as well as the background because the alien is in outerspace. I then used the mouseX command so my alien moves back and forth horizontally following my mouse. 
Link to sketch: https://editor.p5js.org/hopecarroll/sketches/i_Vo2ESHQ

Challenge 2: Using an if statement I added to my green alien sprite so when the MouseIsPressed command is called the ears of my alien turn from yellowgreen to yellow when I press my mouse on the canvas. I created this function by copy and pasting my original code from the alien ears into the if statement and then adding an else statement with the same code expect for the stroke color to turn the ears yellow. 
Link to sketch: https://editor.p5js.org/hopecarroll/sketches/m8V9Dn6OD

Challenge 3: Using a function I created a green star to be used as the "seed" that my alien will catch for my game. I then called the star function and assigned the variables starX and starY which I called earlier and assigned random (400) to both of them so the star will start in a random position each time I press play. I also created the variable starSpeed and added that to my starY variable to make it move vertically down.
Link to sketch: https://editor.p5js.org/hopecarroll/sketches/5caIp6YXd

Challenge 4: Using a mousePressed function I added onto my previous code to insetad of having to press play everytime I wanted the star to fall I only have to press the mouse, I also set the boolean variable "createStar" to allow this to occur. I then put an if statement and set the boolean variable "createStar" equal to false in the draw function to ensure that a new star will be recreated once the star hits the bottom of the canvas. 
Link to sketch: https://editor.p5js.org/hopecarroll/sketches/qMU4vc_hY

Challenge 5: Using an if statement I set the already defined p5.js variable "dist" which says that if the distance of the star and the alien is less than or equal to 600 pixels the already defined "alienSprite" function will turn yellow to show that the player of the game successfully hit the target. 
Link to sketch: https://editor.p5js.org/hopecarroll/sketches/5IrP4GgCg
