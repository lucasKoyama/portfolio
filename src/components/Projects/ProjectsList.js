import oncet from '../../videos/desktop/oncet.mp4';
import mywallety from '../../videos/desktop/mywallety.mp4';
import onlineStore from '../../videos/desktop/onlineStore.mp4';
import oncetMobile from '../../videos/mobile/oncet.mp4';
import walletyMobile from '../../videos/mobile/myWallety.mp4';
import onlineStoreMobile from '../../videos/mobile/onlineStore.mp4';

const fudamentals = ['javascript', 'html', 'css', 'git & github', 'unix & bash'];

const projectsList = [
  {
    nome: 'landing page ONCET',
    link: 'https://www.oncet.com.br/',
    videoDesktop: oncet,
    videoMobile: oncetMobile,
    skillsUsed: [...fudamentals],
  },
  {
    nome: 'web app My Wallety',
    link: 'https://my-wallety.vercel.app/carteira',
    videoDesktop: mywallety,
    videoMobile: walletyMobile,
    skillsUsed: [...fudamentals, 'react', 'redux'],
  },
  {
    nome: 'Online Store',
    link: 'https://online-store-lucaskoyama.vercel.app/',
    videoDesktop: onlineStore,
    videoMobile: onlineStoreMobile,
    skillsUsed: [...fudamentals, 'react', 'jest'],
  },
];

export default projectsList;
