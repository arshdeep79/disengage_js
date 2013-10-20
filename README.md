Disengage.js
============
Disengage.js makes your heavy duty JS loops asynchronous. Eliminates   
**Unresponsive script error**.

[Demo (Manipulating thousands of DOM nodes without jamming browser)](https://rawgith
ub.com/arshdeep79/disengage_js/master/index.html)
###Example
```
/**
 *    Initialize 
 *    Execute 50 iterations every 1ms
 */
var de = new disengage({
          delay:1,
          chunk_size:50
        });
        
//Adding 10k jobs
for(var i=0 ; i<10000 ; i++){
    de.add_job(function(var1,var2){
        //do some slower operation
    },['value_for_var1','value_for_var2']);
}
de.execute(function(){
    //finished all the jobs
});
```

###The author

Disengage.js is the work of [Arshdeep Giri](https://www.facebook.com/arshdeep.giri).

###License
Disengage.js is published under the MIT license and hosted on GitHub. If you find errors or typos please file an issue or a pull request on the repository.