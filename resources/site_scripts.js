//Side panel
function sidePanel(element, method) {
    var panel = null;
    var otherPanel = null;
    var trigger = null;

    if (element == controls) {
      console.log("controls")
      panel = document.getElementById("controls");
      otherPanel = document.getElementById("about");
      trigger = document.getElementById("control-button");
      if (method == 'open') {
        console.log("open")
        panel.classList.add("open-panel");
        setTimeout(() => {panel.classList.add("display-content")}, 200);
        trigger.setAttribute("onclick", "sidePanel(controls, 'close')")
        sidePanel(otherPanel, 'close');
      }
      if (method == 'close') {
        console.log("close")
        panel.classList.remove("open-panel");
        panel.classList.remove("display-content");
        trigger.setAttribute("onclick", "sidePanel(controls, 'open')")
      }
    }

    if (element == about) {
      panel = document.getElementById("about");
      otherPanel = document.getElementById("controls");
      trigger = document.getElementById("about-button");
      if (method == 'open') {
        panel.classList.add("open-panel");
        setTimeout(() => {panel.classList.add("display-content")}, 200);
        trigger.setAttribute("onclick", "sidePanel(about, 'close')")
        sidePanel(otherPanel, 'close');
      }
      if (method == 'close') {
        panel.classList.remove("open-panel");
        panel.classList.remove("display-content");
        trigger.setAttribute("onclick", "sidePanel(about, 'open')")
      }
    }
}