function add(number)
{
	if(number == "")
	{
		return 0;
	}

	if(number.includes(","))
	{
		var array = number.split(",")
		return parseInt(array[0]) + parseInt(array[1]);
	}

	else
	{
		return parseInt(number);
	}	
}

module.exports = add;