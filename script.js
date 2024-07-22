const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const submitButton = document.getElementById('submit');
const name = nameInput.value;
const un = ["大吉","中吉","吉","小吉","末吉","凶","大凶"];
const todayun = un[Math.floor(Math.random() * un.length)];
const result = (nameInput+"の運勢は"+todayun+"です")

submitButton.addEventListener(
    'click',
    () => {
      const name = nameInput.value;
      if (name.length === 0) {
  
        alert("名前を入れてください");
        return;
      }
      const date = dateInput.value;
      if (date.length === 0) {
        alert("誕生日を入れてください");
        return;
      }
      if(date.length > 0 && name.length > 0){
      alert(name+"の運勢は"+todayun+"です");
      }
    })
 

