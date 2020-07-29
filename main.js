const Ray = function () {
    return {
      length: 0,
      push: function (value) {
        this[this.length] = value;
        this.length ++;
      },
      pop: function(){
          const toBeRemoved = this[this.length-1]
          delete this[this.length-1]
  
          this.length --;
          return toBeRemoved;
      },
      includes: function (value) {
        for (let i = 0; i < this.length; i++) {
      
          if (value === this[i]) {//this[i]????
            return true;
          } else {
            return false;
          }
        }
      },
      indexOf: function(str){
          for ( let i = 0; i < this.length; i++){
              if ( str === this[i]){
                  return i
              }
          }
  
          return -1;
      },
      shift: function(value){
          // console.log(value)
          
          let toShift = this[0];
          console.log(toShift)
          delete this[0];
          this.length --;
          return toShift;
          
      }
  
  
    };
  };
  
  module.exports = Ray;
  