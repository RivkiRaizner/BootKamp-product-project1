class Product {
  constructor(name, id, category, price, quantity) {
    this.name = name;
    this.id = id;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
  //update price in product
  update = (newPrice) => {
    this.price = newPrice;
    console.log(this.price);
  }
  //hi
  //add quantity
  addQuantity=()=> this.quantity++;

  //less quantity
  lessQuantity=()=> this.quantity--;


}

//CLASS STORE

const startUpdate = document.getElementById('startUpdate');
const updatePrice = document.getElementById('updatePrice');
const pId = document.getElementById('pId');
const selectCategory = document.getElementById('selectCategory');
const addNewProduct = document.getElementById('addNewProduct');
const searchProductBtn = document.getElementById('searchProductBtn');
const newName = document.getElementById('newName');
const newId = document.getElementById('newId');
const newCategories = document.getElementById('newCategories');
const newPrice = document.getElementById('newPrice');
const addNewProductSubmit = document.getElementById('addNewProductSubmit');
const allProducts = document.querySelector('#allProducts ul');
const quantityInput = document.getElementById('quantityInput');
const addQ = document.getElementById('addQ');
const lessQ = document.getElementById('lessQ');
class Store {
  arr = [
    new Product("candy",1212,'Snacks',6,9),
    new Product("potato",1231,'Vegtables',8,14),
    new Product("chees",8787,'Milk',7,2),
    new Product("Banana",5421,'Fruit',11,3)
];
arrFilter=[...this.arr];
  //search product finish

  //search by id
  searchById = () => {
    const product = this.arr.find(p => p.id === pId)
    product.update(updatePrice);
  }
  //add product in store
  // addProduct = (name, id, category, price, quantity) => {
  //   this.arr.push(new Product(name, id, category, price, quantity));
  //   alert('new product adding succsesfull');
  // }
  //search by name
  search2=(obj)=>{
    return this.searchBy(obj.type, obj.val);
  }
  searchBy = (type,val) => {
    const tempArr = this.arrFilter.filter(p => p[type] === val);
     return tempArr.length>0;
  }
  //search by range
  // searchByRange = (minPrice, maxPrice) => {
  //   return this.arr.filter(p => p.price >= minPrice && p.price <= maxPrice);
  // }
  //update function in store
  updatePriceOfProduct(id, price) {
    const pr = this.arr.findIndex(p => parseInt(p.id) === parseInt(id));
    this.arr[pr].update(price);
    this.showAllProduct();
  }
  // add quantity in store
  addQuantity(id)
  {
    const p = this.arr.findIndex( p => parseInt(p.id)=== parseInt(id));
    this.arr[p].addQuantity();
    this.showAllProduct();
  }
    // add quantity in store
    lessQuantity(id)
    {
      const p = this.arr.findIndex( p => parseInt(p.id)===parseInt(id));
      if(this.arr[p].quantity===1)
        this.deletProduct(p);
            this.arr[p].lessQuantity();
            this.showAllProduct();
        
    
    }
  showAllProduct() {
    const listProducts = this.arr.map(function (p) { return `<li> name:${p.name},id:${p.id} ,category: ${p.category} , price: ${p.price}  ,quantity:${p.quantity}</li>` });
    const all = listProducts.join('');
    allProducts.innerHTML = all;
  }
  showProduct() {
    const listProducts = this.arrFilter.map(function (p) { return `<li> name:${p.name},id:${p.id} ,category: ${p.category} , price: ${p.price}  ,quantity:${p.quantity}</li>` });
    const all = listProducts.join('');
    allProducts.innerHTML = all;
  }
  deletProduct(indexProduct)
  {
    this.arr.splice(indexProduct,1);
    alert('deleted')
  }
  //search by category
  // searchByCategory();
}
s = new Store();
arrTypes=[];

//update product button
startUpdate.onclick = () => {
  s.updatePriceOfProduct(pId.value, updatePrice.value);
}

//adding product button
addNewProductSubmit.onclick = () => {
  if(newName.value&& newId.value&& newCategories.value&&newPrice.value)
     s.addProduct(newName.value, newId.value, newCategories.value, newPrice.value, 1);
  s.showAllProduct();
  newName.value= newId.value=newPrice.value=null;
}
//search product btn
searchProductBtn.onclick=(event) => {
  event.preventDefault();
  if(newName)
    arrTypes.push({type:'name',val:newName.value});
  if(newId)
    arrTypes.push({type:'id',val:newId.value});
  if(newPrice)
    arrTypes.push({type:'price',val:newPrice.value});
  if(newCategories)
    arrTypes.push({type:'category', val:newCategories.value});
  search1();
}
search1=()=>
{
  if(arrTypes.every(s.search2))
  {
    alert('thank you HASHEM!!!!!')
    s.showProduct();
  }
  
}
//adding quantity product btn
addQ.onclick=(event)=>
{
  event.preventDefault();
    s.addQuantity(quantityInput.value);
}
lessQ.onclick=(event)=>
{
  event.preventDefault();
    s.lessQuantity(quantityInput.value);
}
