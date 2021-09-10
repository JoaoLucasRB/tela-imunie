import { Typography } from '@material-ui/core';
import { Container } from './styles';
import LBS from '../../assets/london_business_school_incubator.png';
import AWS from '../../assets/amazon_web_services.svg';
import PWA from '../../assets/pwa_pass_3.svg';

export function SectionGlobalStandard() {
  return (
    <Container>
      <span>
        <Typography variant="h4" component="h4" style={{ fontWeight: 'bold', color: 'white' }}>
          Padrão global de gestão e serviços
        </Typography>
        <Typography variant="h6" component="h6" style={{ color: 'white' }}>
          Trabalhamos com a melhor tecnologia e os melhores provedores de serviço no mercado global.
        </Typography>
      </span>
      <div>
        <div>
          <img src={LBS} />
          <Typography variant="h6" component="h6" style={{ fontWeight: 'bold', color: 'white' }}>
            LBS Incubator
          </Typography>
          <Typography variant="body1" component="p" style={{ color: 'white' }}>
            Temos orgulho de fazer parte da edição 2020-2021 da Incubadora da London Business School, uma das melhores escolas de negócios do mundo.
          </Typography>
        </div>
        <div>
          <img src={AWS} />
          <Typography variant="h6" component="h6" style={{ fontWeight: 'bold', color: 'white' }}>
            Amazon Web Services
          </Typography>
          <Typography variant="body1" component="p" style={{ color: 'white' }}>
            A infraestrutura em nuvem global mais segura, abrangente e confiável para aplicativos.
          </Typography>
        </div>
        <div>
          <img src={PWA} />
          <Typography variant="h6" component="h6" style={{ fontWeight: 'bold', color: 'white' }}>
            PWA
          </Typography>
          <Typography variant="body1" component="p" style={{ color: 'white' }}>
            O Progressive Web Apps representa uma das maiores apostas de empresas como Google e Microsoft para o futuro.
          </Typography>
        </div>
      </div>
    </Container>
  )
}