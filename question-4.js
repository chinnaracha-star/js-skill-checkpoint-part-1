// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let checkLow = (inventory) => {
  let lowQuantity = inventory[1];
  console.log(inventory);
  for (let i of inventory) {
    console.log(i);
    if (i.quantity < lowQuantity.quantity) {
      console.log(i);
      lowQuantity = i;
    }
  }

  return lowQuantity;
};

let lowQuantity = checkLow(inventory);

console.log(lowQuantity);
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowQuantity.name} : ซึ่งมี ${lowQuantity.quantity} ชิ้น`,
);
