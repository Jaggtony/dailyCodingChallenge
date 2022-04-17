//For every good kata idea there seem to be quite a few bad ones!
//
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
//If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
//If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let goodIdeas = 0;    //set variable to add to
    
    for (let idea of x) {    //set for loop
      if (idea === 'good') goodIdeas += 1;  //conditional and what happens if met
    }
    
    if (goodIdeas <= 0) return 'Fail!'; //condition
    
    return goodIdeas > 2 ? 'I smell a series!' : 'Publish!';   //the return
  }