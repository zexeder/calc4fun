// //Trainer
$('#generate').on('click', function(){

var min, max;
var diapason = $('input[name=diapason]:checked').val();

switch (diapason) {
	case 'n15':
		min = 11, max = 19;
		break;
	case 'n20':
		min = 21, max = 31;
		break;
	case 'n90':
		min = 90, max = 100;
		break;
	case 'n100':
		min = 101, max = 115;
		break;
	case 'n145':
		min = 95, max = 145;
		break;
}


var randVal1 = min - 1 + Math.random()*(max-min+1)
randVal1 = Math.round(randVal1);

var randVal2 = min - 1 + Math.random()*(max-min+1)
randVal2 = Math.round(randVal2);


numberOne = randVal1;
numberTwo = randVal2;

$('#field1').val(numberOne);
$('#field2').val(numberTwo);
$('#answ').val('');
});

$('#answer').on('click', function(){
	var result = numberOne * numberTwo;
	$('#answ').val(result);
});