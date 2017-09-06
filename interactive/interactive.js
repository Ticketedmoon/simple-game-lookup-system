// This works.
$(document).ready(function()
{
	var targetInput = document.getElementById('suggest');
	targetInput.focus();

	targetInput.addEventListener("keyup", function(event)
		{
			var query = $("#suggest").val();

			if(query.length > 0)
			{
				$.ajax (
				{

					url: "interactive.php",
					method: "POST",
					
					data: 
					{
						search: 1,
						q: query
					},

					success: function(data)
					{
						// Executes if ajax code successful.
						$("#response").html(data);
						console.log(query);
					},

					dataType: 'text'

				}
			);
		}
	});

	$(document).on('click', 'li', function()
	{
		var game = $(this).text();
		$("#suggest").val(game);
		$("#response").html("");	
		console.log(game);

	});

});
/////////////////////////////////////////////

var i = 0;

function colorChange()
{
	var theseColors = ["red", "green", "purple", "orange", "black", "yellow", "#1E2EDE"];
	document.body.style.backgroundColor = theseColors[i];
	i++;

	resetIncrement();
}

function resetIncrement()
{
	if(this.i == 7)
	{
		this.i = 0;
	}
}