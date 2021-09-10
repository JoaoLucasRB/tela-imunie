import { Button, Typography } from '@material-ui/core';
import { Container, Hero } from './styles';

import heroImg from '../../assets/people_cover@2x.jpg';

export function SectionHero() {
  return (
    <Container>
      <Hero>
        <section data-aos="fade-up">
          <Typography variant="h3" component="h3" style={{ fontWeight: 'bold', color: '#2d3748' }}>
            Carteira digital de vacinação e saúde
          </Typography>
          <Typography variant="h6" component="h6">
            Mantenha seus registros atualizados online. Controle o acesso a suas informações de forma segura no seu médico, escolas ou quando for viajar.
          </Typography>
          <Button variant="contained" color="primary">
            <Typography variant="body2" component="a" href="https://www.app.immunie.net/">Começar Agora</Typography>
          </Button>
        </section>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <span>
                    <img src={heroImg} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </Container>
  )
}