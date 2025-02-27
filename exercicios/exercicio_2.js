function updateData(currentObject, newDataObject) {
    let updatedObject = { ...currentObject };
    for (let key in newDataObject) {
      if (currentObject.hasOwnProperty(key)) {
        updatedObject[key] = newDataObject[key];
      }
    }
    return updatedObject;
  }
  
  module.exports = updateData;

if (require.main === module) {
    console.log(updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 }));
    console.log(updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15, description: "camiseta 100% algodão" }));
    console.log(updateData({ name: "Rafael", country: "Chile", age: 42 }, { name: "Camiseta Polo", price: 59.9, amount: 30 }));
}
