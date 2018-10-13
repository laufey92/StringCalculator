function add(number)
{
	if(number == "")
	{
		return 0;
	}

	if(number.length > 1)
	{
		var array = number.split(/,|\n/);	
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


/*

Náði ekki að kasta villu en komst svona langt með það...
function checkNegative(number)
{
 	var negativeNums = [];
	for(var i = 0; i < number.length; i++)
  	{
  		if(parseInt(number[i]) < 0)
  	  	{
    		negativeNums.push(parseInt(number[i]);
  		}
  	}
  	if(negativeNums.length > 0)
  	{
  		throw new Error("negatives not allowed: " + negativeNums.join(", "));
  	}	
 }
*/