document.addEventListener("DOMContentLoaded", function () {

    const imageFiles = [
        "tmp_gdrive_file_0.jpg",
        "tmp_gdrive_file_1.jpg",
        "tmp_gdrive_file_2.jpg",
        "tmp_gdrive_file_3.jpg"
    ];

    imageFiles.forEach(function (fileName) {
        const imgElement = document.getElementById(fileName);

        if (imgElement) {
            imgElement.src = fileName;
            imgElement.loading = "lazy";
        }
    });

});
