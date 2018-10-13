function add(number)
{
	if(number == "")
	{
		return 0;
	}

	if(number.includes(","))
	{
		var array = number.split(",");
		return sumOfNumbers(array);	
	}

	else
	{
		return parseInt(number);
	}	
}

function sumOfNumbers(array)
{
	var sum = 0;
	for(var i = 0; i< array.length; i++)
	{
		sum += parseInt(array[i]);
	}
	return sum;
}

module.exports = add;