/*
You will be given a 2-dimensional array (p) that looks similar to below. 
Empty spots are represented by 'o' and your baby's bottom is represented by 'B'. Any scent is represented by '~'.
If the smell is rising vertically, it's safe to say it's coming from the baby - return "Get the wipes!".
If the smell is moving horizontally.. it's probably your partner trying to pass it off as the baby - return 
"You disgust me!". in both cases the three scents must be connected to the baby.
If there is no scent, or there are less than three in a row, there is no baby, 
or they do not form a straight vertical of horizontal line, return "Calm before the storm".

prep
p:given an array with arrays of o ~ or B
r:return the quote in the right context
e:Baby smell
[
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'B', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
]

*/
function pooRoulette(p) {
    return  /~,~,~,B|B,~,~,~/.test(p) ? 'You disgust me!' :
            /~(.+)~\1~\1B/.test(p) ? 'Get the wipes!' : 
            'Calm before the storm';
  }