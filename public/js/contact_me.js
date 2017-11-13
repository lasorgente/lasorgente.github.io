jQuery(document).ready(function($){
           
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            alert('error')
            
            },
        submitSuccess: function($form, event) {
        	event.preventDefault();
		   var data= $('#contactForm').serialize();
		   $.post('../public/js/contact.php',data,function(e) {
		     	
		     	var res = e.substring(0, 1);
		     	
		     	if(res == "y")
		     	{
		     		$('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>La richiesta è stata inviata. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
   					 $('#contactForm').trigger("reset");
		     	}
		     	else
		     	{
		     		$('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Ci scusiamo ma c'è stato un errore con l'invio della richiesta. Riprovi.");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
		     	}
         	
       }); 
		    
		 }   
		    
		    
		  }); 
		   
		   
		   
    
 $('#name').focus(function() {
	$('#success').html('');
});   
    
    
	 
	
});
