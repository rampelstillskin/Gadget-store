$(function() {
	$("#slider-range").slider({
		range: true,
		step: 50,
		min: 0,
		max: 9999,
		values: [0, 5000],
		slide: function(event, ui) {
			$("#amount-left").val("от " + ui.values[0]);
			$("#amount-right").val("до " + ui.values[1]);
		}
	});

	$("#amount-left").val( "от " + $("#slider-range").slider("values", 0));
	$("#amount-right").val("до " + $("#slider-range").slider("values", 1));
});