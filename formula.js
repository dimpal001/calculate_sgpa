function chooses(){
	let no_of_sub = "";
	no_of_sub = document.querySelector('#inputs').value;
	let form = document.querySelector('#forms');
	document.getElementById('inputs').value = "";
	document.getElementById('inputs').style.pointerEvents = "none";
	document.getElementById('btn').style.pointerEvents = "none";

	for(let i = 1; i <= no_of_sub; i++){
		let div = document.createElement('div');
		div.classList.add('row');
		let label = document.createElement('label');
		let textNode = "Subject " + i;
		let labelText = document.createTextNode(textNode);
		label.appendChild(labelText);
		label.classList.add("label");
		div.append(label);

		let num = document.createElement('input');
		let marks = "marks" + i;
		num.classList.add("input", marks);
		div.append(num);
		num.type = "number";
		num.id = "id";

		let credit = document.createElement('input');
		let credits = "credits" + i;
		credit.classList.add("input", credits);
		credit.type = "number";
		div.append(credit);
		form.append(div);
	}

	let calculate = document.createElement('button');
	let btnName = document.createTextNode("Calculate");
	calculate.append(btnName);
	calculate.classList.add("calculate");
	let container = document.querySelector('.container');

	let restart = document.createElement('button');
	let btnName2 = document.createTextNode("Another Response");
	restart.append(btnName2);
	restart.classList.add("calculate");

	container.append(calculate);
	container.append(restart);
	restart.addEventListener('click', function(e){
		location.reload();
	})

	calculate.addEventListener('click', function(){
		let marks = 0;
		let point = 0;
		let sum = 0;
		let sumCredit = 0;
		let result = 0;
		for(let i = 1; i <= no_of_sub; i++){
			let marks = ".marks"+i;
			marks = document.querySelector(marks).value;

			let credit = ".credits"+i;
			credit = document.querySelector(credit).value;
			sumCredit = parseInt(sumCredit) + parseInt(credit);

			if(credit == 2){
				if(marks >=45 && marks <= 50){
				marks = 10;
			}
			else if(marks >=40 && marks <=44){
				marks = 9;
			}
			else if(marks >=35 && marks <=39){
				marks = 8;
			}
			else if(marks >=30 && marks <=34){
				marks = 7;
			}
			else if(marks >=25 && marks <=29){
				marks = 6;
			}
			else if(marks >=20 && marks <=24){
				marks = 5;
			}
			}
			else if(credit == 4){
				if(marks >=90 && marks <= 99){
					marks = 10;
				}
				else if(marks >=80 && marks <=89){
					marks = 9;
				}
				else if(marks >=70 && marks <=79){
					marks = 8;
				}
				else if(marks >=60 && marks <=69){
					marks = 7;
				}
				else if(marks >=50 && marks <=59){
					marks = 6;
				}
				else if(marks >=40 && marks <=49){
					marks = 5;
				}
			}
			else if(credit == 3){
				if(marks >=67.5 && marks <= 75){
					marks = 10;
				}
				else if(marks >=60 && marks <=67){
					marks = 9;
				}
				else if(marks >=52.5 && marks <=59.5){
					marks = 8;
				}
				else if(marks >=45 && marks <=52){
					marks = 7;
				}
				else if(marks >=37.5 && marks <=44.5){
					marks = 6;
				}
				else if(marks >=30 && marks <=37){
					marks = 5;
				}
			}
			point = marks*credit;
			sum = parseInt(sum) + parseInt(point);
		}
		result = sum/sumCredit;

		let div = document.querySelector('#forms');
		let div2 = document.createElement('div');
		div2.classList.add("footer");

		let rLabel = document.createElement('label');
		rLabel.classList.add("label");
		let text = document.createTextNode("SGPA");
		rLabel.append(text);
		rLabel.style.textDecoration = "none";
		rLabel.style.fontSize = "35px";

		let finalResult = document.createElement('input');
		finalResult.classList.add("input", "result");

		div2.append(rLabel);
		div2.append(finalResult);
		div.append(div2);
		finalResult.value = result;
		if(finalResult.value === "NaN"){
			finalResult.value = "0.0";
		}
	});
	alert("Fill your obtain marks in the first box and credits in the second box.");
}