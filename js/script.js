const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;

    alert("Terima kasih, " + nama + "!");

    form.reset();
});
