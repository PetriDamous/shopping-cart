function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

let possibleProducts = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦"]
// thx Emojipedia!

let products = [...Array(5)].map((_, i) => {
    return {
        index: i,
        title: possibleProducts[roll(0, possibleProducts.length)],
        price: +roll(1, 10, 1).toFixed(2),
        count: roll(1, 6)
    }
})

const cartTotal = products.reduce(
    (ac, product) => +(ac + product.price * product.count).toFixed(2), 0
)

console.log("cartTotal: ", cartTotal)

const taxRate = +roll(5, 9, true).toFixed(1);

const total = +(cartTotal + cartTotal * (taxRate / 100)).toFixed(2);

let cart = document.getElementById("Products");

let cartHtml = ''
products.forEach(function(product) {
    cartHtml += `<div class="product">
        <div>${product.title}</div>
        <div>💲${product.price}</div>
        <div>x${product.count}</div>
    </div>`
})

cart.innerHTML = cartHtml

const summary = document.getElementById("Summary");

const summaryHtml = `
    <div class='summary'>
        <div>Total:💲 ${cartTotal}</div>
        <div>Tax Rate: ${taxRate}</div>
        <div>Taxed Total:💲 ${total}</div>
    </div>
`

summary.innerHTML = summaryHtml;
