import { Button, Divider, Typography } from '@material-ui/core';
import { Container } from './styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export function SectionPlans() {
  return (
    <Container>
      <span data-aos="fade-up">
        <Typography variant="h4" component="h4" style={{ fontWeight: 'bold' }}>
          Nossos Planos
        </Typography>
        <Typography variant="h6" component="h6" style={{ color: '#718096' }}>
          Fique sempre em dia, guarde seus registros com segurança, controle suas permissões, e utilize seu cartão digital de vacinação em qualquer lugar do mundo.
        </Typography>
      </span>
      <div>
        <div data-aos="fade-up">
          <Typography variant="h5" component="h5" style={{ fontWeight: 'bold' }}>
            Starter
          </Typography>
          <Typography variant="subtitle1" component="p" style={{ color: '#718096' }}>
            Comece a usar agora
          </Typography>
          <Divider />
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Calendário de Vacinação Atualizado
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Integração com escolas
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Ficha de Saúde
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Contatos de Emergência
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Carteira de Exames
            </Typography>
          </span>
          <Button variant="outlined" color="primary">
            <Typography variant="body1" component="a" href="https://immunie.net/company/media-assets">
              CRIAR MINHA CONTA
            </Typography>
          </Button>
        </div>
        <div data-aos="fade-up">
          <Typography variant="h5" component="h5" style={{ fontWeight: 'bold' }}>
            Full
          </Typography>
          <Typography variant="subtitle1" component="p" style={{ color: '#718096' }}>
            A pay-once license, just for you
          </Typography>
          <Divider />
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Todos os recursos do Plano Starter
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Lembretes por email e PUSH
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Integração com clínicas
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Carteira Digital de Vacinação
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Autenticação Blockchain
            </Typography>
          </span>
          <Button variant="contained" color="primary">
            <Typography variant="body1" component="a" style={{ color: '#fff' }} href="https://immunie.net/company/media-assets">
              CRIAR MINHA CONTA
            </Typography>
          </Button>
          <Typography variant="caption" component="p" style={{ color: '#2d3748' }}>
            Experimente grátis por 90 dias
          </Typography>
        </div>
        <div data-aos="fade-up">
          <Typography variant="h5" component="h5" style={{ fontWeight: 'bold' }}>
            Premium
          </Typography>
          <Typography variant="subtitle1" component="p" style={{ color: '#718096' }}>
            Sua carteira no Brasil e no Exterior
          </Typography>
          <Divider />
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Todos os recursos do Plano Full
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              12 idiomas
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Certificado Internacional
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Exames Certificados
            </Typography>
          </span>
          <span>
            <CheckCircleOutlineIcon />
            <Typography variant="h6" component="h6" style={{ color: '#2d3748' }}>
              Testes para viajem
            </Typography>
          </span>
          <Button variant="outlined" color="primary">
            <Typography variant="body1" component="a" href="https://immunie.net/company/media-assets">
              CRIAR MINHA CONTA
            </Typography>
          </Button>
          <Typography variant="caption" component="p" style={{ color: '#2d3748' }}>
            Experimente grátis por 90 dias
          </Typography>
        </div>
      </div>
    </Container>
  )
}