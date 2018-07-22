function assure_positive(matrix, n) {
	for (var i = 0; i < n; i += 1) {
		var row = matrix[i]; 
		for (var i = 0; i < row.length;
			i += 1) {
				if (row[i] < 0) {
					throw new Error('Negative');
				} 
		 } 
	} 
} 
