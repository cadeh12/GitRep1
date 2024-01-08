const productList = document.querySelectorAll('.product')
const priceList = document.querySelectorAll('.item-price')
const shopBtnList = document.querySelectorAll('.shop-btn')

productList.forEach(product => {
    product.addEventListener('mouseover', () => {
        let index = parseInt(product.id)
        console.log(productList[index])
        shopBtnList[index].style.display = 'block'
        priceList[index].sytle.display = 'none'
    })
    product.addEventListener('mouseout', () => {
        let index = parseInt(product.id)
        console.log(productList[index])
        shopBtnList[index].style.display = 'none'
        priceList[index].sytle.display = 'block'
    })
});

console.log(priceList[0].id)