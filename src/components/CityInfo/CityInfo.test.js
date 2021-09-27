import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo"; //SUT: Subject under testing (objeto de testeo)

test("CityInfo Render", async () => {
  //AAA
  //Arrange
  //Action

  const city = "Buenos Aires";
  const country = "Argentina";

  //Render: renderiza el componente y retorna una serie de funciones de utilidad
  //En este caso utilizamos "findAllByRole" para consultar al componente
  //Vamos a analizar su estado en el Assert

  //A
  const { findAllByRole } = render(<CityInfo city={city} country={country} />);

  //Assert
  //findAllByRole nos va a buscar (en este caso) todos los componentes que sean "heading" => H1,H2,H3
  //El resultado es un array de componentes (cityAndCountryComponents)

  //AA
  const cityAndCountryComponents = await findAllByRole("heading");

  //Cuando el teste va a ser Correcto??
  //Definicion:
  //Cuando el primer elemento del Heading se encuentre la ciudad de "Buenos Aires"
  // Y el segundo sea el pais de Argentina

  //AAA

  expect(cityAndCountryComponents[0]).toHaveTextContent(city);
  expect(cityAndCountryComponents[1]).toHaveTextContent(country);
});
