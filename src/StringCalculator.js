function add(number)
{
	if(number == "")
	{
		return 0;
	}

	if(number.includes(","))
	{
		var sum = 0;
		var array = number.split(",")
		for(var i = 0; i< array.length; i++)
		{
			sum += parseInt(array[i]);
		}
		return sum
	}

	else
	{
		return parseInt(number);
	}	
}

module.exports = add;