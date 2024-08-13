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
  const activityBox = document.getElementById("activity-box");
  const taskResult = document.getElementById("Task-output");
  

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

      taskResult.appendChild(taskCard);

      // Reset form and hide it
      taskCreation.reset();
      taskCreation.style.display = "none";
      taskBtn.style.display = "block";
      closeTskCtn.style.display = "none";
    });
});

// activity tab i.e everything will be outputted here
document.addEventListener("DOMContentLoaded", function() {
  const atyLink = document.getElementById("aty-link");
  const atyCloseBtn = document.getElementById("activity-close-btn");
  const activityTab = document.getElementById("activity-tab");

  atyLink.addEventListener("click", function() {
    activityTab.style.display = "block";
  });

  atyCloseBtn.addEventListener("click", function() {
    activityTab.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const projectLink = document.getElementById("project-link");
  const projectCloseBtn = document.getElementById("project-close-btn");
  const projectTab = document.getElementById("project-tab");

  projectLink.addEventListener("click", function() {
      projectTab.style.display = "block";
  });

  projectCloseBtn.addEventListener("click", function() {
      projectTab.style.display = "none";
  });
});

// Project creation
document.addEventListener("DOMContentLoaded", function () {
  const projBtn = document.getElementById("project-btn");
  const closeProjCtn = document.getElementById("close-prj-ctn");
  const projCreation = document.getElementById("project-creation");
  const projResult = document.getElementById("Project-output");

  projBtn.addEventListener("click", function () {
    projCreation.style.display = "block";
    projBtn.style.display = "none";
    closeProjCtn.style.display = "block";
  });

  closeProjCtn.addEventListener("click", function () {
    projCreation.style.display = "none";
    projBtn.style.display = "block";
    closeProjCtn.style.display = "none";
  });

  // Date validation
  const projStartDateInput = document.getElementById("proj-start-dd");
  const projEndDateInput = document.getElementById("proj-end-dd");

  const today = new Date().toISOString().split("T")[0];
  projStartDateInput.setAttribute("min", today);
  projEndDateInput.setAttribute("min", today);

  projStartDateInput.addEventListener("change", function () {
    projEndDateInput.setAttribute("min", this.value);
  });

  projEndDateInput.addEventListener("change", function () {
    if (this.value < projStartDateInput.value) {
      alert("End date cannot be before start date.");
      this.value = "";
    }
  });

  // Add sub-project functionality
  document
    .getElementById("add-sub-proj")
    .addEventListener("click", function () {
      const subProjBody = document.getElementById("sub-proj-body");

      const subProjContainer = document.createElement("div");
      subProjContainer.className = "sub-proj-input-container";

      const subProjInput = document.createElement("input");
      subProjInput.type = "text";
      subProjInput.className = "sub-proj-input";
      subProjInput.placeholder = "Sub-Project...";

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-sub-proj";
      deleteButton.innerHTML = `<i class="uil uil-trash-alt"></i>`;
      deleteButton.addEventListener("click", function () {
        subProjBody.removeChild(subProjContainer);
      });

      subProjContainer.appendChild(subProjInput);
      subProjContainer.appendChild(deleteButton);
      subProjBody.appendChild(subProjContainer);
    });

  // Adding Tags
  const statusSelect = document.getElementById("status-select");
  const selectedTag = document.getElementById("selected-tag");

  statusSelect.addEventListener("change", function () {
    selectedTag.className = "tag"; // Reset classes
    selectedTag.classList.add(this.value); // Add new status class
    selectedTag.textContent = this.options[this.selectedIndex].text; // Update text
  });

  // Form submission
  document
    .getElementById("project-creation")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const projName = document.getElementById("project-name").value;
      const projDesc = document.getElementById("about-project").value;
      const startDate = document.getElementById("proj-start-dd").value;
      const endDate = document.getElementById("proj-end-dd").value;
      const statusSelect = document.getElementById("status-select");
      const status = statusSelect.options[statusSelect.selectedIndex].text;
      const statusClass = statusSelect.value;

      if (!projName || !projDesc || !startDate || !endDate) {
        alert("Please fill in all fields.");
        return;
      }

      // Create project card
      const projCard = document.createElement("div");
      projCard.className = "proj-card";

      const projTitle = document.createElement("h3");
      projTitle.textContent = projName;

      const projDescription = document.createElement("p");
      projDescription.textContent = projDesc;

      const projStartDate = document.createElement("span");
      projStartDate.textContent = "Start Date: " + startDate + " ";

      const projEndDate = document.createElement("span");
      projEndDate.textContent = "End Date: " + endDate + " ";

      const projStatus = document.createElement("span");
      projStatus.className = `tag ${statusClass}`;
      projStatus.textContent = status;

      projCard.appendChild(projTitle);
      projCard.appendChild(projDescription);
      projCard.appendChild(projStartDate);
      projCard.appendChild(projEndDate);
      projCard.appendChild(projStatus);

      const subProjects = document.getElementById("sub-proj-body").children;
      if (subProjects.length > 0) {
        const subProjList = document.createElement("ul");
        for (let subProject of subProjects) {
          const subProjInput = subProject.querySelector(".sub-proj-input");
          if (subProjInput.value.trim()) {
            const subProjItem = document.createElement("li");
            subProjItem.textContent = subProjInput.value;
            subProjList.appendChild(subProjItem);
          }
        }
        projCard.appendChild(subProjList);
      }

      projResult.appendChild(projCard);

      // Reset form and hide it
      projCreation.reset();
      projCreation.style.display = "none";
      projBtn.style.display = "block";
      closeProjCtn.style.display = "none";
    });
});


/* when one tab is open and another wants to be opened
previous tab will be closed (optional)
*/
document.addEventListener("DOMContentLoaded", function() {
  const projectLink = document.getElementById("project-link");
  const projectCloseBtn = document.getElementById("project-close-btn");
  const projectTab = document.getElementById("project-tab");

  const taskLink = document.getElementById("task-link");
  const closeBtn = document.getElementById("close-btn");
  const taskBox = document.getElementById("Task-box");

  // When Project link is clicked
  projectLink.addEventListener("click", function() {
      projectTab.style.display = "block";
      taskBox.style.display = "none"; // Close task box when opening project
  });

  // When Project close button is clicked
  projectCloseBtn.addEventListener("click", function() {
      projectTab.style.display = "none";
  });

  // When Task link is clicked
  taskLink.addEventListener("click", function() {
      taskBox.style.display = "block";
      projectTab.style.display = "none"; // Close project tab when opening task
  });

  // When Task close button is clicked
  closeBtn.addEventListener("click", function() {
      taskBox.style.display = "none";
  });
});
