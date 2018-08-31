// test: reads input, operation & expected value. passes on to controller
let handler = {
    test: function(button){
        var check = document.getElementById("checked").checked;
            if(check){
                this.operate_with_test(button);
            } else {
                this.operate(button);
            }

    },
    operate_with_test: function(button){
        var arg1 = document.getElementById("arg1");
        var arg2 = document.getElementById("arg2");

        var expectedValue = document.getElementById("expected")

        controller.test(button.id, arg1.valueAsNumber, arg2.valueAsNumber, expectedValue.valueAsNumber);

        arg1.value = ' ';
        arg2.value = ' ';
    },
    operate: function(button){
        var arg1 = document.getElementById("arg1");
        var arg2 = document.getElementById("arg2");

        controller.operate(button.id, arg1.valueAsNumber, arg2.valueAsNumber);

        arg1.value = ' ';
        arg2.value = ' ';
    }
};


// test: caries out the indicated operation, then compares the result & expected. calls view.render & view.render_test
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
    },
    test: function(operation, arg1,arg2, expected){
        let result;

        if(isNaN(arg2)){
            result = logic[operation](arg1,model.read_last_result());
        } else {
            result = logic[operation](arg1, arg2);
        }

        model.set_last_result(result);
     
        view.display(result);
        view.display_test(logic.test(arg1, arg2, result, expected));
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

// test: takes exected & actual, returns pass/fail message

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
    },
    test: function(arg1,arg2, result, expected){
        if (result != expected){
            var message;
            message = "Fail! " + "Arg 1: " + arg1 + " and " + "Arg 2: " + arg2 + " -  Was Expecting: " + expected + " but got: " + result;
            return  message;
        } else {
            var message;
            message = "PASS! " + "Arg 1: " + arg1 + " and " + "Arg 2: " + arg2 + " -  Expected: " + expected + " and got: " + result;
            return  message;
        }
    }
};

// render_test: draws pass/fail message in test space
let view = {
    display: function(result){
        var displayResult = document.getElementById("result-text");
        displayResult.textContent = result;
    },
    display_test: function(string){
        var displayTest = document.getElementById("test");
        displayTest.textContent = string;
    }
};