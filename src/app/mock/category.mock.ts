import { ICategory } from '../domain/entity/category.entity';

const now = new Date();

export const Categories: Array < ICategory > = [{
    id: '2f096cf0-6cc3-4e01-a7fc-fd8095e597f9',
    name: 'Quantum Physics',
    description: 'Quantum mechanics, part of quantum field theory, is a fundamental theory in physics. It describes physical properties of nature \
        on an atomic scale.',
    createTime: now,
    updateTime: now
  },
  {
    id: '0b248f8f-9541-493c-ab52-bc35ec50d152',
    name: 'Art',
    description: `Art is a diverse range of human activities in creating visual, auditory or performing artifacts, expressing the author's imaginative, \
        conceptual ideas, or technical skill, intended to be appreciated primarily for their beauty or emotional power.`,
    createTime: now,
    updateTime: now
  },
  {
    id: '33b6d68b-2f54-4e1d-a46d-1e159d557cfd',
    name: 'Computer Science',
    description: `Computer science is the study of computation and information. Computer science deals with theory of computation, algorithms, computational \
        problems and the design of computer systems hardware, software and applications.`,
    createTime: now,
    updateTime: now
  },
  {
    id: 'c45f07bc-bf46-416e-88ce-2a4827393222',
    name: 'History',
    description: `History is the study of the past. Events occurring before the invention of writing systems are considered prehistory. \
        "History" is an umbrella term that relates to past events as well as the memory, discovery, collection, organization, presentation, and interpretation \
        of information about these events.`,
    createTime: now,
    updateTime: now
  },
  {
    id: '56b0a32e-5ca1-4b81-b5be-c8c5420bbb68',
    name: 'Finance',
    description: `Finance is a term for matters regarding the management, creation, and study of money and investments. Specifically, it deals with the \
        questions of how and why an individual, company or government acquires the money needed – called capital in the company context – and how they \
        spend or invest that money.`,
    createTime: now,
    updateTime: now
  }
];
