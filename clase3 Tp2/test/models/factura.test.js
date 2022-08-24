import Factura from '../../src/models/Factura.js';

const factura=new Factura(1,1000,[]);
const factura2=new Factura(1,1000,[300, 500]);

test('calcular sin items', () => {
    expect(factura.calculaTotalesDeItems()).toBe(0);
  });

  test('calcular con items', () => {
    expect(factura2.calculaTotalesDeItems()).toBe(800);
  });