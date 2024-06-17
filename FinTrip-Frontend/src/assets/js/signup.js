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

document.getElementById('submitBtn').addEventListener('click', async function() {
    const inscriptionData = new FormData(document.getElementById('inscriptionForm'));
    const questionnaireData = new FormData(document.getElementById('questionnaireForm'));

    const allData = new FormData();
    for (let [key, value] of inscriptionData.entries()) {
        allData.append(key, value);
    }
    for (let [key, value] of questionnaireData.entries()) {
        allData.append(key, value);
    }

    const response = await fetch('/submit', {
        method: 'POST',
        body: allData
    });

    const result = await response.json();
    if (result.success) {
        alert('Inscription réussie et questionnaire soumis!');
    } else {
        alert('Erreur lors de la soumission.');
    }
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