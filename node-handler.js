/* ui
	node calc.js <operation> <arg1> <arg2>
	node calc.js <operation> <arg1> hist -r
	node calc.js <operation> <arg1> <arg2> -t <exp>
	node calc.js <operation> <arg1> -t <exp>
	node calc.js hist -r
	node calc.js hist -c
	node calc.js help

	<operation>
		add
		subt
		...
		hist
		test
	node calc add 3 4 -h

	add <args1> <arg2> <arg3> -t
		it interprets the final arg as a test case
		and if there are 2 args, it will pull last result
*/

module.exports =  function() {

    let args = process.argv.slice(2);

    for(var i = 0; i< args.length; i++) {
        if(args[i] == 'hist'){
            //return something with hist
        }
        if(args[i] == "-t"){
            //retur something with test?? 
        }

        if(args[i] == "-r")

    }


    let operation = String(args[0])
    let a = Number(args[1]);
    let b = Number(args[2]);

    if (isNaN(a)) {
        a = false;
    };
    if (isNaN(b)) {
        b = false;
    };

    return [operation, a, b];
};