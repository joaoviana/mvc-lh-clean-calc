// clear_call_history: calls controller
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
    }, 
    read_history: function(){
        controller.read_history();
    },
    clear_call_history: function() {
        controller.clear_call_history();
    }
};

// clear_call_history: clears the model's call history
let controller = {
    operate: function(operation, arg1, arg2){
        let result;

        if(isNaN(arg2)){
            result = logic[operation](arg1,model.read_last_result());
        } else {
            result = logic[operation](arg1, arg2);
        }
        model.set_last_result(result);
        model.add_call(operation, arg1, arg2, result);
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
     
        model.add_call(operation, arg1, arg2, result);

        view.display(result);
        view.display_test(logic.test(arg1, arg2, result, expected));
    },
    read_history: function(){
        view.render_history(model.read_all_calls());
    },
    clear_call_history: function(){
        model.clear_call_history();
        view.render_history(model.read_all_calls());
    }
};

// clear_call_history	
let model = {
    lastResult: 0000,
    calls: [],
    read_last_result: function(){
        return this.lastResult;
    },
    set_last_result: function(lastResult){
        this.lastResult = lastResult;
    }, 
    add_call: function(operation, arg1, arg2, result){
        switch (operation) {
            case 'add':
                operation = '+';
                break;
            case 'subtract':
                operation = '-';
                break;
            case 'multiply':
                operation = 'x';
                break;
            case 'divide':
                operation = '/';
                break;
            default:
                break;
        }
        var history = arg1 + " " + operation + " " + arg2 + " = " + result;
        this.calls.push(history);
    },
    read_all_calls: function(){
        return this.calls;
    },
    clear_call_history: function(){
        this.calls = [];
    }

};


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

let view = {
    display: function(result){
        var displayResult = document.getElementById("result-text");
        displayResult.textContent = result;
    },
    display_test: function(string){
        var displayTest = document.getElementById("test");
        displayTest.textContent = string;
    },
    render_history: function(history){
        var historyList = document.getElementById("history-list");
        historyList.innerHTML =" ";
        for(var i = 0 ; i < history.length; i++){
            var historyItem = document.createElement('li'); 
            historyItem.textContent = history[i];
            historyList.appendChild(historyItem);
        }
    }
};

