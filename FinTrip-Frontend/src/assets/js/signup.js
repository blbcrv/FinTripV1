document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('../../components/common/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        });

    // Load footer
    fetch('../../components/common/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});


document.getElementById('nextBtn').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('quest-signup').classList.remove('hidden');
});

$(document).ready(function(){
    $('#datePickerDeparture').datepicker({
        format: 'dd/mm/yyyy',
        dateFormat: 'dd/mm/yy',
        startDate: '-100y',
        endDate: '0d',
        autoclose: true,
        todayHighlight: true
    });
});
$(document).ready(function(){
    $('#datePickerReturn').datepicker({
        format: 'dd/mm/yyyy',
        dateFormat: 'dd/mm/yy',
        startDate: '-100y',
        endDate: '0d',
        autoclose: true,
        todayHighlight: true
    });
});


// utilisation API
async function signup() {

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3003/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const messageElement = document.getElementById('message');

    if (response.ok) {
        const data = await response.json();
        window.location.href = '/';
    } else {
        const errorData = await response.json();
        messageElement.textContent = errorData.message;
        messageElement.style.color = 'red';
    }
};
