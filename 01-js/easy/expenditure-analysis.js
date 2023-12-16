/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let categoryWiseExpense = {};

  for(const trx of transactions){
    categoryWiseExpense[trx['category']] = (categoryWiseExpense[trx['category']] == undefined) ? trx['price'] : categoryWiseExpense[trx['category']] + trx['price'];
  }

  let result = []
  for(const category in categoryWiseExpense){
    let ansObj = {}
    ansObj["category"] = category;
    ansObj["totalSpent"] = categoryWiseExpense[category];
    result.push(ansObj);
  }

  return result;

}


module.exports = calculateTotalSpentByCategory;
