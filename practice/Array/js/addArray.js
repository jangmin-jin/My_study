		let numbers = [2, 4, 6, 8, 10];
		showArray(numbers);

		let result = 0;
		for(let i = 0; i < numbers.length; i++){
			result+= numbers[i];
		}
		numbers.push(result);
		
		showArray(numbers);

		function showArray(arr) {
			let str = "<table><tr>";
			for (let i = 0; i < arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}