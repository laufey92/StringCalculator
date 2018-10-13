function add(number)
{
	if(number == "")
	{
		return 0;
	}

	if(number.length > 1)
	{
		var array = number.split(/,|\n/g);	
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
		if(array[i] < 1000)
		{
			sum += parseInt(array[i]);
		}
	}
	return sum;
}


module.exports = add;