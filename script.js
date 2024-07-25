function saveData() {
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let phone = document.getElementById('phoneInput').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    alert('Data saved in local storage');
}
function loadData() {
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    let phone = localStorage.getItem('phone');

    if (name && email && phone) {
        document.getElementById('displayName').innerText = `Saved Name: ${name}`;
        document.getElementById('displayEmail').innerText = `Saved Email: ${email}`;
        document.getElementById('displayPhone').innerText = `Saved Phone: ${phone}`;
    } else {
        document.getElementById('displayName').innerText = 'Please first fill all the data';
        document.getElementById('displayEmail').innerText = '';
        document.getElementById('displayPhone').innerText = '';
    }
}
function clearData() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');

    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('phoneInput').value = '';

    document.getElementById('displayName').innerText = '';
    document.getElementById('displayEmail').innerText = '';
    document.getElementById('displayPhone').innerText = '';
}
