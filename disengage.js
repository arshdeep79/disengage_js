function disengage(in_options){
  var self = this;
  this.options = {
    delay       : 1,
    chunk_size  : 1
  };
  this.jobs = [];
  
  if(in_options !== undefined)
    for (var opt in this.options)
      if(in_options[opt] !== undefined)
        this.options[opt] = in_options[opt];
  
  this.addJob = function(func,vars){
    self.jobs.push({
      func:func,
      vars:vars?vars:[]
    });
  };
  
  this.clearJobs = function(){
    this.jobs = [];
  };
  this.doJobs = function(onFinish){
    for(var i=0 ; i<self.options.chunk_size ; i++){
      var job = self.jobs.shift();
      if(typeof job  == 'undefined') {
        if(typeof onFinish != 'undefined')
          onFinish();
        return;
      }
      job.func.apply(this,job.vars);
    }
    
    setTimeout(function(){self.doJobs(onFinish);},self.options.delay);
  };
}
