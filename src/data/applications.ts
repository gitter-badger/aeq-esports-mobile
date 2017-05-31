import { Application } from "../models/application";

export const APPLICATIONS: Application[] = [
  {
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'max.mustermann@web.de',
    text: '',
    status: 'new',
    date: '09:15',
    games: ['League of Legends', 'CS:GO']
  },
  {
    firstName: 'Dennis',
    lastName: 'Kämmer',
    email: 'dennis.kämmer@web.de',
    text: '',
    status: 'new',
    date: '12:48',
    games: ['CS:GO']
  },
  {
    firstName: 'Andreas',
    lastName: 'Putzeck',
    email: 'andreas.putzeck@web.de',
    text: '',
    status: 'new',
    date: '16:11',
    games: ['League of Legends']
  },
  {
    firstName: 'Elena',
    lastName: 'Subert',
    email: 'elena.supert@web.de',
    text: '',
    status: 'pending',
    date: '14:03',
    games: ['League of Legends']
  },
  {
    firstName: 'Franz',
    lastName: 'Getter',
    email: 'franz.getter@web.de',
    text: '',
    status: 'pending',
    date: '18:57',
    games: ['CS:GO']
  }
];
