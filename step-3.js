
let handler = {
    call_add: function(){
        var arg1 = document.getElementById("arg1");
        var arg2 = document.getElementById("arg2");

        controller.add(arg1.valueAsNumber, arg2.valueAsNumber);

        arg1.value = ' ';
        arg2.value = ' ';

    },
    call_subtract: function(){
        var arg1 = document.getElementById("arg1");
        var arg2 = document.getElementById("arg2");

        controller.subtract(arg1.valueAsNumber, arg2.valueAsNumber);

        arg1.value = ' ';
        arg2.value = ' ';
    }
};


// refactor call_add & call_subtract to read from model when needed, and write new result to model
let controller = {
    add: function(arg1, arg2){
        let result;
        if(isNaN(arg2)){
            result = logic.add(arg1,model.read_last_result());
        } else {
            result = logic.add(arg1, arg2);
        }
        model.set_last_result(result);
        view.display(result);
    },
    subtract: function(arg1, arg2){
        let result;
        if(isNaN(arg2)){
            result = logic.subtract(arg1,model.read_last_result());
            console.log(result);
        } else {
            result = logic.subtract(arg1, arg2);
        }
        model.set_last_result(result);
        view.display(result);
    }
};


// set_last_result, read_last_result	
let model = {
    lastResult: 0000,
    read_last_result: function(){
        return this.lastResult;
    },
    set_last_result: function(lastResult){
        this.lastResult = lastResult;
    }
};

let logic = {
    add: function(arg1, arg2){
        return (arg1+arg2);
    },
    subtract: function(arg1,arg2){
        return (arg1-arg2);
    }
};


let view = {
    display: function(result){
        var displayResult = document.getElementById("result-text");
        displayResult.textContent = result;
    }
};