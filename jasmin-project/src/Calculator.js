window.Calculator = {

currentValue:0,
varAfterEachEx:0,

add:function(num1){
  this.currentValue +=num1;
  return this.currentValue;
},

addAny:function(){
	var sum = this.currentValue;

	for (var i=0; i < arguments.length; i++){
		sum+=arguments[i];
	}
	this.currentValue = sum;
	return this.currentValue;
},
};
