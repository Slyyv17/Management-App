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

// task creation
document.addEventListener("DOMContentLoaded", function() {
    const taskBtn = document.getElementById("task-btn");
    const closeTskCtn = document.getElementById("close-tsk-ctn");
    const taskCreation = document.getElementById("task-creation");

    taskBtn.addEventListener("click", function() {
        taskCreation.style.display = "flex";
    });

    closeTskCtn.addEventListener("click", function() {
        taskCreation.style.display = "none";
    })
});