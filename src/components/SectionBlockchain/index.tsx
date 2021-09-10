import { Grid, Typography } from '@material-ui/core';
import Blockchain from '../../assets/blockchain_technology.svg';
import YellowCheck from '../../assets/check-icon-yellow.svg';
import { Container } from './styles';

export function SectionBlockchain() {
  return (
    <Container>
      <span>
        <Grid
          container
          spacing={4}
        >
          <Grid item xs={6}>
            <div className="container-left">
              <Typography variant="h4" component="h4" style={{ fontWeight: 'bold', color: '#2d3748' }}>
                Tecnologia Blockchain
              </Typography>
              <Typography variant="h6" component="h6">
                A autenticação dos registros de vacinação inseridos na sua Carteira Digital de Vacinação e Saúde Immunie utiliza dois níveis de encriptação para garantir a autenticidade dos dados, preservando sua privacidade.
              </Typography>
              <div>
                <Typography variant="subtitle1" component="span">
                  <img src={YellowCheck} />
                  Disponibilidade Global
                </Typography>
                <Typography variant="subtitle1" component="span">
                  <img src={YellowCheck} />
                  Aplicação Mobile e Web
                </Typography>
                <Typography variant="subtitle1" component="span">
                  <img src={YellowCheck} />
                  Tecnologia PWA em qualquer smartphone
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="container-right">
              <img src={Blockchain} />
            </div>
          </Grid>
        </Grid>
      </span>
    </Container>
  )
}