$(document).ready(function() {
	
	// Adding
	$('#add').on('click', function() {
		var num1 = parseInt($('#num_one').val(), 10)
		var num2 = parseInt($('#num_two').val(), 10)
		var add = num1 + num2

		$('#answer').text(add)
	})

	// Subtracting
	$('#subtract').on('click', function() {
		var num1 = parseInt($('#num_one').val(), 10)
		var num2 = parseInt($('#num_two').val(), 10)
		var subtract = num1 - num2
		
		$('#answer').text(subtract)
	})

	// Multiplying
	$('#multiply').on('click', function() {
		var num1 = parseInt($('#num_one').val(), 10)
		var num2 = parseInt($('#num_two').val(), 10)
		var multiply = num1 * num2

		$('#answer').text(multiply)
	})

		// Dividing
	$('#divide').on('click', function() {
		var num1 = parseInt($('#num_one').val(), 10)
		var num2 = parseInt($('#num_two').val(), 10)
		var divide = num1 / num2

		$('#answer').text(divide)
	})

})