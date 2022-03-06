function openTab(tabName) {
    var i, x, y;
    x = document.getElementsByClassName("containerTab");
    y = document.getElementById(tabName);
    if (y.style.display === "block")
    {
        y.style.display = "none";
    }
    else{
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        y.style.display = "block";

    }
    
  }