const books = [
  { 
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70 
  }, 
  {
   author: "Сюзанна Кларк",
   name: "Джонатан Стрейндж і м-р Норрелл",
  }, 
  { 
    name: "Дизайн. Книга для недизайнерів.",
    price: 70
  }, 
  { 
    author: "Алан Мур",
    name: "Неономікон",
    price: 70
  }, 
  {
   author: "Террі Пратчетт",
   name: "Рухомі картинки",
   price: 40
  },
  {
   author: "Анґус Гайленд",
   name: "Коти в мистецтві",
  }
];

let bookBlock = document.querySelector("#root");
let bookList=document.createElement("ul");
bookBlock.append(bookList);

let bookItem=books.forEach(item=>{
  
  try{

    if(item.author==undefined){
      throw `This book has no author`
    }

    if(item.name==undefined){
      throw `This book has no name`
    }

    if(item.price==undefined){
      throw `This book has no price`
    }
    else{

      if (item.author !== undefined && item.name !== undefined && item.price !== undefined) {
        bookList.insertAdjacentHTML('beforeend', `<li>Author is ${item.author}, name is ${item.name} and price - ${item.price}</li>`);
      }

    }
    

  }catch(e){
    console.log(e);
  }

});




