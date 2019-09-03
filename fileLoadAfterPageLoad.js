<script type="text/javascript">
  // adding js file just before </body> tag close...
  function initialSetup() {
    let elem = document.createElement("script");
    elem.src = "_FilePath.js";
    
    document.body.appendChild(elem);
  }
  
  if(window.addEventListener) {
    window.addEventListener("load", initialSetup, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", initialSetup);
  } else 
    window.onload = initialSetup;
  
  
</script>
