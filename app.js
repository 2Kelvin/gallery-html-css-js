// getting & attaching HTML elements to javascript variables
const popUpPage = document.getElementById('popUpPage');
const fullScreenImage = document.getElementById('fullScreenImage');
const closeButton = document.getElementById('closeButton');
const allPicturesContainer = document.getElementById('allPicturesContainer');

// array of all imported images
const allImages = [
    './images/trip1.jpg',
    './images/trip2.jpg',
    './images/trip3.jpg',
    './images/trip4.jpg',
    './images/trip5.jpg',
    './images/trip6.jpg',
    './images/trip7.jpg',
    './images/trip8.jpg',
    './images/trip9.jpg',
    './images/trip10.jpg',
];

// looping through allImages array
allImages.forEach(pictureSrc => { // pictureSrc is the src of each image (as added in the array)
    // creating div & img elements to host the incoming images
    const eachPictureDiv = document.createElement('div');
    const eachImgTag = document.createElement('img');

    // adding each image tag attribute's data
    eachImgTag.src = pictureSrc;
    eachImgTag.alt = 'Picture';

    eachPictureDiv.classList.add('eachPictureDiv'); // adding a class to be styled in css for eachPictureDiv container
    eachPictureDiv.appendChild(eachImgTag); // adding the image to eachPictureDiv container

    // if image is clicked, displaying it alone in fullscreen
    eachImgTag.addEventListener('click', () => {
        fullScreenImage.src = pictureSrc;
        popUpPage.style.display = 'flex'; // making the popUpPage visible to show the fullscreen image
    });

    allPicturesContainer.appendChild(eachPictureDiv); //appending the imageDiv to allPicturesDiv container div
});

// closing the popUp page from fullscreen mode by updating its display property to none
closeButton.addEventListener('click', () => {
    popUpPage.style.display = 'none';
});

// if any other part of the page is clicked, close the popUp page just like you've clicked the close button
popUpPage.addEventListener('click', (event) => {
    // Checking if the click occurred directly on the popUp page, not on the image
    if (event.target === popUpPage) {
        popUpPage.style.display = 'none';
    }
});

// for (let index = 0; index < allImages.length; index++) {
//     const pictureSrc = allImages[index];

//     // creating div & img elements to host the incoming images
//     const eachPictureDiv = document.createElement('div');
//     const eachImgTag = document.createElement('img');

//     // adding each image tag attribute's data
//     eachImgTag.src = `${pictureSrc}`;
//     eachImgTag.alt = 'Picture';

//     eachPictureDiv.classList.add('eachPictureDiv'); // adding a class to be styled in css for eachPictureDiv container
//     eachPictureDiv.appendChild(eachImgTag); // adding the image to eachPictureDiv container

//     allPicturesContainer.appendChild(eachPictureDiv);
// }