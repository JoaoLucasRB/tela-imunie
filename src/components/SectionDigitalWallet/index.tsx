import { Button, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Container } from './styles';
import Privacy from '../../assets/privacy.svg';
import Logic from '../../assets/logic.svg';
import MobileChat from '../../assets/mobile_chat.svg';
import PeopleMockup from '../../assets/people_mockup.png';

export function SectionDigitalWallet() {
  return (
    <Container>
      <span>
        <Typography variant="h4" component="h4" style={{ fontWeight: 'bold', color: '#2d3748' }}>
          Por que uma Carteira Digital?
        </Typography>
        <Typography variant="h6" component="h6" style={{ color: '#718096' }}>
          Seus registros de vacinas sempre seguros e certificados
        </Typography>
      </span>
      <div>
        <div className="left">
          <div>
            <section>
              <List component="ul">
                <ListItem>
                  <ListItemAvatar>
                    <span>
                      <img src={Privacy} />
                    </span>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography variant="h5" component="span" style={{ fontWeight: 'bold' }}>
                      Seguro
                    </Typography>
                    <Typography variant="body1" component="h6">
                      Não se preocupe mais em guardar cartões de papel com um registro digital seguro.
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <span>
                      <img src={Logic} />
                    </span>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography variant="h5" component="span" style={{ fontWeight: 'bold' }}>
                      Inteligente
                    </Typography>
                    <Typography variant="body1" component="h6">
                      Sempre que o calendário oficial de vacinação é alterado, sua Carteira Digital é atualizada automaticamente.
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <span>
                      <img src={MobileChat} />
                    </span>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography variant="h5" component="span" style={{ fontWeight: 'bold' }}>
                      Sempre em dia
                    </Typography>
                    <Typography variant="body1" component="h6">
                      Saiba antes quando você deve tomar sua próxima vacina com lembretes por mensagem e email.
                    </Typography>
                  </ListItemText>
                </ListItem>

              </List>
            </section>
          </div>

        </div>
        <div className="right">
          <div>
            <div>
              <div>
                <div>
                  <img src={PeopleMockup} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}