import oncet from '../../videos/desktop/oncet.mp4';
import mywallety from '../../videos/desktop/mywallety.mp4';
import onlineStore from '../../videos/desktop/onlineStore.mp4';
import oncetMobile from '../../videos/mobile/oncet.mp4';
import walletyMobile from '../../videos/mobile/myWallety.mp4';
import onlineStoreMobile from '../../videos/mobile/onlineStore.mp4';

const fudamentals = ['javascript', 'html', 'css', 'git & github', 'unix & bash'];

const projectsList = [
  {
    nome: 'Landing Page ONCET',
    link: 'https://www.oncet.com.br/',
    repo: 'https://github.com/lucasKoyama/onCET',
    post: 'https://www.linkedin.com/feed/update/urn:li:activity:7061739741024501760/',
    dialogMsg: 'Nesse projeto desenvolvi uma landing'
      + ' page para a empresa de engenharia civil ONCET'
      + ' não foi utilizado nenhuma biblioteca externa'
      + ' tudo foi feito com HTML, CSS e Javascript puro!',
    videoDesktop: oncet,
    videoMobile: oncetMobile,
    skillsUsed: [...fudamentals],
  },
  {
    nome: 'Web App My Wallety',
    link: 'https://my-wallety.vercel.app/carteira',
    repo: 'https://github.com/lucasKoyama/wallety',
    post: 'https://www.linkedin.com/feed/update/urn:li:activity:7065350424253333504/',
    dialogMsg: 'Aplicativo web de controle financeiro com campos para adicionar despesas'
     + ', incluindo valor, moeda, método de pagamento, tag e descrição. Converte'
     + ' automaticamente as moedas com base no câmbio atual. Permite importar dados de'
     + ' um arquivo CSV para adicionar despesas. A tabela de despesas possui filtros, '
     + 'ordenação e pesquisa de qualquer informação. Oferece opção de visualização'
     + ' personalizada das colunas.',
    videoDesktop: mywallety,
    videoMobile: walletyMobile,
    skillsUsed: [...fudamentals, 'react', 'redux'],
  },
  {
    nome: 'Online Store',
    link: 'https://online-store-lucaskoyama.vercel.app/',
    repo: 'https://github.com/lucasKoyama/Online-Store',
    post: 'https://www.linkedin.com/feed/update/urn:li:activity:7057355229935116288/',
    dialogMsg: 'Projeto em grupo da Trybe onde trabalhei utilizando frameworks ágeis'
     + ' como scrum e kanban através do trello, foi feito também planning poker com o'
     + ' time para a distribuição de requisitos do projeto',
    videoDesktop: onlineStore,
    videoMobile: onlineStoreMobile,
    skillsUsed: [...fudamentals, 'react', 'jest'],
  },
];

export default projectsList;
