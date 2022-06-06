// import {Product} from './Product';
const updatePrice= document.getElementById('updatePrice');
const pId= document.getElementById('pId');
const selectCategory=document.getElementById('selectCategory');
class Store{
  constructor()
  {
      this.arr=[new Product()];
  }


//search product finish

//search by id
searchById=()=>
{
  const product= this.arr.find(p=>p.id===pId)
  product.updatePrice(updatePrice);
}
//add product
addProduct=(product)=>
{
    this.arr.push(new Product(product))
}
//search by name
searchByName=(name)=>
{
  return this.arr.find(p => p.name === name);
}
//search by range
searchByRange=(minPrice,maxPrice)=>
{
  return this.arr.filter(p => p.price>=minPrice && p.price<=maxPrice);
}
//search by category
searchByCategory()
  }