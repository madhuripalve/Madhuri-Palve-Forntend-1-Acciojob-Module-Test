const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
function submitform(){
  let fname=document.getElementById('First-Name').Value;
  let nname=document.getElementById('Last-Name').Value;
  let email=document.getElementById('Email-Address').Value;
  console.log(fname, lname, email);
  if(fname && lname && email){
    alert("Form Submitted Succesfully");
  }else{
    alert("Required Data")
  }

}