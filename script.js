document.addEventListener("DOMContentLoaded", function() {
    const taskLink = document.getElementById("task-link");
    const closeBtn = document.getElementById("close-btn");
    const taskBox = document.getElementById("Task-box");

    taskLink.addEventListener("click", function() {
        taskBox.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        taskBox.style.display = "none";
    });
});
