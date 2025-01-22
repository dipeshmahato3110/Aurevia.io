document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
      // Add active class to clicked tab
      this.classList.add("active");
    });
  });
  