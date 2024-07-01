document.addEventListener('DOMContentLoaded', function () {
    // Get all images with the class 'img-thumbnail'
    const thumbnails = document.querySelectorAll('.img-thumbnail');
    thumbnails[0].classList.add('selected')
    const content = thumbnails[0].getAttribute('data-content');
    const href = thumbnails[0].getAttribute('data-href');
    const src = thumbnails[0].getAttribute('src');

    // Display the content at the top of the page
    document.getElementById('selected-image-content-desktop').textContent = content;
    document.getElementById('selected-image-content-mobile').textContent = content;
    document.getElementById('more-detail-mobile').href = href;
            document.getElementById('more-detail-desktop').href = href;
    document.getElementById('selected-img').src=src

    // Add click event listener to each image
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Remove red border from all images
            thumbnails.forEach(img => img.classList.remove('selected'));

            // Add red border to the clicked image
            this.classList.add('selected');

            // Get the content related to the clicked image
            const content = this.getAttribute('data-content');
            const href = this.getAttribute('data-href');
            const src = this.getAttribute('src');


            // Display the content at the top of the page
            document.getElementById('selected-image-content-desktop').textContent = content;
            document.getElementById('selected-image-content-mobile').textContent = content;
            document.getElementById('more-detail-mobile').href = href;
            document.getElementById('more-detail-desktop').href = href;
            document.getElementById('selected-img').src=src

        });
    });
});