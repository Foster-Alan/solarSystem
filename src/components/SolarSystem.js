import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <section>
          {
            Planets.map((planetas, index) => (<PlanetCard
              key={ index }
              planetName={ planetas.name }
              planetImage={ planetas.image }
            />))
          }
        </section>
      </>
    );
  }
}

export default SolarSystem;
