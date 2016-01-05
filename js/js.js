
//<a href="javascript:void(0);" class="openClose">

jQuery(document).ready(function($){
	$('.dtofbrth').datepicker();
	$('.checkbox').checkbox();
	$('#myTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
});


