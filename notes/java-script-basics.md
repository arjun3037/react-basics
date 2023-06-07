1. Everything in JS happens in execution context.
2. Execution conext further devided into two components one is - memory , it contains all variable and functions stored as key value pair.this is also called variable environment
3. second component is code component where all code executes line by line. This is also called Thread of execution.
4. JS is synchronous single threaded lanuage. which means JS can execute execute one command at a time and in a specific order.
5. JS program runs in two phase first phase is creation phase in which it skim through the program and allocate the memory to variables and functions.For variable it assign default value 'undefined' and in case of function it assign whole function code to it.
6. second phase is code execution phase. it skim through program again and execute program line by line.
7. Whenever a function get invoked a new execution context being created.again this execution conext contains two component one is memory and second is code. And it will run in two phase first phase is momory creation and code execution. 







1.  async vs defer in script tag => 
    1. <script scr = "">
        IT will fetch the script from n/w and execcute then and their. At this point HTML parsing stopped, it will resume once script execution over.
    2. <script async scr = "">
        It will fetch script from n/w asynchronously along with the HTML parsing.HTML parsing block when script execution takes place.
    3. <script defer scr = "">
        Script fetched along with HTML parsing but script execution starts when HTML parsing over.