let number = +prompt('Введите число')
for (let i = 0; i <= number; i++) {
    console.log(i);

}

for (let i = 0; i <= number; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}