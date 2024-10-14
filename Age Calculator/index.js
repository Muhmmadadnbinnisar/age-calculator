function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
        age--;
        months += 12;
    }

    if (today.getDate() < birthDate.getDate()) {
        months--;
    }

    document.getElementById('result').textContent = `You are ${age} years and ${months} months old.`;
}