 Types of operator by function they perform
     arithimetic
     assignment
     concatenation
     comparison
     logical
     typescomma
     bitwise
     conditionary

     arithimetic operator(they do the work of mathematicalExpression)
       +, -, *, **, % ,++,--

          example
          let a = 6;
          let b = 4;
          let c = 
         //  test later

     concatenation


     assignment operator
     =, +=, -=, *=, /=, %=,
 _____________________________    

        =
        var a = 'olu';


 _____________________________
        +=
        let x = '2';
        let y = '3';

        arith
        x+=y;
        that means that x new value will be:
        x=x+y;
        so x=5


     comparison operator
      == means equal to
        let a= 3;
        let b = 6;
        alert(a==b)
        answer false (because a is not equal to b)
 _____________________________

      === means that datatype and value are be the same
      let a= 3;
      let b = '3';
      alert(a===b)
      answer false (because a and b are the same value but not the same datatype)

 _____________________________     

      !== means not equal to 
      let a= 3;
      let b = '3';
      alert(a!=b)
      answer false (because a is equal b in value)
 _____________________________     

      practical example
        let a= prompt('pls type a number')
        if(a%2==0)
        alert('this is an even number')
     else{
         alert('this an odd number')
     }



     logical operator
       &&, ||, !

       && logical and
       || logical or 
       ! logical not




       note:boolean value are either false or true statements, and empty boolean will give you a false statement  


       control flow
         aka ternary(conditional)operator
         -if /else statements
         - switch

         let age =prompt("your age");
         let beverage=(age>21)?'beer':'water';
         alert(beverage)




   typeof operator


     function
         calling of function is called function invocation
         {} uesd to group function or store action
         () called parameter 
         taiwo(x, y) is called function parameter
         taiwo(3, 2) is called fuction argument


         ways of writing 
         function declaration
         function expression/annonymous-function: let identifier =function(){}
         arrow fuction: ()=>{}  


         D.O.M MANIPULATION
           document object model

          EXAMPLES
            document.getElementById('')
           element.innerHTML
           element.innerText/Textcontent
           document.querySelector('')
           Element.style.property
           addEventlistener('event',function)
           document.querySelectorAll('')
           Element.classlisted.add('class')
           Element.classlist.remove('class')
           document.createElement()
           document.createTextNode()
           .appendChild()
           document.getElementsByClassName()
           ParentNode
           ChildNode
           setTimeout()
           setInterval()
           element.attribute


           use carmel cases for


           math method
           Math.random(),

           loop
           for(let i =0; i<=10; i++){
             console.log(i)
           }


           for loop
           while loop
           do -- while loop


           for(let exercise=1; exercise<4;)

            let dice=math.trunc(math.random()*6)+1;
            while(dice !==6){
             console.log()
            }

            get time()--gives the number of milliseconds from january 1 1970 to present date or date provided
            

            scheduling 
            setTimeout();
            setInterval();
            clearInterval();

            let time=setTimeout(function tivh() {
                   alert("welcome");
                   time=setTimeout(tivh,1000);
            },1000);

            count down
            1. set target time as variable
            2. update time/countdown per second --- using setInterval(func code,delay)
            3. declare function where to state the calculation for result
            4. get current date and time string and convert to milliseconds --- using get Time() 
            5. get the --amount-- of distyance between the count-down time and current time
            6. convert the --amount-- to days, hours, minute and seconds
            7. display ur result in your html 
            8. when count-down is done use clearInterval()
            9. call out/declarce ur function using setInterval()


          Time practical application system 
          countdown system 
          total booking
          digital time 


          create element()
          appendchild()
          createtextnode()
          insertbefore()
          childnodes[]
          document.getelementbyclassname()
          this.parentnode/this.parentElement
