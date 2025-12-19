<script>
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "tmp_gdrive_file_0.jpg",
        "tmp_gdrive_file_1.jpg",
        "tmp_gdrive_file_2.jpg",
        "tmp_gdrive_file_3.jpg"
    ];

    images.forEach((src, index) => {
        const img = document.getElementById("img" + (index + 1));
        if (img) {
            img.src = src;
            img.loading = "lazy";
        }
    });
});
</script>
