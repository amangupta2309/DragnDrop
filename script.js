let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");
let resetButton = document.getElementById("reset-button");
const notification = document.getElementById("notification");
let initialOrder = Array.from(leftBox.children);

for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selected);
            handleDrop(e);
            selected = null;
        })

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected);
            handleDrop(e);
            selected = null;
        })
    })
}
function handleDrop(event) {
  event.preventDefault();
  notification.classList.add("show");
  setTimeout(() => {
      notification.classList.remove("show");
  }, 2000);
}


resetButton.addEventListener("click", function() {
    // Remove all child elements from both containers
    while (leftBox.firstChild) {
      leftBox.removeChild(leftBox.firstChild);
    }
    while (rightBox.firstChild) {
      rightBox.removeChild(rightBox.firstChild);
    }
  
    // Reset the containers with the initial order
    for (let element of initialOrder) {
      leftBox.appendChild(element);
    }
  });

