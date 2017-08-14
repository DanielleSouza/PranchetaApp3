/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn-sd */
    $(document).on("click", "#btn-sd", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd"));  
         return false;
    });
    
        /* button  #btn-sair */
    $(document).on("click", "#btn-sair", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#md").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-sim */
    
    
        /* button  #BTN-SAIR-NAO */
    $(document).on("click", "#BTN-SAIR-NAO", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#md").modal("toggle");  
         return false;
    });
    
        /* button  #btn-vermelho */
    
    
        /* button  #btn-recolher-sd */
    $(document).on("click", "#btn-recolher-sd", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd"));  
         return false;
    });
    
        /* button  #btn-vermelho */
    $(document).on("click", "#btn-vermelho", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
    }
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
