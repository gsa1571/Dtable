$("document").ready(function(){
	//alert("Work !!!");
		
		
	$(".plus").click(function(){
		$(".information_json_plus").before(
			'<tr>' +
				'<td><input type="text" class="form-control" id="information_json_name[]" placeholder="Название поля"></td>' +
				'<td><input type="text" class="form-control" id="information_json_val[]" placeholder="Значение поля"></td>' +
				'<td><span class="btn btn-danger minus pull-right">&ndash;</span></td>' +
			'</tr>'
		);
		
			
	});
	
	$('#save').click(function(){
		
		//alert("Ok");
	
		$('#save').css({'border':'1px solid red'});
		//$('[id="information_json_name[]"]').css({'border':'1px solid red'});
		//$('td>input').css({'border':'1px solid red'});
		//$('td + input information_json_name[]').css({'border':'1px solid red'});
		//$('td .form-control').css({'border':'1px solid red'});
		//$('#information_json_name[]').css({'border':'1px solid red'});
		//$("#information_json_name[]").each(function(index, elem){
		//	information_json_name.push($(this).val());
		//});

		var information_json_name = [];
		var information_json_val = [];	

		
		$('[id="information_json_name[]"]').each(function(index, elem){
			information_json_name.push($(elem).val());
		});

		$('[id="information_json_val[]"]').each(function(index, elem){
			information_json_val.push($(elem).val());
		});
		
		alert("information_json_name: "+information_json_name);
		alert("information_json_val: "+information_json_val);
		
	});	

	// on - так как элемент динамически создан и обычный обработчик с ним не работает
	$(document).on("click", ".minus", function(){
		$( this ).closest("tr").remove(); // удаление строки с полями
	});
		
	
});


