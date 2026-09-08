export type PageSection = {
  eyebrow: string;
  title: string;
  body: string;
  items?: string[];
  note?: string;
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
      { eyebrow: 'The founder', title: 'A legacy of knowledge and leadership.', body: 'Chief Dele Momodu, renowned Nigerian journalist, publisher and founder of Ovation International, established the Centre as part of his longstanding commitment to education, journalism, leadership and the advancement of society.', note: 'No quotation has been added because none was supplied in the approved source material.' },
    ],
  },
  programmes: {
    eyebrow: 'Programmes', title: 'People. Ideas. Impact.', intro: 'DMLC creates the conditions for focused scholarship, intellectual exchange and leadership development.',
    image: '/images/programmes/private-study.jpg', imageAlt: 'Private study space at the Centre',
    sections: [
      { eyebrow: '01', title: 'Resident Scholar Programme', body: 'A one-week residential experience for selected scholars working on research, manuscripts, books, academic projects, articles, policy papers and other intellectual or creative work.' },
      { eyebrow: '02', title: 'Leadership & Public Discourse', body: 'The Centre serves as a setting for intellectual conversations, lectures, discussions and programmes addressing important issues affecting Nigeria, Africa and the wider world.', note: 'Upcoming sessions will be published after programme details are confirmed.' },
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
      { eyebrow: 'Application process', title: 'Applications will open after final approval.', body: 'The application interface is prepared, but no submission is currently sent to a backend or third-party service.', note: 'Application link, deadlines, fees and selection timetable are pending confirmation.' },
    ],
  },
  resources: {
    eyebrow: 'Resources', title: 'Tools for thought, research and writing.', intro: 'DMLC supports contemporary scholarship with a focused physical environment, connectivity and carefully assembled reading materials.',
    image: '/images/centre/library-study.jpg', imageAlt: 'Library shelves and study desk at DMLC',
    sections: [
      { eyebrow: 'Reading', title: 'A growing collection.', body: 'The Centre provides access to books, publications and archival materials, including items reflecting Chief Dele Momodu’s career in journalism and public life.' },
      { eyebrow: 'Research', title: 'A connected place to work.', body: 'Reliable internet access supports online research, communication, digital resources and the everyday practice of contemporary scholarship.' },
      { eyebrow: 'Archive', title: 'Materials with historical value.', body: 'The collection includes publications and magazines connected to journalism and public life.', note: 'A detailed catalogue will be added only after the available holdings have been confirmed.' },
    ],
  },
  library: {
    eyebrow: 'Library & Archive', title: 'A quiet room. A useful collection.', intro: 'The library supports reading, research and reflection during the resident scholar programme.',
    image: '/images/centre/library-study.jpg', imageAlt: 'Bookshelves in a DMLC study room',
    sections: [
      { eyebrow: 'Books', title: 'Reading across ideas and disciplines.', body: 'Residents have access to books and curated reading materials during their stay.', note: 'Titles and collection size are pending a confirmed catalogue.' },
      { eyebrow: 'Publications', title: 'Journalism and public life.', body: 'Historical publications and magazines reflect aspects of Chief Dele Momodu’s extensive career.' },
      { eyebrow: 'Research access', title: 'Built around the work at hand.', body: 'The library forms part of a wider environment for sustained research, writing and reflection.' },
    ],
  },
  events: {
    eyebrow: 'Events', title: 'Conversations that deserve a room.', intro: 'DMLC is a venue for lectures, discussions and programmes addressing issues affecting Nigeria, Africa and the wider world.',
    image: '/images/gallery/main-courtyard.jpg', imageAlt: 'The Centre courtyard prepared for a gathering',
    sections: [
      { eyebrow: 'Programme calendar', title: 'No public events are listed yet.', body: 'Confirmed events will appear here with their title, date, location, description and registration information.', note: 'No event details were invented for this first release.' },
    ],
  },
  news: {
    eyebrow: 'News & Ideas', title: 'Notes from the Centre.', intro: 'A future home for Centre announcements, resident scholar work and considered perspectives.',
    image: '/images/gallery/centre-approach.jpg', imageAlt: 'Approach to the Dele Momodu Leadership Centre',
    sections: [
      { eyebrow: 'Editorial', title: 'Publishing will begin with approved material.', body: 'This structure is ready for articles and future CMS integration.', note: 'No announcements, testimonials or articles have been invented.' },
    ],
  },
  contact: {
    eyebrow: 'Contact', title: 'Visit the Centre in Ibadan.', intro: 'The Dele Momodu Leadership Centre is located in the serene Alalubosa GRA area of Ibadan, Oyo State, Nigeria.',
    image: '/images/hero/dmlc-aerial.jpg', imageAlt: 'Aerial view of the Centre in Alalubosa GRA, Ibadan',
    sections: [
      { eyebrow: 'Location', title: 'Alalubosa GRA, Ibadan.', body: 'The Centre offers privacy, tranquillity and proximity to the intellectual heritage of one of Nigeria’s historic centres of learning.' },
      { eyebrow: 'Enquiries', title: 'Contact details are being confirmed.', body: 'Verified email, telephone and contact-person details will be added before public enquiries open.', note: 'A map has not been embedded because an exact approved pin was not supplied.' },
    ],
  },
};
