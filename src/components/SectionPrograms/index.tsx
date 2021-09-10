import { Button, Typography } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { Container } from './styles';


export function SectionPrograms() {
  return (
    <Container>
      <span data-aos="fade-up">
        <Typography variant="h4" component="h4" style={{ fontWeight: 'bold' }}>
          Programas de Vacinação no Brasil
        </Typography>
        <Typography variant="h6" component="h6" style={{ color: '#718096' }}>
          Além do Calendário de Vacinação divulgado pelo Ministério da Saúde como diretriz para o Programa Nacional de Imunização, o Brasil também tem como referências os calendários da Sociedade Brasileira de Pediatria e da Sociedade Brasileira de Imunologia.
        </Typography>
        <Button variant="contained" color="primary">
          <Typography variant="body1" component="a" href="https://immunie.net/company/media-assets">
            SABER MAIS
          </Typography>
        </Button>
      </span>
      <div>
        <div data-aos="fade-up">
          <div data-aos="fade-up">
            <Typography variant="h6" component="h6" style={{ fontWeight: 'bold' }}>
              Calendário Nacional de Vacinação 2020
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" component="p">
              PNI / MS
            </Typography>
            <ChevronRight />
          </div>
        </div>
        <div data-aos="fade-up">
          <div>
            <Typography variant="h6" component="h6" style={{ fontWeight: 'bold' }}>
              Calendário de Vacinação a SBP
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" component="p">
              SBP / 2020
            </Typography>
            <ChevronRight />
          </div>
        </div>
        <div data-aos="fade-up">
          <div>
            <Typography variant="h6" component="h6" style={{ fontWeight: 'bold' }}>
              Calendário Único SBIm
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" component="p">
              2020 / Sociedade Brasileira de Imunização
            </Typography>
            <ChevronRight />
          </div>
        </div>
      </div>
    </Container>
  )
}