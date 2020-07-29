const arr = [];
arr.push(3)
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
          } 
        }
          return false;
          
        
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
          for ( let i = 0; i < this.length; i++){
              this[i] = this[i+1];
            //   console.log(this[i]);
          }
        //   console.log(toShift)

          delete this[this.length-1];
          this.length --;
          return toShift;
          
      },
      unshift: function(value){
          
          for ( let i = this.length; i >= 1; i--q){
              this[i]=this[i-1];
          }
          this[0]= value;
          this.length++;
        //   console.log(this)

      }
  
  
    };
  };
  
  module.exports = Ray;
  