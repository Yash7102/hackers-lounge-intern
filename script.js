document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const resultDiv = document.getElementById('result');

    analyzeBtn.addEventListener('click', function () {
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const image = new Image();
                image.src = e.target.result;

                image.onload = function () {
                    const dateTime = new Date(this.exifdata ? this.exifdata.DateTimeOriginal : null);
                    const pixelDimensions = `${this.width} x ${this.height}`;

                    // Display analysis result
                    resultDiv.innerHTML = `
                        <p><strong>Analysis Result:</strong></p>
                        <p><strong>Date and Time:</strong> ${dateTime.toLocaleString() || 'Not available'}</p>
                        <p><strong>Pixel Dimensions:</strong> ${pixelDimensions}</p>
                    


                        <!-- Add more information as needed -->
                    `;
                };
            };

            // Read the file and extract EXIF data
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file.');
        }
    });
});
