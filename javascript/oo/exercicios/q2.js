const verificarTipoTriangulo = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado2 === lado3) {
      return "Triângulo Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return "Triângulo Isósceles";
    } else {
      return "Triângulo Escaleno";
    }
  };
  
  console.log(verificarTipoTriangulo(2, 2, 2)); // Triângulo Equilátero
  console.log(verificarTipoTriangulo(2, 2, 3)); // Triângulo Isósceles
  console.log(verificarTipoTriangulo(3, 4, 5)); // Triângulo Escaleno
  