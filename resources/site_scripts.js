//Side panel
function sidePanel(element) {
    var panel = null;
    if (element == controls) {
      panel = document.getElementById("controls");
    }

    if (element == about) {
        panel = document.getElementById("about");
      }
    console.log(panel);
    panel.classList.toggle("open-panel");
    panel.classList.toggle("display-content");
  }