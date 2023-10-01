function convert(unit) {
    var celsius = document.getElementById('celsius').value;
    var fahrenheit = document.getElementById('fahrenheit').value;

    if (unit === 'celsius') {
        fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit;
        document.getElementById('result').innerText = `Result: ${fahrenheit} °F`;
    } else if (unit === 'fahrenheit') {
        celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius;
        document.getElementById('result').innerText = `Result: ${celsius} °C`;
    }
}
