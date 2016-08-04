describe('EncontrarBordes', function() {
	it('Deberia devolver una matriz con 0 en todas sus posiciones excepto en los bordes de las montañas que encuentre', function() {
		var relieve = [[8, 9, 2, 2, 3, 5], [9, 8, 3, 2, 4, 5], [9, 7, 2, 2, 4, 3], [9, 9, 2, 4, 4, 3], [9, 2, 3, 4, 3, 5]];

		expect(encontrar_bordes(relieve)).toEqual([[1, 0, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 0, 1], [0, 0, 1, 0, 0, 1], [0, 1, 0, 0, 1, 0 ]]);
	});
	
	it('Set de datos donde falla, hay que mirar los valores arriba y abajo', function(){
		var relieve = [[8, 9, 2, 2, 3, 5], [9, 8, 3, 2, 4, 5], [9, 7, 2, 1, 4, 3], [9, 9, 2, 4, 4, 3], [9, 2, 3, 4, 3, 5]];
		expect(encontrar_bordes(relieve)).toEqual([[ 1, 0, 1, 1, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 1, 0, 1 ], [ 0, 0, 0, 0, 0, 1 ], [ 0, 1, 0, 0, 1, 0 ]]);
	})
});
