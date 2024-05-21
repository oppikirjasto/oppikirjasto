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
      text: 'Biologia',
      href: getPermalink('books/7-9/biologia'),
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
      text: 'Kemia',
      href: getPermalink('books/7-9/kemia'),
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
      text: 'Elämänkatsomustieto',
      href: getPermalink('books/7-9/elamankatsomustieto'),
    },
    {
      text: 'Historia',
      href: getPermalink('books/7-9/historia'),
    },
    {
      text: 'Yhteiskuntaoppi',
      href: getPermalink('books/7-9/yhteiskuntaoppi'),
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
    /*
    {
      text: 'Haku',
      href: getPermalink('haku'),
    },
    {
      text: 'Paperi',
      href: getPermalink('paperi'),
    },
    */
  ],
};
