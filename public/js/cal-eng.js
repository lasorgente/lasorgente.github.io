jQuery(document).ready(function($){
      $(function() {
      
$.datepicker.regional['en'] = {
	                closeText: 'Close',
	                prevText: '&#x3c;Prev',
	                nextText: 'Next&#x3e;',
	                currentText: 'Today',
	                monthNames:['January','Febraury','March','April','May','Juni','July','August','September','October','November','December'],
	                monthNamesShort:['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
	                dayNames: ['Domenica','Luned&#236','Marted&#236','Mercoled&#236','Gioved&#236','Venerd&#236','Sabato'],
	                dayNamesShort: ['Sun','Mo','Mar','Mer','Gio','Ven','Sab'],
	                dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
	                weekHeader: 'Sm',
	                dateFormat: 'dd/mm/yy',
	                firstDay: 1,
	                isRTL: false,
	                showMonthAfterYear: false,
	                yearSuffix: ''};
	        $.datepicker.setDefaults($.datepicker.regional['en']);
        
        $("#arrival").datepicker();
        $("#departure").datepicker();
        });
        
  
	
  
 
	 
	
});

