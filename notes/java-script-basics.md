1. Everything in JS happens in execution context.
2. Execution conext further devided into two components one is - memory , it contains all variable and functions stored as key value pair.this is also called variable environment
3. second component is code component where all code executes line by line. This is also called Thread of execution.
4. JS is synchronous single threaded lanuage. which means JS can execute execute one command at a time and in a specific order.
5. JS program runs in two phase first phase is creation phase in which it skim through the program and allocate the memory to variables and functions.For variable it assign default value 'undefined' and in case of function it assign whole function code to it.
6. second phase is code execution phase. it skim through program again and execute program line by line.
7. Whenever a function get invoked a new execution context being created.again this execution conext contains two component one is memory and second is code. And it will run in two phase first phase is momory creation and code execution. 
8. JS manages the call stack . first element in the Stack is global execution context.Whwnere a new function gets invoked or a new execution context is created then it will push it inside the stack.  
9. This call stack manages the execution contexts only.
10. Callstack also maintain the order of execution of execution contexts.
11. Hoisting means in JS a variable or function can be used before its declaration because JS complie in two phase in first phase it allocate memory to varibale and function and in second phase it execute the codes.
12. functions have thier own execution context and that pushed after global execution context if we define any variable in function then it will created in function local execution context.
13. window is global object which is created along with global execution context.Whenver a JS program run a global execution context being created and a window object created and a this keyword created which is represent the window object.
14. All the variable and function created in global space means outside of any function then it will be .attached to window object 








1.  async vs defer in script tag => 
    1. <script scr = "">
        IT will fetch the script from n/w and execcute then and their. At this point HTML parsing stopped, it will resume once script execution over.
    2. <script async scr = "">
        It will fetch script from n/w asynchronously along with the HTML parsing.HTML parsing block when script execution takes place.
    3. <script defer scr = "">
        Script fetched along with HTML parsing but script execution starts when HTML parsing over.