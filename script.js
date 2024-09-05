// Add & Remove Button Functionality
    const addBtn = document.querySelector(".add-btn");
    const remBtn = document.querySelector(".rem-btn");
    const btnTab = document.querySelector(".btn-tab");

    addBtn.addEventListener("click", function () {
      btnTab.style.display = "grid";
      setTimeout(() => {
        btnTab.classList.add("visible");
        btnTab.classList.remove("hidden");
      }, 50);

      addBtn.style.display = "none";
      remBtn.style.display = "block";
    });

    remBtn.addEventListener("click", function () {
      btnTab.classList.add("hidden");
      btnTab.classList.remove("visible");

      setTimeout(() => {
        btnTab.style.display = "none";
      }, 500);

      remBtn.style.transform = "rotate(360deg)";
      remBtn.style.transition = "transform 0.5s ease";

      setTimeout(() => {
        remBtn.style.display = "none";
        addBtn.style.display = "block";
      }, 500);
    });

    // Task, Project, and Notes Button Functionality
    const tskBtn = document.querySelector(".tsk-btn");
    const projBtn = document.querySelector(".prj-btn");
    const noteBtn = document.querySelector(".note-btn");

    const tskCont = document.querySelector(".tsk-cont");
    const prjCont = document.querySelector(".prj-cont");
    const noteCont = document.querySelector(".note-cont");
    const tskResult = document.querySelector(".tsk-result");
    const taskResultContent = document.querySelector(".task-result-content");

    tskBtn.addEventListener("click", function () {
      tskCont.style.display = "flex";
      prjCont.style.display = "none";
      noteCont.style.display = "none";
      tskResult.style.display = "none";
    });

    projBtn.addEventListener("click", function () {
      prjCont.style.display = "flex";
      tskCont.style.display = "none";
      noteCont.style.display = "none";
      tskResult.style.display = "none";
    });

    noteBtn.addEventListener("click", function () {
      noteCont.style.display = "flex";
      prjCont.style.display = "none";
      tskCont.style.display = "none";
      tskResult.style.display = "none";
    });

    // Status Selection
    const statusBtn = document.getElementById("status-btn");
    const statusBox = document.querySelector(".status-box");
    let selectedStatus = "";

    statusBtn.addEventListener("click", function () {
      if (statusBox.style.display === "none" || statusBox.style.display === "") {
        statusBox.style.display = "block";
      } else {
        statusBox.style.display = "none";
      }
    });

    // Listen for clicks on list items and store the selected status
    const listItems = document.querySelectorAll('.status-box ul li');
    listItems.forEach(item => {
      item.addEventListener('click', function () {
          selectedStatus = this.textContent; // Store the selected status
          console.log("Selected option: " + selectedStatus);
        statusBox.style.display = "none"; // Hide the box after selection
      });
    });

    // Task Submission and Validation
    const nextBtn = document.querySelector(".next-btn");
    const taskNameInput = document.getElementById("task-name");
    const aboutTaskInput = document.getElementById("about-task");
    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");

    nextBtn.addEventListener("click", function () {
      const taskName = taskNameInput.value.trim();
      const aboutTask = aboutTaskInput.value.trim();
      const startDate = startDateInput.value;
      const endDate = endDateInput.value;

      // Validation: Check for all inputs including status
      if (!taskName || !aboutTask || !startDate || !endDate) {
        alert("Please fill out all fields before proceeding.");
        return;
      }
      if (!selectedStatus) {
        alert("Please select a status.");
        return;
      }

      // Display task result
      displayTaskResult(taskName, aboutTask, startDate, endDate, selectedStatus);

      // Clear the task creation form
      clearTskCont();
    });

    // Disable Past Dates in Date Pickers
    const today = new Date().toISOString().split('T')[0];
    startDateInput.setAttribute('min', today);

    startDateInput.addEventListener('change', function () {
      const selectedStartDate = startDateInput.value;
      if (selectedStartDate) {
        endDateInput.setAttribute('min', selectedStartDate);
      }
    });

    // Function to display task result
    function displayTaskResult(taskName, aboutTask, startDate, endDate, status) {
      taskResultContent.insertAdjacentHTML('beforeend', `
        <div class="task-item">
          <h3>${taskName}</h3>
          <div class="task-pg">
            <p>${aboutTask}</p>
          </div>
          <p><strong>Start-date:</strong> ${startDate}</p>
          <p><strong>End-date:</strong> ${endDate}</p>
          <p><strong>Status:</strong> ${status}</p>
        </div>
      `);
      tskResult.style.display = 'flex'; // Show the task result container
    }

    // Function to clear the task form
    function clearTskCont() {
      taskNameInput.value = '';
      aboutTaskInput.value = '';
      startDateInput.value = '';
      endDateInput.value = '';
      selectedStatus = ''; // Reset the selected status
    }

    // Hide the status box if clicking outside of it
    document.addEventListener("click", function (e) {
      const isClickedInsideBox = statusBox.contains(e.target);
      const isClickedOnButton = statusBtn.contains(e.target);

      if (!isClickedInsideBox && !isClickedOnButton) {
        statusBox.style.display = "none";
      }
    });