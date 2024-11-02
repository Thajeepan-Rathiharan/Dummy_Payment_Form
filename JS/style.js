document.getElementById('payment-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, amount })
    });

    const result = await response.json();
    document.getElementById('response').innerText = result.message;
});
