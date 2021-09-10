import { Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Container } from './styles';
import Clinics from '../../assets/clinics.svg';
import Schools from '../../assets/schools.svg';
import SportEvents from '../../assets/sport_events.svg';
import Travel from '../../assets/travel.svg';

export function SectionWhere() {
  return (
    <Container>
      <span data-aos="fade-up">
        <Typography variant="h4" component="h4" style={{ fontWeight: 'bold', color: '#2d3748' }}>
          Aonde usar
        </Typography>
        <Typography variant="h6" component="h6" style={{ color: '#718096' }}>
          Torne sua vida mais fácil com Immunie. Sem papel, sem preocupações.
        </Typography>
      </span>
      <div>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <List component="ul">
              <ListItem data-aos="fade-up">
                <ListItemAvatar>
                  <img src={Clinics} />
                </ListItemAvatar>
                <ListItemText>
                  <span>
                    <Typography variant="subtitle1" component="h6" style={{ color: '#718096' }}>
                      CLÍNICAS
                    </Typography>
                    <Typography variant="h6" component="p">
                      Basta conectar sua carteira digital à sua clínica para que seu médico possa fazer o registro de novas vacinas
                    </Typography>
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem data-aos="fade-up">
                <ListItemAvatar>
                  <img src={Schools} />
                </ListItemAvatar>
                <ListItemText>
                  <span>
                    <Typography variant="subtitle1" component="h6" style={{ color: '#718096' }}>
                      ESCOLAS
                    </Typography>
                    <Typography variant="h6" component="p">
                      Compartilhe o cartão de vacinação, fiche de saúde, alergias e contatos de emergência em um clique.
                    </Typography>
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem data-aos="fade-up">
                <ListItemAvatar>
                  <img src={Travel} />
                </ListItemAvatar>
                <ListItemText>
                  <span>
                    <Typography variant="subtitle1" component="h6" style={{ color: '#718096' }}>
                      VIAJANDO
                    </Typography>
                    <Typography variant="h6" component="p">
                      Compartilhe o cartão de vacinação, fiche de saúde, alergias e contatos de emergência em um clique.
                    </Typography>
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem data-aos="fade-up">
                <ListItemAvatar>
                  <img src={SportEvents} />
                </ListItemAvatar>
                <ListItemText>
                  <span>
                    <Typography variant="subtitle1" component="h6" style={{ color: '#718096' }}>
                      EVENTOS ESPORTIVOS
                    </Typography>
                    <Typography variant="h6" component="p">
                      Compartilhe o cartão de vacinação, fiche de saúde, alergias e contatos de emergência em um clique.
                    </Typography>
                  </span>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <div className='container-legislation' data-aos="fade-up">
              <Typography variant="h6" component="h6" style={{ fontWeight: 'bold', color: 'white' }}>
                O que diz a Legislação?
              </Typography>
              <Typography variant="body1" component="p" style={{ color: 'white' }}>
                Confira aqui a lista de Estados e Municípios com leis sobre carteira digital de vacinação e apresentação na matrícula.
              </Typography>
              <Button variant="contained">
                <Typography variant="body1" component="a" href="https://immunie.net/company/media-assets">
                  SABER MAIS
                </Typography>
              </Button>
            </div>
            <div className='container-calendars' data-aos="fade-up">
              <Typography variant="h6" component="h6" style={{ fontWeight: 'bold', color: '#2d3748' }}>
                Confira os principais Calendários de Vacinação
              </Typography>
              <Button variant="contained" color="primary">
                <Typography variant="body1" component="a" href="https://immunie.net/company/media-assets">
                  SABER MAIS
                </Typography>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}