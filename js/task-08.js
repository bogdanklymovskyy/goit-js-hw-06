const link = document.querySelector(".login-form");

link.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value; // passwordName це те що написано в атрибуті name інпута
    if(!email.trim() || !password.trim()) {
        alert('Заповніть поля форми')
        return
    }
    // а тут вже збираємо об'єкт який будемо виводити в консоль
    const data = {email, password};
    console.log(data)
 })