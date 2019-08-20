const idade = 'adasdas';

if(idade >= 0 && idade < 15) {
    console.log('Criança');
}else if(idade >=15 && idade < 30) {
    console.log('Jovem');
}else if(idade >=30 && idade < 60) {
    console.log('Adulto')
}else if(idade >= 60) {
    console.log('Idoso')
} else {
    console.log('Data invalida!')
}