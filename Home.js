

$(document).ready(function()
{
	$(".button").mouseover(function()
	{
		$(this).css("border", "2px solid blue");
	});

	$(".button").mouseout(function()
	{
		$(this).css("border", "2px solid black");
	});
	$(".button").click(function()
	{
		var team = createList();
		displayList(list);
	});
});

function displayList(list)
{
	alert(category.grocery);
	
	alert(List.list[0].name);
	alert(List.list[0].class);
	alert(List.list[0].quantity);
	alert(List.list[0].price);

	for (var i=0; i<List.list.length; i++)
	{
		var food = List.list[i];
		alert("The ingredients call for" + food.name + " " + food.class + " " food.quantity + " " + food.price);
	}
}

function createList()
{
	return {
		"Category" : "Grocery",
		
		"list" : [
			{
				"name" : "Lemons",
				"class" : "Fruit",
				"quantity" : 4,
				"Price" : [{ "type" : "On sale", 
					     "price" : 1.99
					   },
					   { "type" : "Regular",
					      "price : 3.99
					   }]
			},
			{
				"name" : "Limes",
				"class" : "Fruit",
				"quantity" : 4,
				"Price" : [{ "type" : "On sale", 
					     "price" : 1.99
					   },
					   { "type" : "Regular",
					      "price : 3.99
					   }]
			
			},
			{
				"name" : "Sweet Potato",
				"class" : "Vegetable",
				"quantity" : 3,
				"Price" : [{ "type" : "On sale", 
					     "price" : 3.99
					   },
					   { "type" : "Regular",
					      "price : 5.99
					   }]
			
			},
			{
				"name" : "Chicken",
				"class" : "Meat",
				"quantity" : 6,
				"Price" : [{ "type" : "On sale", 
					     "price" : 8.99
					   },
					   { "type" : "Regular",
					      "price : 11.99
					   }]
			}

		]
	};
}
	