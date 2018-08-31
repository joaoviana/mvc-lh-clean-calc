# MVC-LH - CALCULATOR APP 🔮

More practice with MVC-LH, reverse-engineering/tdd, & story-focus development.

## ⚠️ Overview ⚠️

A simple Todo App designed by the MVC-LH Architecture Paradigm. 
MVC-LH stands for:
 * Model
 * View
 * Controller
 * Logic
 * Handler

---

## User stories 👤 

A user can ...
1. add two numbers & see result
2. subract two numbers & see result
3. chain operations (ie. use last result instead of 2 args)
4. general purpose controller method
5. multiply two numbers & see result
6. divide two numbers & see result
7. provide an expected value and see if they were right
8. see a history of all operations
9. clear the history of all operations  
10. reset last\_result
  
---

## Dev plan 🌈

| story | UI | handler | controller | model | logic | view |
|---|---|---|---|---|---|---|
| 1: + | two inputs, add button, output area | _call\_add_: reads, cleans & passes on inputs | _add_: passes two numbers through _logic.add_ & calls view |  | _add_: adds two numbers & returns the result | _render_: draws result to the UI |  
| 2: - | subtract button | _call\_subtract_: reads, cleans & passes on inputs | _subtract_: passes two numbers through _logic.subtract_ & calls view | | _subtract_: subtracts two numbers & returns the result | |  
| 3: chain |  |  | refactor _call\_add_ & _call\_subtract_ to read from model when needed, and write new result to model | _set\_last\_result_, _read\_last\_result_ |  |  |  
| 4: generalize | both buttons call same handler | _operate_: reads operation, a, b.  calls controller  | _operate_: args - operation(str), a(num), b(num). uses indicated operation & reads/writes last_result | | | |  
| 5: * | mulitply button | | | | _multiply_: multiplies 2 numbers and returns them | |
| 6: / | divide button | | | | _divide_: divides 2 numbers and returns them | |  
| 7: expected values | expected input field, test button, results output space | _test_: reads input, operation & expected value. passes on to controller | _test_: caries out the indicated operation, then compares the result & expected.  calls _view.render_ & _view.render\_test_ | | _test_: takes exected & actual, returns pass/fail message | _render\_test_: draws pass/fail message in test space |  
| 8: history of operations | button to read history, space to display it | _read\_history_: calls controller | _read\_history_: reads history and passes to view.  refactor _operate_ to save each call to the model as a string | _add\_call_, _read\_all\_calls_ | | _render\_history_: renders an array of strings to the history space | 
| 9: clear history | "clear call history" button | _clear\_call\_history_: calls controller | _clear\_call\_history_: clears the model's call history | _clear\_call\_history_ | | 
| 10: set last\_result | a "set last\_result" input field & button | _set\_last\_result_: calls the model | _set\_last\_result_: resets it to the new value | | | |


---

<br>

(there is no L in this app, it's all about state and not logic)


---
<br>

### Notes 🔦

MVC-LH architecture paradigm has a faster development process. This structure is a catalist on collaborative programming. 

The modifications provided do not affect the entire model and the architecture. 
