document.addEventListener("DOMContentLoaded", function () {
    const selectedCheckbox = document.querySelector('input[type="checkbox"]:checked');
    const label = document.querySelector(`label[for="${selectedCheckbox.id}"]`).innerText;
    document.getElementById('selected-label').innerText = label;
    console.log(selectedCheckbox);

  })
