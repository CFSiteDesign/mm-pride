export interface Property {
  id: string;
  name: string;
  country: string;
  url: string;
}

export type CountryFilter = 'All' | 'Cambodia' | 'Indonesia' | 'Laos' | 'Philippines' | 'Thailand' | 'Vietnam';

export const COUNTRIES: CountryFilter[] = [
  'All', 'Cambodia', 'Indonesia', 'Laos', 'Philippines', 'Thailand', 'Vietnam'
];

export const PROPERTIES: Property[] = [
  { id: 'kh-rong', name: 'Koh Rong', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-koh-rong' },
  { id: 'kh-sdach', name: 'Koh Sdach', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-koh-sdach' },
  { id: 'kh-phnom', name: 'Phnom Penh', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-phnom-penh' },
  { id: 'kh-siem', name: 'Siem Reap', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-siem-reap' },
  { id: 'kh-kampot', name: 'Kampot', country: 'Cambodia', url: '' },
  { id: 'id-gili', name: 'Gili T', country: 'Indonesia', url: '' },
  { id: 'id-kuta', name: 'Kuta Lombok', country: 'Indonesia', url: '' },
  { id: 'id-nusa', name: 'Nusa Lembongan', country: 'Indonesia', url: '' },
  { id: 'id-ulu', name: 'Uluwatu', country: 'Indonesia', url: '' },
  { id: 'la-luang', name: 'Luang Prabang', country: 'Laos', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-luang' },
  { id: 'la-vang', name: 'Vang Vieng', country: 'Laos', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-vang-vieng' },
  { id: 'ph-duma', name: 'Dumaguete', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-dumaguete' },
  { id: 'ph-manila', name: 'Manila', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-manila' },
  { id: 'ph-nacpan', name: 'Nacpan Beach', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-nacpan' },
  { id: 'ph-panglao', name: 'Panglao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-panglao' },
  { id: 'ph-siargao', name: 'Siargao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/happy-pride-month-event-mad-monkey-siargao' },
  { id: 'ph-siquijor', name: 'Siquijor', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-siquijor' },
  { id: 'th-bangkok', name: 'Bangkok', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-bangkok' },
  { id: 'th-chiang', name: 'Chiang Mai', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-chiang-mai' },
  { id: 'th-pai', name: 'Pai', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-pai' },
  { id: 'th-phuket', name: 'Phuket', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-phuket' },
  { id: 'vn-hanoi', name: 'Hanoi', country: 'Vietnam', url: 'https://madmonkeyhostels.com/tours-events/new-york-city-disco-hanoi-pride-party' },
  { id: 'vn-hoian', name: 'Hoi An', country: 'Vietnam', url: 'https://madmonkeyhostels.com/tours-events/pride-month-event-mad-monkey-hoi-an' },
];
