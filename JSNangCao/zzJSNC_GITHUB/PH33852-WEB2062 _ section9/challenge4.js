
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'))
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {

    const text = document.querySelector('textarea').value;

    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [firts, second] = row.toLowerCase().trim().split('_');
        const output = `${firts}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Jonas_SCH