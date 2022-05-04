function openForm() {
    document.getElementById("register-div").style.display = "none"
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("register-div").style.display = "block"
  }

btn = document.getElementById("registrar")
btn.addEventListener("click",openForm)