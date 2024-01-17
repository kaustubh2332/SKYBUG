document.addEventListener("DOMContentLoaded",function()
{
    var screen = document.querySelector(".screen")
    var buttons = document.querySelectorAll(".btn")
    var clear = document.querySelector(".btn_clear")
    var equal = document.querySelector(".btn_equal")

    buttons.forEach(function(b)
    {
        b.addEventListener("click",function(e)
        {
                let val = e.target.dataset.num;
                screen.value= screen.value+val;
        })
    })

    equal.addEventListener("click", function(e)
    {
         if(screen.value === '')
         {
             screen.value="Please Enter";
         }
         else
         {
            
            var ans = eval(screen.value)
             screen.value=ans;
         }
    })
    
    clear.addEventListener("click",function() {
        let cl =screen.value= ""
        screen.value = cl;

    })
   

    
})