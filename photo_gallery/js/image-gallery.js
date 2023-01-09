// JavaScript Document
document.addEventListener('DOMContentLoaded', ()=>{
    // adding an element in the DOM
    addingLargeImageCaption();
    // getting all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    // executing the clickHandler function for each thumbnail
    thumbnails.forEach(clickHandler);
    // executing the hoverHandler function for each thumbnail
    thumbnails.forEach(hoverHandler);
    // below function will be executed for each thumbnail
    function hoverHandler(thumbnail) {
        //adding an hover event listener to the thumbnail
        thumbnail.addEventListener('mouseover', ()=>{
            // debug log
            //console.log("Hovered")
            // changing caption on hover to show the alt text 
            const caption = document.getElementById('caption');
            caption.innerHTML = "Hovering over " + thumbnail.alt;
        });
    }
    // below function will be executed for each thumbnail
    function clickHandler(thumbnail) {
        // adding a click event listener to the thumbnail
        thumbnail.addEventListener('click', ()=>{
            // debug log
            //console.log("Clicked")
            // changing the large image source and alt text
            const largeImage = document.getElementById('largeImage');
            largeImage.src = thumbnail.src;
            largeImage.alt = thumbnail.alt;
            // removing the border from all other thumbnails
            const thumbnails = document.querySelectorAll('.thumbnail');
            thumbnails.forEach((thumbnail) => {
                thumbnail.style.border = "";    
            });
            // adding the border to the current thumbnail
            thumbnail.style.border = "1px #ffffff solid";
            // changing the caption to show the alt text of the current thumbnail
            const large_caption = document.getElementById('large_img_caption');
            large_caption.innerHTML = "Large image shows " + thumbnail.alt;
        });
    };
    // function used at the start to add a new element to the DOM (the large image caption)
    function addingLargeImageCaption() {
        // selecting the caption class
        caption = document.querySelector('.caption');
        // creating a new element and giving it an id 
        large_img_caption = document.createElement('div');
        large_img_caption.id = "large_img_caption";
        // creating the text node and giving it an id
        tn = document.createTextNode("Large image shows " + largeImage.alt);
        tn.id = "large_img_caption_text";
        // adding the text node to the large image caption div element
        large_img_caption.appendChild(tn);
        // adding to the caption class the new large image caption
        caption.appendChild(large_img_caption);
    }
    // console log
    //console.log("End")
})