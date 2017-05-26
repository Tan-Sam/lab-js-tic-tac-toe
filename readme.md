# Tic Tac Toe Javascript

## Introduction

For this lab, you'll be building a tic tac toe game in HTML,
                                                       CSS, and
                                                       pure JavaScript.
## Exercise
#### Requirements

- click on different squares to make a move
- Each click alternate between marking an `X` and `O`
- Upon marking of an individual cell, use
  !JavaScript to add a class to each cell to display separate colors

- A cell cannnot be played once marked
- Add a reset button that will clear the contents of the board

---

__tips/hints__ :

 - Construct a `index.html`.
  Add HTML tags, `script` and `link` tags to link JavaScript and CSS.

 - Construct the gameboard.
   The gameboard page should include 3x3 grid and a reset button.
   Using `id` and `class` on clickable elements will help wire
   this up in JavaScript afterwards.

 - JavaScript portion:
   * Locate the element first to use. Think about
      using `document.getElementById`,
            `document.getElementsByClassName` or something similar
    to locate your target elements. Try this in your console to make sure your selection works.

   * After finding the elements, start writing logic to listen for
      `click` events on those elements

   * You will also need a variable to keep track of moves - this
      will be used to indicate whether or not to draw an `X` or an `O`.

**Bonus:**
- Display a message to indicate which turn is about to be played
- After the necessary moves have been played, stop the game and alert the
  winner if one player ends up winning with three in a row
    * Hint: Determine a set of winning combinations. Check those
      combinations on the board contents after every move.


#### Starter code

Fork this repo and clone it. There is an `index.html` and `style.css` template.

#### Deliverable

Please find some screenshots of what you'll be creating.  Feel free to get creative with how you style your interface.

![Screen-shot](https://i.imgur.com/kz2L9f9.png)
![Screen-shot](https://i.imgur.com/d8lFshD.png)
![Screen-shot](https://i.imgur.com/Jw6hhcA.png)

#### Additional Resources

- [W3 schools docs on the DOM](http://www.w3schools.com/jsref/dom_obj_all.asp)
- [More W3 schools docs on events](https://developer.mozilla.org/en-US/docs/Web/Events)
