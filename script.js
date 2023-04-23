const group1 = [' чтение', ' пение', ' рисование', ' математика']

const group2 = [' английский',' алгебра',' геометрия',' информатика',' физика',' литература',' технология',' биология']

const group3 = [' физика',' химия',' обществознание',' экономика',' информатика',' алгебра',' геометрия',' БЖД',' астрономия',' биология',' технология',' факультативы к ЕГЭ']

let btn = document.querySelector('#btn');
let out1 = document.querySelector('#out-1');
let out2 = document.querySelector('#out-2');
let out3 = document.querySelector('#out-3');
let out4 = document.querySelector('#out-4');
let out5 = document.querySelector('#out-5');
let but2 = document.querySelector('#but2')

function getRandomArrayElement(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}


function f1(){
    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];

    let classEnter = document.getElementById('enter-your-class').value;

    if (classEnter <= 4){
            for (let i = 0; i < 3; i++) {
                let random1 = getRandomArrayElement(group1)
                let random2 = getRandomArrayElement(group1)
                let random3 = getRandomArrayElement(group1)
                let random4 = getRandomArrayElement(group1)
                let random5 = getRandomArrayElement(group1)
                day1.push(random1)
                day2.push(random2)
                day3.push(random3)
                day4.push(random4)
                day5.push(random5)
                out1.textContent = 'понедельник: '  + day1
                out2.textContent = 'вторник: ' + day2
                out3.textContent = 'среда: ' + day3
                out4.textContent = 'четверг: ' + day4
                out5.textContent = 'пятница: ' + day5
            }
    }
    else if(classEnter>=5 && classEnter<=8){
        for (let i = 0; i < 4; i++) {
            let random1 = getRandomArrayElement(group2)
            let random2 = getRandomArrayElement(group2)
            let random3 = getRandomArrayElement(group2)
            let random4 = getRandomArrayElement(group2)
            let random5 = getRandomArrayElement(group2)
            day1.push(random1)
            day2.push(random2)
            day3.push(random3)
            day4.push(random4)
            day5.push(random5)
            out1.textContent = 'понедельник: '  + day1
            out2.textContent = 'вторник: ' + day2
            out3.textContent = 'среда: ' + day3
            out4.textContent = 'четверг: ' + day4
            out5.textContent = 'пятница: ' + day5
        }
    }
    else if (classEnter>=9 && classEnter<=11){
        for (let i = 0; i < 5; i++) {
            let random1 = getRandomArrayElement(group3)
            let random2 = getRandomArrayElement(group3)
            let random3 = getRandomArrayElement(group3)
            let random4 = getRandomArrayElement(group3)
            let random5 = getRandomArrayElement(group3)
            day1.push(random1)
            day2.push(random2)
            day3.push(random3)
            day4.push(random4)
            day5.push(random5)
            out1.textContent = 'понедельник: '  + day1
            out2.textContent = 'вторник: ' + day2
            out3.textContent = 'среда: ' + day3
            out4.textContent = 'четверг: ' + day4
            out5.textContent = 'пятница: ' + day5
        }
    }
}


function f2() {
    const fam = [
        {name: 'Ханов', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)},
        {name: 'Сигачева', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)},
        {name: 'Васильев', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)},
        {name: 'Кузнецов', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)},
        {name: 'Абрамов', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)},
        {name: 'Титов', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)},
        {name: 'Джавадов', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)},
        {name: 'Ахметов', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)},
        {name: 'Козлов', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)},
        {name: 'Соколов', inform: random(5, 10), math: random(5, 10), geometry: random(5, 10)}
    ];

    fam.forEach(el => {
        el.sum = el.inform + el.math + el.geometry
    })

    let string = '<tr><td>Фамилия</td><td>Математика</td><td>Геометрия</td><td>Информатика</td><td>Сумма</td></tr>';

    fam.forEach(el => {
        string += '<tr><td>' + el.name + '</td><td>' + el.inform + '</td><td>' + el.math + '</td><td>' + el.geometry + '</td><td>' + el.sum + '</td></tr>'
    })

    document.getElementById('out').innerHTML = string;


    let fam2 = fam.slice();
    let top3Str = '<p>Топ 3 студента по сумме баллов:</p>';
    for (let i = 0; i < 3; i++) {
        let max = fam2.reduce((prev, curr) => prev.sum > curr.sum ? prev : curr);
        top3Str += '<p>' + (i + 1) + '. ' + max.name + ' (' + max.sum + ' баллов)</p>';
        fam2 = fam2.filter(el => el !== max);
    }
    document.getElementById('top').innerHTML = top3Str;
}


btn.addEventListener('click' , f1)
but2.addEventListener('click', f2)