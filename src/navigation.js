import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Äidinkieli',
      href: getPermalink('books/aidinkieli'),
    },
    {
      text: 'Kielet',
      links: [
        {
          text: 'Ruotsi',
          href: '#',
        },
        {
          text: 'Englanti',
          href: '#',
        },
      ],
    },
    {
      text: 'Matematiikka',
      href: '#',
    },
    {
      text: 'Ympäristöoppi',
      href: '#',
    },
    {
      text: 'Maantieto',
      href: '#',
    },
    {
      text: 'Fysiikka',
      href: '#',
    },
    {
      text: 'Terveystieto',
      href: '#',
    },
    {
      text: 'Uskonto',
      href: '#',
    },
    {
      text: 'Historia',
      href: '#',
    },
    {
      text: 'Musiikki',
      href: '#',
    },
    {
      text: 'Kuvataide',
      href: '#',
    },
    {
      text: 'Käsityö',
      href: '#',
    },
    {
      text: 'Liikunta',
      href: '#',
    },
    {
      text: 'Kotitalous',
      href: '#',
    },
    {
      text: 'Ammatit',
      href: '#',
    },
  ],
};
