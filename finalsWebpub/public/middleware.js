const tableBody = document.querySelector('tbody');
function loadDishes()
{
    fetch('/dishes')
    .then(response => response.json())
    .then(dishes => {
        dishes.forEach(dish => {
            const row =
            `<tr>
                <td>${dish.id}</td>
                <td>${dish.type}</td>
                <td>${dish.province}</td>
                <td>${dish.price}</td>
                <td>${dish.size}<br></td>
                <td><img src='${dish.image}' style=width:220px;</td>
             <tr>   
            `
        tableBody.innerHTML += row;
        })
    })
    .catch(error => console.log('Error fetching dishes.', error));
}

function loadSpecificDish(id) {
    fetch('/dishes').then(response => response.json())
    .then(dishes => {
        const specificD = dishes.find(d => d.id == id);
        const row =
        `<tr>
            <td>${specificD.id}</td>
            <td>${specificD.type}</td>
            <td>${specificD.province}</td>
            <td>${specificD.price}</td>
            <td>${specificD.size}<br></td>
            <td><img src='${specificD.image}' style="width:220px;"></td>
         </tr>`;
        tableBody.innerHTML += row;
    })
    .catch(error => console.log('Error fetching dishes.', error));
}
