import { Typography } from '@material-ui/core';
import { Container } from './styles';
import Phone from '../../assets/phone.svg';
import Share from '../../assets/share.svg';
import Check from '../../assets/check.svg';

export function SectionTutorial() {
  return (
    <Container>
      <span>
        <Typography variant="h4" component="h4" style={{ fontWeight: 'bold' }}>
        COMO FUNCIONA
        </Typography>
        <Typography variant="h6" component="h6" style={{ color: '#718096' }}>
        Fácil, simples e sem a necessidade de mais um aplicativo ocupando memória em seu telefone. 
        </Typography>
      </span>
      <div>
        <div>
          <img src={Phone} />
          <Typography variant="h6" component="h6" style={{ fontWeight: 'bold' }}>
            CRIE SUA CONTA
          </Typography>
          <Typography variant="body1" component="p" style={{ color: '#718096' }}>
            Crie sua conta online em menos de 1 minuto clicando aqui.
          </Typography>
        </div>
        <div>
          <img src={Check} />
          <Typography variant="h6" component="h6" style={{ fontWeight: 'bold' }}>
            ESCOLHA SEU PLANO
          </Typography>
          <Typography variant="body1" component="p" style={{ color: '#718096' }}>
            Quando fizer seu primeiro acesso, você deve escolher o seu plano.
          </Typography>
        </div>
        <div>
          <img src={Share} />
          <Typography variant="h6" component="h6" style={{ fontWeight: 'bold' }}>
            COMECE A USAR
          </Typography>
          <Typography variant="body1" component="p" style={{ color: '#718096' }}>
            Pronto! Já pode começar a utilizar, consultar o calendário de vacinação atualizado e compartilhar seu cartão com sua escola. Seja bem vindo!
          </Typography>
        </div>
      </div>
    </Container>
  )
}