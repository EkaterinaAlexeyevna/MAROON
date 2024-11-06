// const products = [
//     { name: "Adidas Shoes", price: 2500, id: 1, quantity: 1,},
//     { name: "Sting Energy Drink", price: 120, id: 2, quantity: 1,},
//     { name: "Umbrella", price: 500, id: 3, quantity: 1, },
//     { name: "Cat Food", price: 900, id: 4, quantity: 1, },
//     { name: "T Shirt", price: 300, id: 5, quantity: 1, },
//     { name: "Book", price: 100, id: 6, quantity: 1,}
//   ];
let list = document.querySelectorAll('.swiper-wrapper.tovar');
list.forEach(tovar =>{
    tovar.addEventListener('click',function(event){
        if (event.target.classList.containts('tovar__link')){
            alert('111')
        }
    })
})
  