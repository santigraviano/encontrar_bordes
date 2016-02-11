function encontrar_bordes(relieve) {

	var result = [];

	relieve.forEach(function(el, e) {

		result.push([]);

		for (var i = 0;  i < el.length; i++) {

			var prev = i-1,
				next = i+1;
				
			if (i === 0) { // if the current element is the first

				// if the current element is lower than the next element
				r = el[i] < el[next] ? 1 : 0;

			} else if (i === el.length-1) { // if the current element is the last

				// if the current element is lower than the previous element
				r = el[i] < el[prev] ? 1 : 0;

			} else {

				// if the current element is lower or equal than the previous and next element
				r = el[i] <= el[prev] && el[i] <= el[next] ? 1 : 0;

			}

			result[e].push(r);

		}

	});

	return result;
}