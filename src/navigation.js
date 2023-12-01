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
          href: getPermalink('books/kielet/ruotsi'),
        },
        {
          text: 'Englanti',
          href: getPermalink('books/kielet/englanti'),
        },
      ],
    },
    {
      text: 'Matematiikka',
      href: getPermalink('books/matematiikka'),
    },
    {
      text: 'Ympäristöoppi',
      href: getPermalink('books/ymparistooppi'),
    },
    {
      text: 'Maantieto',
      href: getPermalink('books/maantieto'),
    },
    {
      text: 'Fysiikka',
      href: getPermalink('books/fysiikka'),
    },
    {
      text: 'Terveystieto',
      href: getPermalink('books/terveystieto'),
    },
    {
      text: 'Uskonto',
      href: getPermalink('books/uskonto'),
    },
    {
      text: 'Historia',
      href: getPermalink('books/historia'),
    },
    {
      text: 'Musiikki',
      href: getPermalink('books/musiikki'),
    },
    {
      text: 'Kuvataide',
      href: getPermalink('books/kuvataide'),
    },
    {
      text: 'Käsityö',
      href: getPermalink('books/kasityo'),
    },
    {
      text: 'Liikunta',
      href: getPermalink('books/liikunta'),
    },
    {
      text: 'Kotitalous',
      href: getPermalink('books/kotitalous'),
    },
    {
      text: 'Ammatit',
      href: getPermalink('books/ammatit'),
    },
  ],
};
