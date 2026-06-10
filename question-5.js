// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE20";
// "SALE20";
// "SALE50";
// let salesPrice = 0;
// เริ่มเขียนโค้ดตรงนี้
let calculateTotalPrice = (products, promotionCode) => {
  let salesPrice = 0;

  for (let totals of products) {
    salesPrice += totals.price * totals.quantity;
    console.log(salesPrice);

    if (promotionCode === "SALE20") {
      salesPrice = salesPrice * 0.8;
    } else if (promotionCode === "SALE50") {
      salesPrice = salesPrice * 0.5;
    } else {
      ("ไม่ได้รับส่วนลด");
    }
    return salesPrice;
  }
};

let totalPrice = calculateTotalPrice(products, promotionCode);

console.log(
  `ถ้า promotionCode มีค่าเป็น "SALE20" ลด 20% จากมูลค่ารวมของสินค้าในตะกร้า  ${totalPrice}`,
);
