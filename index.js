function add(param1,param2,param3){
	let param4 = "param4 = " + param1+param2+param3;
	console.log(param1,param2,param3);
	console.log(param4);
	return {
		"param1":param1,
		"param2":param2,
		"param3":param3,
		"param4":param4,
	}
}
module.exports = add;