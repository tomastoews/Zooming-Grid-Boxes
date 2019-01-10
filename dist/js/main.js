"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var boxes = document.querySelectorAll('.box');
  boxes.forEach(function (box) {
    return box.addEventListener('click', function (e) {
      return expandBox(e);
    });
  });
});

function expandBox(e) {
  var element = e.target; // Check if box was clicked

  if (element.classList.contains('box')) {
    // Original positions
    var positionX = element.getBoundingClientRect().x;
    var positionY = element.getBoundingClientRect().y; // Content

    var innerContent = element.querySelector('.inner'); // Move to top and left

    element.style.marginLeft = "-".concat(positionX, "px");
    element.style.marginTop = "-".concat(positionY, "px"); // Make the with and height of the window

    element.style.width = '100vw';
    element.style.height = '100vh';
    element.classList.remove('normal');
    element.classList.add('expand'); // Get close link

    element.querySelector('.close-icon').addEventListener('click', function () {
      // Hide content
      if (innerContent) innerContent.style.display = 'none';
      setTimeout(function () {
        // Move to original position (absolute position = 0)
        element.style.marginLeft = 0;
        element.style.marginTop = 0;
        element.style.marginRight = 0;
        element.style.marginBottom = 0; // Give original sizes (absolute full width = 100% => fill grid box)

        element.style.width = '100%';
        element.style.height = '100%'; // Close box

        element.classList.remove('expand');
        element.classList.add('normal');
      }, 200);
    });
    setTimeout(function () {
      if (innerContent) innerContent.style.display = 'block';
    }, 300);
  }
}