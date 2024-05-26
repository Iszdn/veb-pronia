var modal = document.getElementById("editModal");

var editButtons = document.querySelectorAll(".fa-pen-to-square");

var span = document.getElementsByClassName("close")[0];

editButtons.forEach(function(button) {
  button.onclick = function() {
    modal.style.display = "block";

    var row = this.closest('tr');
    document.getElementById("image").value = row.cells[0].querySelector('img').src;
    document.getElementById("name").value = row.cells[1].innerText;
    document.getElementById("category").value = row.cells[2].innerText;
    document.getElementById("content").value = row.cells[3].querySelector('p').innerText;
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("editForm").onsubmit = function(event) {
  event.preventDefault();
  modal.style.display = "none";
};
