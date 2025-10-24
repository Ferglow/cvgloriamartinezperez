// Print functionality
function printCV() {
  window.print();
}

// Add print button functionality
document.addEventListener("DOMContentLoaded", function () {
  // Create print button
  const printButton = document.createElement("button");
  printButton.textContent = "Imprimir CV";
  printButton.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #2980b9;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 14px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                z-index: 1000;
            `;

  printButton.addEventListener("click", printCV);
  printButton.addEventListener("mouseover", function () {
    this.style.background = "#21618c";
  });
  printButton.addEventListener("mouseout", function () {
    this.style.background = "#2980b9";
  });

  document.body.appendChild(printButton);

  // Hide print button when printing
  window.addEventListener("beforeprint", function () {
    printButton.style.display = "none";
  });

  window.addEventListener("afterprint", function () {
    printButton.style.display = "block";
  });
});

// Add smooth scrolling for better navigation
document.addEventListener("click", function (e) {
  if (
    e.target.tagName === "A" &&
    e.target.getAttribute("href").startsWith("#")
  ) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});

// Add responsive table functionality for mobile
function makeTablesResponsive() {
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    const wrapper = document.createElement("div");
    wrapper.style.overflowX = "auto";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

// Initialize responsive features
document.addEventListener("DOMContentLoaded", makeTablesResponsive);
