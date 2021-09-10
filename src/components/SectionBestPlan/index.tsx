import { Button, Typography } from '@material-ui/core';
import { Container } from './styles';
import HouseImg from '../../assets/relax-working.svg';

export function SectionBestPlan() {
  return (
    <Container>
      <span>
        <Typography variant="h4" component="h4" style={{ fontWeight: 'bold' }}>
          Qual o melhor plano para mim?
        </Typography>
        <Typography variant="h6" component="h6" style={{ color: '#718096' }}>
          Comece.
        </Typography>
      </span>
      <div>
        <div>
          <img src={HouseImg} />
          <div>
            <Typography variant="h6" component="h6" style={{ fontWeight: 'bold' }}>
              Starter
            </Typography>
            <Typography variant="subtitle1" component="p" style={{ color: '#718096' }}>
              Calendário sempre atualizado e integração com escolas de forma segura.
            </Typography>
            <Button variant="contained" color="primary">
              <Typography variant="body1" component="a" href="https://immunie.net/company/media-assets">
                SABER MAIS
              </Typography>
            </Button>
          </div>
        </div>
        <div>
          <img src={HouseImg} />
          <div>
            <Typography variant="h6" component="h6" style={{ fontWeight: 'bold' }}>
              Premium
            </Typography>
            <Typography variant="subtitle1" component="p" style={{ color: '#718096' }}>
            Guarde suas informações, receba lembretes e viaje tranquilo com certificados traduzidos para 12 idiomas
            </Typography>
            <Button variant="contained" color="primary">
              <Typography variant="body1" component="a" href="https://immunie.net/company/media-assets">
                TESTE GRÁTIS
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}