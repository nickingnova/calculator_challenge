let state = 0;

function themeChange(){
	let bodyConstructor =  document.getElementsByTagName('body');
	let bodyTheme = bodyConstructor[0].id;
	switch(bodyTheme){
		case "toggle-one":
			state = 1;
			bodyConstructor[0].id = 'toggle-two';
			break;
		case "toggle-two":
			if(state === 1){
				bodyConstructor[0].id = 'toggle-three';
			} else if(state === 3){
				bodyConstructor[0].id = 'toggle-one';
			}
			break;
		case "toggle-three":
			bodyConstructor[0].id = 'toggle-two';
			state = 3;
			break;
	}
}

let print= [];

let printDisplay = document.getElementById('display');
let operatorBefore = 0;
let operatorUse = 0;

function set(data){
	if(data === "*" || data === "+" || data === "-" || data === "/" ){
		if(operatorBefore == 1){
			let printParse = (print.join(''))
			printDisplay.value = printParse;
		} else {
			operatorBefore = 1;
			operatorUse = data;
			print.push(data);
			let printParse = (print.join(''))
			printDisplay.value = printParse;
		}
	} else {
		print.push(data);
		let printParse = (print.join(''))
		printDisplay.value = printParse;
	}
}

function eraseLast(){
	let large = String(print.slice(-1));
	if(large === "*" || large === "+" || large === "-" || large === "/" ){
		operatorBefore = 0;
		operatorUse = 0;
	}
	print.pop();
	let printParse = (print.join(''))
	printDisplay.value = printParse;
}

function clean(){
	operatorBefore = 0;
	indexOperator = 0;
	operatorUse = 0;
	print.splice(0)
	let printParse = (print.join(''))
	printDisplay.value = printParse;
}

function calc(){
	if(print.value == []){
		printDisplay.value = 0;
	}
	let operator = (element) => element == operatorUse;
	let indexOperator;
	if(operatorUse == 0){
		indexOperator = 0;
	} else {
		indexOperator = print.findIndex(operator)
		let arrayBefore = parseFloat((print.slice(0,indexOperator)).join(''))
		let arrayAfter = parseFloat((print.slice(indexOperator + 1)).join(''))
		let result
		if(isNaN(arrayBefore) || isNaN(arrayAfter)){
			printDisplay.value = "Error";
		} else {
			switch(operatorUse){
				case "*":
					result = arrayBefore * arrayAfter;
					clean()
					if (result % 1 == 0) {
						set(result);
					} else {
						set(result.toFixed(2));
					}
					break;
				case "+":
					result = arrayBefore + arrayAfter;
					clean()
					if (result % 1 == 0) {
						set(result);
					} else {
						set(result.toFixed(2));
					}
					break;
				case "-":
					result = arrayBefore - arrayAfter;
					clean()
					if (result % 1 == 0) {
						set(result);
					} else {
						set(result.toFixed(2));
					}
					break;
				case "/":
					result = arrayBefore / arrayAfter;
					clean()
					if (result % 1 == 0) {
						set(result);
					} else {
						set(result.toFixed(2));
					}
					break;
			}
		}
	}
}

window.addEventListener('keydown', e => {
	switch(e.key){
		case "Enter":
			calc();
			break;
		case "Backspace":
			eraseLast();
			break;
		case "Delete":
			clean();
			break;
		case "/":
			set(e.key)
			break;
		case "*":
			set(e.key)
			break;
		case "+":
			set(e.key)
			break;
		case "-":
			set(e.key)
			break;
		case "0":
			set(e.key)
			break;
		case "1":
			set(e.key)
			break;
		case "2":
			set(e.key)
			break;
		case "3":
			set(e.key)
			break;
		case "4":
			set(e.key)
			break;
		case "5":
			set(e.key)
			break;
		case "6":
			set(e.key)
			break;
		case "7":
			set(e.key)
			break;
		case "8":
			set(e.key)
			break;
		case "9":
			set(e.key)
			break;
		case ".":
			set(e.key)
			break;
	}
})