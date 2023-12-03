import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Äidinkieli',
      href: getPermalink('books/7-9/aidinkieli'),
    },
    {
      text: 'Kielet',
      links: [
        {
          text: 'Ruotsi',
          href: getPermalink('books/7-9/ruotsi'),
        },
        {
          text: 'Englanti',
          href: getPermalink('books/7-9/englanti'),
        },
      ],
    },
    {
      text: 'Matematiikka',
      href: getPermalink('books/7-9/matematiikka'),
    },
    {
      text: 'Ympäristöoppi',
      href: getPermalink('books/7-9/ymparistooppi'),
    },
    {
      text: 'Maantieto',
      href: getPermalink('books/7-9/maantieto'),
    },
    {
      text: 'Fysiikka',
      href: getPermalink('books/7-9/fysiikka'),
    },
    {
      text: 'Terveystieto',
      href: getPermalink('books/7-9/terveystieto'),
    },
    {
      text: 'Uskonto',
      href: getPermalink('books/7-9/uskonto'),
    },
    {
      text: 'Historia',
      href: getPermalink('books/7-9/historia'),
    },
    {
      text: 'Musiikki',
      href: getPermalink('books/7-9/musiikki'),
    },
    {
      text: 'Kuvataide',
      href: getPermalink('books/7-9/kuvataide'),
    },
    {
      text: 'Käsityö',
      href: getPermalink('books/7-9/kasityo'),
    },
    {
      text: 'Liikunta',
      href: getPermalink('books/7-9/liikunta'),
    },
    {
      text: 'Kotitalous',
      href: getPermalink('books/7-9/kotitalous'),
    },
    {
      text: 'Ammatit',
      href: getPermalink('books/7-9/ammatit'),
    },
  ],
};
