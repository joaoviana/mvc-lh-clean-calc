// 

let handler = {
    operate: function(button){
        var arg1 = document.getElementById("arg1");
        var arg2 = document.getElementById("arg2");

        controller.operate(button.id, arg1.valueAsNumber, arg2.valueAsNumber);

        arg1.value = ' ';
        arg2.value = ' ';
    }
};

let controller = {
    operate: function(operation, arg1, arg2){
        let result;

        if(isNaN(arg2)){
            result = logic[operation](arg1,model.read_last_result());
        } else {
            result = logic[operation](arg1, arg2);
        }
        model.set_last_result(result);
        view.display(result);
    }
};


let model = {
    lastResult: 0000,
    read_last_result: function(){
        return this.lastResult;
    },
    set_last_result: function(lastResult){
        this.lastResult = lastResult;
    }
};

// multiply: multiplies 2 numbers and returns them	
// divide: divides 2 numbers and returns them

let logic = {
    add: function(arg1, arg2){
        return (arg1+arg2);
    },
    subtract: function(arg1,arg2){
        return (arg1-arg2);
    },
    multiply: function(arg1,arg2){
        return arg1 * arg2;
    },
    divide: function(arg1, arg2){
        return arg1/arg2;
    }
};


let view = {
    display: function(result){
        var displayResult = document.getElementById("result-text");
        displayResult.textContent = result;
    }
};