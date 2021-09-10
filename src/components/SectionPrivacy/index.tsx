import { Button, Grid, Typography } from '@material-ui/core';
import { Container } from './styles';
import Privacy from '../../assets/privacy_(1).svg'

export function SectionPrivacy() {
  return (
    <Container>
      <div>
        <Grid container spacing={4}>
          <Grid item xs={6} data-aos="fade-up">
            <Typography variant="h4" component="h4" style={{ fontWeight: 'bold', color: 'white' }}>
              Privacidade em Primeiro Lugar
            </Typography>
            <Typography variant="body1" component="p" style={{ color: 'white' }}>
            Immunie foi construído de acordo com os mais elevados padrões de privacidade global, estando 100% de acordo com a Lei Geral de Proteção de Dados Pessoais no Brasil (LGPDP – Lei 13.709/18), Regulamento Geral de Proteção de Dados Europeu (GDPR EU 2016/679) e California Data Protection Act (CDPA / 2018).
            </Typography>
            <Button variant="contained">
            <Typography variant="body1" component="a" href="https://immunie.net/terms-of-use/privacy-policy">
              SABER MAIS
            </Typography>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <img src={Privacy} />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}