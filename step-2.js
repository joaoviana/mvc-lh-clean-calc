

// call_subtract: reads, cleans & passes on inputs
let handler = {
    call_add: function(){
        var arg1 = document.getElementById("arg1");
        var arg2 = document.getElementById("arg2");

        controller.add(arg1.valueAsNumber, arg2.valueAsNumber);

        arg1.textContent= " ";
        arg2.textContent=" ";
    },
    call_subtract: function(){
        var arg1 = document.getElementById("arg1");
        var arg2 = document.getElementById("arg2");

        controller.subtract(arg1.valueAsNumber, arg2.valueAsNumber);

        arg1.textContent=" ";
        arg2.textContent=" ";
    }

};


// subtract: passes two numbers through logic.subtract & calls view
let controller = {
    add: function(arg1, arg2){
        let result;
        result = logic.add(arg1,arg2);
        view.display(result);
    },
    subtract: function(arg1, arg2){
        let result;
        result = logic.subtract(arg1,arg2);
        view.display(result);
    }
};

let model = {

};

// subtract: subtracts two numbers & returns the result	
let logic = {
    add: function(arg1, arg2){
        return (arg1+arg2);
    },
    subtract: function(arg1,arg2){
        return (arg1-arg2);
    }
};


// render: draws result to the UI
let view = {
    display: function(result){
        var displayResult = document.getElementById("result-text");
        displayResult.textContent = ' ';
        displayResult.textContent = result;
    }
};