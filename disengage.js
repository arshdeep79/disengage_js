/**
 * @author Arshdeep Giri <arshdeep79@gmail.com>
 */

function disengage(in_options){
  var self = this;
  this._running = false;
  
  this._options = {
    delay       : 1,
    chunk_size  : 1
  };
  this._jobs = [];
  
  if(in_options !== undefined)
    for (var opt in this._options)
      if(in_options[opt] !== undefined)
        this._options[opt] = in_options[opt];
  
  this._do_jobs = function(on_finish_callback){
    for(var i=0 ; i<self._options.chunk_size ; i++){
      var job = self._jobs.shift();
      if(job  === undefined) {
        if(on_finish_callback !== undefined)
          on_finish_callback();
          
        self._running = false; 
        return;
      }
      job.func.apply(this,job.vars);
    }
    setTimeout(function(){self._do_jobs(on_finish_callback);},self._options.delay);
  };
  
  /**
   * Add new job to process
   */
  this.add_job = function(func,vars){
    self._jobs.push({
      func:func,
      vars:vars?vars:[]
    });
  };
  
  /**
   * Remove all stored jobs
   */
  this.clear_jobs = function(){
    self._jobs.length = 0;
  };
  
  /**
   * Start executing jobs
   */
  this.execute = function(on_finish_callback){
    if(self._running) 
      return;
    self._running = true;
    self._do_jobs(on_finish_callback);
  };
}
