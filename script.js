const cars = [
    {
        "name": "Koenigsegg",
        "TypeCar": "Sport",
        "capacity": "2People",
        "Gasoline": "90L",
        "image": "./image/Car1.png",
        "price": 99.00,
        "like": true,

    },
    {
        "bool": true,
        "name": "Nissan GT - R",
        "TypeCar": "Sport",
        "capacity": "2People",
        "Gasoline": "80L",
        "image": "./image/Car2.png",
        "price": 80.00,
        "save": true,
        "notPrice": 100
    },
    {
        "name": "Rolls-Royce",
        "TypeCar": "Sport",
        "capacity": "4People",
        "Gasoline": "70L",
        "image": "./image/Car3.png",
        "price": 96.00
    },
    {
        "name": "All New Rush",
        "TypeCar": "SUV",
        "capacity": "6People",
        "Gasoline": "70L",
        "image": "./image/Car4.png",
        "price": 72.00,
        "save": true,
        "notPrice": 80
    },
    {

        "name": "CR - V",
        "TypeCar": "SUV",
        "capacity": "6People",
        "Gasoline": "80L",
        "image": "./image/Car5.png",
        "price": 80.00,
        "bool": true,
        "like": true
    },
    {
        "name": "All New Terios",
        "TypeCar": "SUV",
        "capacity": "6People",
        "Gasoline": "90L",
        "image": "./image/Car6.png",
        "price": 74.00
    },
];

const filters = document.querySelector('#filters');

filters.addEventListener('input', filter);

function filter() {
    const types = [...filters.querySelectorAll('#type input:checked')].map(n => n.value)
    const capacitys = [...filters.querySelectorAll('#capacity input:checked')].map(n => n.value)
    const prices = document.querySelector('#customRange1').value
    output(cars.filter(n => (
        (!types.length || types.includes(n.TypeCar)) &&
        (!capacitys.length || capacitys.includes(n.capacity)) &&
        (!prices || prices >= n.price)
    )));
}

function output(array) {
    document.getElementById('rood').innerHTML = array.map(n => `
    <section class="cart-Cars ${n.bool ? "marg" : false}">
                    <div class="header-cart " >
                        <h3 class="header-cart_title">${n.name}</h3>
                        <img class="header-cart_img" src="${n.like ? "./image/VectorRED.png" : "./image/VectorLike.png"}" alt="">
                    </div>
                    <p class="type-car">${n.TypeCar}</p>
                    <img class="img-car" src="${n.image}" alt="">
                    <div class="mini-icons">
                        <img class="icon" src="./image/Vector9.png" alt="">${n.Gasoline}
                        <img class="icon" src="./image/img9.png" alt="">Manual
                        <img class="icon" src="./image/img8.png" alt="">${n.capacity}
                    </div>
                    <div class="miniPriceAndBtn">
                        <div class="boxPrice">
                            <p class="price">${'$' + n.price}/<span class="days">day</span> </p>
                                     ${n.save ? `<div>
                                    <s class="days">${'$' + n.notPrice}</s>
                                </div>`: ""}
                        </div>
                        <button type="button" class="btn btn-primary btn-lg">Rent Now</button>
                    </div>
                </section>
  `).join('');
}
output(cars);
