age = prompt('Enter Age')
if(age>18){
    alert('you are old enough to drive')
}else{
    alert(`you are left with ${18-age} years left to drive`)
}

let a=4, b=8
if(a>b){
    console.log('a is greater than b')
}else{
    console.log('b is greater than a')
}
(a>b)?console.log('a is greater than b'):console.log('b is greater than a')

primeNum = prompt('check if ___ is a prime number')
if(primeNum%2==0){
    console.log('yes')
}else{
    console.log('no')
}


month = prompt('what month is it?').toLowerCase()
switch(month){
    case 'december'||'january'||'febuary': console.log('it\'s winter season') 
    break
    case 'march'||'april'||'may':console.log('it\'s spring')
    break
    case 'june'||'july'||'august': console.log('it is autumn')
    break
    case 'september' || 'october' || 'november':console.log('it\'s autumn/fall')
    break
    default: console.log('invalid month')
}