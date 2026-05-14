const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

//yas hesaplama fonksıyonu burada
function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Sen ${age} ${age > 1 ? "" : "year"} Yaşındasın.`; //sonucu buraya yazdır
  }
}
//yası alma fonksiyon
function getAge(birthdayValue) {
  const currentDate = new Date();//yeni date alma
  const birthdayDate = new Date(birthdayValue); //dogum tarıhı planlama
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();//tek bır yılı al
  const month = currentDate.getMonth() - birthdayDate.getMonth();//month (ay alma)

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);