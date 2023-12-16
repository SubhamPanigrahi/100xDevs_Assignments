/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
