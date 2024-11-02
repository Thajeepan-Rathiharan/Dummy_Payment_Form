document.getElementById('payment-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const recipient = document.getElementById('recipient').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    if (!currency) {
        document.getElementById('response').innerText = 'Please select a currency.';
        return;
    }

    // Simulating the payment process
    const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipient, name, email, amount, currency })
    });

    const result = await response.json();
    document.getElementById('response').innerText = 'Your payment has been sent!';
});