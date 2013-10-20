(function(){
  var names = {
    'first_names' : ['Deena','Crista','Mariann','Asia','Lorine','Noella','Roseann','Edie','Ligia','Brande','Reyna','Caroll','Yanira','Mary','Blanch','Gilberte','Kirsten','Eileen','Jerilyn','Gay','Maria','Elina','Christina'],
    
    'last_names'  : [ 'Glazier','Kalin','Bove','Sorkin','Blumenthal','Pine','Pietz','Nice','Cleaves','Lovett','Kramer','Loera','Gundlach','Lohman','Steffes','Puzo','Trower','Cornelius','Greenman','Mcdougal']
  };
  var label_color = ['primary','success','info','danger'];
  
  var de = new disengage({
    chunk_size  : 50
  });
  function loading_show(){
    document.getElementById('search').disabled = true;
  }
  function loading_kill(){
    document.getElementById('search').disabled = false;
  }
    
  var wrapper = 0;
  window.onload = function(){
    wrapper = document.getElementById('names');
    regen_name();
    document.getElementById('names_count').onchange = regen_name;
  };
  
  
  function regen_name(){
    var dropdown = document.getElementById('names_count');
    wrapper.innerHTML = '';
    total_names = dropdown.value;
    for(var c=1 ; c<=total_names ; c++)
      de.add_job(function(){
        var random_name = document.createTextNode(
                            names.first_names[Math.floor((Math.random()*names.first_names.length)+1)-1]+' '+
                            names.last_names[Math.floor((Math.random()*names.last_names.length)+1)-1]); 
        var random_color = label_color[Math.floor((Math.random()*label_color.length)+1)-1];
        
        var label =  document.createElement('span'); 
        label.className = 'name label label-'+random_color;
        label.appendChild(random_name);
        wrapper.appendChild(label);
      });
    loading_show();
    de.execute(loading_kill);
  };
})();