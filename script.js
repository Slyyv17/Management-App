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
document.addEventListener("DOMContentLoaded", function () {
  const taskBtn = document.getElementById("task-btn");
  const closeTskCtn = document.getElementById("close-tsk-ctn");
  const taskCreation = document.getElementById("task-creation");
  const dashboard = document.getElementById("Dashboard");

  taskBtn.addEventListener("click", function () {
    taskCreation.style.display = "flex";
    taskBtn.style.display = "none";
    closeTskCtn.style.display = "block";
  });

  closeTskCtn.addEventListener("click", function () {
    taskCreation.style.display = "none";
    taskBtn.style.display = "block";
    closeTskCtn.style.display = "none";
  });

  // Date validation
  const startDateInput = document.getElementById("start-dd");
  const endDateInput = document.getElementById("end-dd");

  const today = new Date().toISOString().split("T")[0];
  startDateInput.setAttribute("min", today);
  endDateInput.setAttribute("min", today);

  startDateInput.addEventListener("change", function () {
    endDateInput.setAttribute("min", this.value);
  });

  // Add sub-task functionality
  document
    .getElementById("add-sub-task")
    .addEventListener("click", function () {
      const subTaskBody = document.getElementById("sub-task-body");

      const subTaskContainer = document.createElement("div");
      subTaskContainer.className = "sub-task-input-container";

      const subTaskInput = document.createElement("input");
      subTaskInput.type = "text";
      subTaskInput.className = "sub-task-input";
      subTaskInput.placeholder = "Sub-task...";

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-sub-task";
      deleteButton.innerHTML = `<i class="uil uil-trash-alt"></i>`;
      deleteButton.addEventListener("click", function () {
        subTaskBody.removeChild(subTaskContainer);
      });

      subTaskContainer.appendChild(subTaskInput);
      subTaskContainer.appendChild(deleteButton);
      subTaskBody.appendChild(subTaskContainer);
    });

  // adding Tags
  const statusSelect = document.getElementById("status-select");
  const selectedTag = document.getElementById("selected-tag");

  statusSelect.addEventListener("change", function () {
    selectedTag.className = "tag"; // Reset classes
    selectedTag.classList.add(this.value); // Add new status class
    selectedTag.textContent = this.options[this.selectedIndex].text; // Update text
  });

  // Form submission
  document
    .getElementById("task-creation")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const taskName = document.getElementById("task-name").value;
      const taskDesc = document.getElementById("about-task").value;
      const startDate = document.getElementById("start-dd").value;
      const endDate = document.getElementById("end-dd").value;
      const status = statusSelect.options[statusSelect.selectedIndex].text;
      const statusClass = statusSelect.value;

      if (
        taskName === "" ||
        taskDesc === "" ||
        startDate === "" ||
        endDate === ""
      ) {
        alert("Please fill in all fields.");
        return;
      }

      // Create task card
      const taskCard = document.createElement("div");
      taskCard.className = "task-card";

      const taskTitle = document.createElement("h3");
      taskTitle.textContent = taskName;

      const taskDescription = document.createElement("p");
      taskDescription.textContent = taskDesc;

      const taskStartDate = document.createElement("span");
      taskStartDate.textContent = "Start Date: " + startDate + " ";

      const taskEndDate = document.createElement("span");
      taskEndDate.textContent = "End Date: " + endDate + " ";

      const taskStatus = document.createElement("span");
      taskStatus.className = `tag ${statusClass}`;
      taskStatus.textContent = status;

      taskCard.appendChild(taskTitle);
      taskCard.appendChild(taskDescription);
      taskCard.appendChild(taskStartDate);
      taskCard.appendChild(taskEndDate);
      taskCard.appendChild(taskStatus);

      const subTasks = document.getElementById("sub-task-body").children;
      if (subTasks.length > 0) {
        const subTaskList = document.createElement("ul");
        for (let subTask of subTasks) {
          const subTaskInput = subTask.querySelector(".sub-task-input");
          const subTaskItem = document.createElement("li");
          subTaskItem.textContent = subTaskInput.value;
          subTaskList.appendChild(subTaskItem);
        }
        taskCard.appendChild(subTaskList);
      }

      dashboard.appendChild(taskCard);

      // Reset form and hide it
      taskCreation.reset();
      taskCreation.style.display = "none";
      taskBtn.style.display = "block";
      closeTskCtn.style.display = "none";
    });
});
