

// call_add: reads, cleans & passes on inputs
let handler = {
    call_add: function(){
        var arg1 = document.getElementById("arg1");
        var arg2 = document.getElementById("arg2");

        controller.add(arg1.valueAsNumber, arg2.valueAsNumber);

        arg1.textContent= "";
        arg2.textContent="";
    }

};


// add: passes two numbers through logic.add & calls view
let controller = {
    add: function(arg1, arg2){
        let result;
        result = logic.add(arg1,arg2);
        view.display(result);
    }
};

let model = {
};

// add: adds two numbers & returns the result
let logic = {
    add: function(arg1, arg2){
        return (arg1+arg2);
    }
};


// render: draws result to the UI
let view = {
    display: function(result){
        var displayResult = document.getElementById("result-text");
        displayResult.textContent = '';
        displayResult.textContent = result;
    }
};