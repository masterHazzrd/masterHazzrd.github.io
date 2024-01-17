
function modGreeting() {

    let fName = document.getElementById('f_name').value
    let mInit = document.getElementById('m_init').value
    let lName = document.getElementById('l_name').value

    console.log(fName + ' ' + mInit + '. ' + lName);
    console.log(mInit.length)

    if (mInit.length > 0) {
        document.getElementById('greeting').innerHTML = 'Welcome CleanEnergySmither, ' + fName + ' ' + mInit + '. ' + lName +'!'; 
    } else if (fName.length !== 0 && mInit.length === 0 && lName.length !== 0) {
        document.getElementById('greeting').innerHTML = 'Welcome CleanEnergySmither, ' + fName + ' ' + lName +'!'; 
    } else if (fName.length === 0 && mInit.length === 0 && lName.length === 0) {
        document.getElementById('greeting').innerHTML = 'Welcome CleanEnergySmither!'; 
    }

    const output = document.getElementById('output_message')
    let count = 140

    output.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const output_item = document.createElement('li');

        if (i % 3 == 0 && i % 5 == 0) {
            output_item.textContent = `${i} - buzz zapp!`;
        } else if (i % 5 === 0) {
            output_item.textContent = `${i} - zapp!`;
        } else if (i % 3 === 0) {
            output_item.textContent = `${i} - buzz!`;
        } else {
            output_item.textContent = `${i} - hum!`;
        }
        
        output.appendChild(output_item);       
    }

    /*
    setTimeout(function(){
    location.reload();
    }, 10000); */
}

document.getElementById('submit').addEventListener('click', modGreeting);

function pageReset() {
    location.reload();
}

document.getElementById('clear').addEventListener('click', pageReset);