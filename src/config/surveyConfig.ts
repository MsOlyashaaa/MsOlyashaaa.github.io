import { SurveyConfig } from '@/types/SurveyConfig';

export const surveyConfig: SurveyConfig = [
  {
    id: '1',
    question: 'Select your gender:',
    field: 'gender',
    answers: [{ text: 'Female' }, { text: 'Male' }],
  },
  {
    id: '2',
    question: 'So we can get to know you better, tell us about your relationship status.',
    answers: [
      { text: 'Single', nextId: '3' },
      { text: 'In a relationship', nextId: '8' },
    ],
  },
  {
    id: '3',
    question: 'Are you a single parent?',
    answers: [{ text: 'Yes' }, { text: 'No' }],
  },
  {
    id: '4',
    question:
      '{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?',
    answers: [
      { text: 'I’m very unhappy with how things are going in my relationship' },
      { text: 'I’m unhappy with parts of my relationship, but some things are working well' },
      { text: 'I’m generally happy in my relationship' },
    ],
  },
  {
    id: '5',
    question: 'Do you tend to overthink?',
    answers: [
      { text: 'Yes', nextId: '51' },
      { text: 'No', nextId: '52' },
    ],
  },
  {
    id: '51',
    question: 'So how does it work?',
    hasSpecificDesign: true,
    info: 'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
    answers: [{ text: 'Next', nextId: '6' }],
  },
  {
    id: '52',
    question: 'So how does it work?',
    hasSpecificDesign: true,
    info: 'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
    answers: [{ text: 'Next', nextId: '7' }],
  },
  {
    id: '6',
    question: 'What is most important to you?',
    answers: [{ text: 'Success' }, { text: 'Romance' }, { text: 'Stability' }, { text: 'Freedom' }],
    nextId: '14',
  },
  {
    id: '7',
    question: 'Is emotional control tricky for you?',
    answers: [{ text: 'Yes' }, { text: 'Sometimes' }, { text: 'Rarely' }, { text: 'Not at all' }],
    nextId: '14',
  },
  {
    id: '8',
    question: 'Are you a parent?',
    answers: [{ text: 'Yes' }, { text: 'No' }],
  },
  {
    id: '9',
    question:
      'Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
    answers: [
      { text: 'I was unhappy with how things were going in my relationship' },
      { text: 'I was unhappy with parts of my relationship, but some things were working' },
      { text: 'I was generally happy with my relationship' },
      { text: 'I’ve never been in a relationship' },
    ],
  },
  {
    id: '10',
    question: 'Is your partner an introvert or extrovert?',
    answers: [{ text: 'Introvert' }, { text: 'Extrovert' }, { text: 'A bit of both' }],
  },
  {
    id: '11',
    question: 'What is your partner’s gender?',
    answers: [{ text: 'Male' }, { text: 'Female' }],
  },
  {
    id: '12',
    question: 'Do you agree with the statement below?',
    info: '“My partner and I make sex a priority in our relationship”',
    answers: [
      { text: 'Strongly agree' },
      { text: 'Agree' },
      { text: 'Neutral' },
      { text: 'Disagree' },
      { text: 'Strongly disagree' },
    ],
  },
  {
    id: '13',
    question: 'When you think about your relationship goals, you feel...?',
    answers: [
      { text: 'Optimistic! They are totally doable, with some guidance.' },
      { text: 'Cautious. I’ve struggled before, but I’m hopeful.' },
      { text: 'I’m feeling a little anxious, honestly.' },
    ],
  },
  {
    id: '14',
    question: 'Where did you hear about us?',
    answers: [
      { text: 'Poster or Billboard' },
      { text: 'Friend or Family' },
      { text: 'Instagram' },
      { text: 'Direct Mail or Package Insert' },
      { text: 'Online TV or Streaming TV' },
      { text: 'Radio' },
      { text: 'Search Engine (Google, Bing, etc.)' },
      { text: 'Newspaper or Magazine' },
      { text: 'Facebook' },
      { text: 'Blog Post or Website Review' },
      { text: 'Podcast' },
      { text: 'Influencer' },
      { text: 'Youtube' },
      { text: 'Pinterest' },
      { text: 'Other' },
    ],
  },
];
