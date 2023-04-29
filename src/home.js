function runHome(e) {

  const submit = document.querySelector("button");
  const form = document.querySelector("form")
  function checkboxClick(event) {
    event.preventDefault();
    console.log(form[0].value)
    console.log("Hello")
  }
  submit.addEventListener("click", checkboxClick);
}

export default runHome;
