/*Given an array/list [] of integers , Construct a product array Of same size Such 
That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].*/

//prep
//p: array list of numbers only positives
//r: return statement
//e:productArray ({12,20}) ==>  return {20,12}  /  productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
function productArray(numbers){
    return numbers.map(x=> numbers.reduce((a, b)=> (a*b)) /x )  
  }   //map each element and use reduce to multiply each element then divide that total by the element its self 