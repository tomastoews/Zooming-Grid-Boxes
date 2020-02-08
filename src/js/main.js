document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('click', (e) => expandBox(e)));
});

function expandBox(e) {
    let element = e.target;

    // Check if box was clicked
    if (element.classList.contains('box')) {

        // Original positions
        const positionX = element.getBoundingClientRect().x;
        const positionY = element.getBoundingClientRect().y;

        // Content
        const innerContent = element.querySelector('.inner');

        // Move to top and left
        element.style.marginLeft = `-${positionX}px`;
        element.style.marginTop = `-${positionY}px`;

        // Make the width and height of the window
        element.style.width = '100vw';
        element.style.height = '100vh';

        element.classList.remove('normal');
        element.classList.add('expand');

        // Get close link
        element.querySelector('.close-icon').addEventListener('click', () => {

            // Hide content
            if (innerContent) innerContent.style.display = 'none';

            setTimeout(() => {
                // Move to original position (absolute position = 0)
                element.style.marginLeft = 0;
                element.style.marginTop = 0;
                element.style.marginRight = 0;
                element.style.marginBottom = 0;

                // Give original sizes (absolute full width = 100% => fill grid box)
                element.style.width = '100%';
                element.style.height = '100%';

                // Close box
                element.classList.remove('expand');
                element.classList.add('normal');
            }, 200);
        });

        setTimeout(() => {
            if (innerContent) innerContent.style.display = 'block';
        }, 300);

    }
}