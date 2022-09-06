const Subjects = document.querySelector('ul');
let myUl = document.getElementById('myUl');
Subjects.addEventListener('click', function(event) {
      if (event.target.className === 'delete') {
        const li = event.target.parentElement;
        Subjects.removeChild(li);
      }
})


function addSub() {
  let li = document.createElement('li');
  let valueInput = document.getElementById('myInput').value;
  let textInput = document.createTextNode(valueInput);
  let myDelete = document.createElement('span');
  myDelete.innerText = 'delete';

  li.appendChild(textInput);
  if (valueInput === '') {
    alert('Nhập tên khóa học đê!');
  } else {
    myUl.appendChild(li);
    li.appendChild(myDelete);
    myDelete.setAttribute('class', 'delete');
  }
  document.getElementById("myInput").value = "";
}

function seaching() {
  let input = document.getElementById('mySearch');
  let textUpper = input.value.toUpperCase();
  let li = myUl.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      let a = li[i];
      let txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(textUpper) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}