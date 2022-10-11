/*Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

prep
p:given an array of either underscores to represent flat road or 'n's to represent bumps in the road
r:return weather or not there are more than 15 'n's in your string
e:assert.strictEqual(bump("n"), "Woohoo!");
    assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
    assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
    assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
    assert.strictEqual(bump("______n___n_"), "Woohoo!");
    */
    function bump(x){
        let tick = 0 //ticker to see if its more or less than 15
         for (let i =0; i< x.length;i++){ //loop to count how many 'n's there are
           if(x[i] == 'n'){ //condition to add 1 to the ticker
             tick++
           }
         }if(tick <= 15){ //return condition for the ticker amount
           return 'Woohoo!'
         }else{return 'Car Dead'}
      }