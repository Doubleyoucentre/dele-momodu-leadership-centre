export type PageSection = {
  eyebrow: string;
  title: string;
  body: string;
  items?: string[];
  id?: string;
};

export type PageData = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: PageSection[];
};

export const pages: Record<string, PageData> = {
  about: {
    eyebrow: 'About DMLC',
    title: 'An environment where ideas can flourish.',
    intro: 'The Dele Momodu Leadership Centre is an intellectual and residential facility established by the Dele Momodu Foundation in Ibadan, Nigeria.',
    image: '/images/centre/residence-wing.jpg', imageAlt: 'Residential buildings at the Dele Momodu Leadership Centre',
    sections: [
      { eyebrow: 'Our story', title: 'More than a research retreat.', body: 'The Centre was conceived as a place where scholars, researchers, writers, journalists, creatives and thought leaders can step away from everyday distractions and devote themselves to research, writing, reflection and intellectual development.' },
      { eyebrow: 'Our vision', title: 'The right environment changes what is possible.', body: 'Inspired by international scholar residency institutions, including the Rockefeller Foundation’s Bellagio Center, DMLC provides Nigerian and African scholars with space to develop ideas, conduct research, write, create and contribute solutions to society.' },
      { eyebrow: 'Our purpose', title: 'A space for African ideas.', body: 'The Centre exists to nurture scholarship, document stories, complete research and explore responses to societal challenges. It brings focus to work across knowledge, leadership, journalism, public policy, culture, innovation and national development.' },
      { id: 'founder', eyebrow: 'The founder', title: 'A legacy of knowledge and leadership.', body: 'Chief Dele Momodu, Nigerian journalist, publisher and founder of Ovation International, established the Centre as part of his longstanding commitment to education, journalism, leadership and the advancement of society.' },
    ],
  },
  programmes: {
    eyebrow: 'Programmes', title: 'People. Ideas. Impact.', intro: 'DMLC creates the conditions for focused scholarship, intellectual exchange and leadership development.',
    image: '/images/programmes/private-study.jpg', imageAlt: 'Private study space at the Centre',
    sections: [
      { eyebrow: '01', title: 'Resident Scholar Programme', body: 'A one-week residential experience for selected scholars working on research, manuscripts, books, academic projects, articles, policy papers and other intellectual or creative work.' },
      { eyebrow: '02', title: 'Leadership & Public Discourse', body: 'The Centre serves as a setting for intellectual conversations, lectures, discussions and programmes addressing important issues affecting Nigeria, Africa and the wider world.' },
      { eyebrow: '03', title: 'Research & Knowledge', body: 'Scholars can access reading resources and an environment designed for deep thinking, careful research and sustained writing.' },
    ],
  },
  residencies: {
    eyebrow: 'Residencies', title: 'A focused week for important work.', intro: 'Selected scholars receive dedicated time, private accommodation and a quiet environment in which to make meaningful progress.',
    image: '/images/centre/private-room.jpg', imageAlt: 'Private accommodation for a resident scholar',
    sections: [
      { eyebrow: 'Programme overview', title: 'Time and space to concentrate.', body: 'At present, the residency lasts one week. DMLC hosts up to four resident scholars at a time, preserving privacy, comfort and an intimate working environment.' },
      { eyebrow: 'What scholars receive', title: 'Support for productivity and wellbeing.', body: 'The experience goes beyond accommodation.', items: ['A private, comfortable room', 'Library and curated reading materials', 'Quiet spaces for research and writing', 'High-speed internet access', 'Modern kitchen facilities', 'Swimming pool and outdoor recreation', 'A serene and secure residential setting'] },
      { eyebrow: 'Who can apply', title: 'For serious thinkers with a clear objective.', body: 'Potential residents include university lecturers, professors, postgraduate and PhD researchers, independent researchers, authors, writers, journalists, policy researchers, historians, social scientists, thinkers and creative professionals.' },
      { eyebrow: 'Scholar responsibility', title: 'Arrive ready to use the week meaningfully.', body: 'Selected scholars should arrive with a clearly defined project, specific objectives, relevant materials where necessary, respect for the Centre and other residents, and a commitment to intellectual discipline.' },
      { eyebrow: 'Application enquiries', title: 'Speak with the Centre.', body: 'Contact DMLC for information about the residency and how to apply. Bring a clear outline of the work you would like to advance.' },
    ],
  },
  resources: {
    eyebrow: 'Resources', title: 'Tools for thought, research and writing.', intro: 'DMLC supports contemporary scholarship with a focused physical environment, connectivity and carefully assembled reading materials.',
    image: '/images/centre/library-study.jpg', imageAlt: 'Library shelves and study desk at DMLC',
    sections: [
      { eyebrow: 'Reading', title: 'A growing collection.', body: 'The Centre provides access to books, publications and archival materials, including items reflecting Chief Dele Momodu’s career in journalism and public life.' },
      { eyebrow: 'Research', title: 'A connected place to work.', body: 'Reliable internet access supports online research, communication, digital resources and the everyday practice of contemporary scholarship.' },
      { eyebrow: 'Archive', title: 'Materials with historical value.', body: 'The collection includes publications and magazines connected to journalism and public life.' },
    ],
  },
  library: {
    eyebrow: 'Library & Archive', title: 'A quiet room. A useful collection.', intro: 'The library supports reading, research and reflection during the resident scholar programme.',
    image: '/images/centre/library-study.jpg', imageAlt: 'Bookshelves in a DMLC study room',
    sections: [
      { eyebrow: 'Books', title: 'Reading across ideas and disciplines.', body: 'Residents have access to books and curated reading materials during their stay.' },
      { eyebrow: 'Publications', title: 'Journalism and public life.', body: 'Historical publications and magazines reflect aspects of Chief Dele Momodu’s extensive career.' },
      { eyebrow: 'Research access', title: 'Built around the work at hand.', body: 'The library forms part of a wider environment for sustained research, writing and reflection.' },
    ],
  },
};
