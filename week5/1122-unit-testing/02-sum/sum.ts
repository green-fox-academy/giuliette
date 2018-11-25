// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// 

export class Sum {
  addNum(listOfIntegers: number[]): number{
    let sumNum: number = 0;
    listOfIntegers.forEach(element => {
      sumNum += element;
    });
    return sumNum;
  }
}