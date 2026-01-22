export interface FamilyMember {
  id: string;
  name: string;
  photo: string;
  birthYear?: string;
  role: 'parent' | 'child';
}

export interface Family {
  id: string;
  father: FamilyMember;
  mother: FamilyMember;
  children: FamilyMember[];
}

// Data keluarga utama
export const mainFamily: Family = {
  id: 'main',
  father: {
    id: 'father-main',
    name: 'Bapak Hasan',
    photo: '/placeholder.svg',
    birthYear: '1950',
    role: 'parent',
  },
  mother: {
    id: 'mother-main',
    name: 'Ibu Fatimah',
    photo: '/placeholder.svg',
    birthYear: '1955',
    role: 'parent',
  },
  children: [
    { id: 'child-1', name: 'Bapuk Sentok Nina', photo: '/placeholder.svg', birthYear: '1975', role: 'child' },
    { id: 'child-2', name: 'Rasilah', photo: '/placeholder.svg', birthYear: '1977', role: 'child' },
    { id: 'child-3', name: 'Muhammad', photo: '/placeholder.svg', birthYear: '1979', role: 'child' },
    { id: 'child-4', name: 'Aisyah', photo: '/placeholder.svg', birthYear: '1981', role: 'child' },
    { id: 'child-5', name: 'Yusuf', photo: '/placeholder.svg', birthYear: '1983', role: 'child' },
    { id: 'child-6', name: 'Khadijah', photo: '/placeholder.svg', birthYear: '1985', role: 'child' },
    { id: 'child-7', name: 'Ibrahim', photo: '/placeholder.svg', birthYear: '1987', role: 'child' },
    { id: 'child-8', name: 'Maryam', photo: '/placeholder.svg', birthYear: '1989', role: 'child' },
    { id: 'child-9', name: 'Umar', photo: '/placeholder.svg', birthYear: '1991', role: 'child' },
    { id: 'child-10', name: 'Zainab', photo: '/placeholder.svg', birthYear: '1993', role: 'child' },
    { id: 'child-11', name: 'Ali', photo: '/placeholder.svg', birthYear: '1995', role: 'child' },
    { id: 'child-12', name: 'Halimah', photo: '/placeholder.svg', birthYear: '1997', role: 'child' },
  ],
};

// Data keluarga dari masing-masing anak
export const childFamilies: Record<string, Family> = {
  'child-1': {
    id: 'child-1',
    father: { id: 'child-1', name: 'Bapuk Sentok mama', photo: '/placeholder.svg', birthYear: '1975', role: 'parent' },
    mother: { id: 'spouse-1', name: 'Bapuk Sentok Nina', photo: '/placeholder.svg', birthYear: '1978', role: 'parent' },
    children: [
      { id: 'anak-sentok-1', name: 'Suliarno Sentok', photo: '/placeholder.svg', birthYear: '2000', role: 'child' },
      { id: 'anak-sentok-2', name: 'Suwartini', photo: '/placeholder.svg', birthYear: '2003', role: 'child' },
      { id: 'anak-sentok-3', name: 'Maka Tika', photo: '/placeholder.svg', birthYear: '2006', role: 'child' },
      { id: 'anak-sentok-4', name: 'Amak Tiara', photo: '/placeholder.svg', birthYear: '2006', role: 'child' },
      { id: 'anak-sentok-5', name: 'Madi Roby', photo: '/placeholder.svg', birthYear: '2006', role: 'child' },
    ],
  },
  'child-2': {
    id: 'child-2',
    father: { id: 'spouse-2', name: 'Rasilah', photo: '/placeholder.svg', birthYear: '1975', role: 'parent' },
    mother: { id: 'child-2', name: 'Juminten', photo: '/placeholder.svg', birthYear: '1977', role: 'parent' },
    children: [
      { id: 'anak-rasilah-1', name: 'Satriadi Gotama', photo: '/placeholder.svg', birthYear: '2001', role: 'child' },
      { id: 'anak-rasilah-2', name: 'Astina Putri', photo: '/placeholder.svg', birthYear: '2004', role: 'child' },
      { id: 'anak-rasilah-3', name: 'Noneng', photo: '/placeholder.svg', birthYear: '2004', role: 'child' },
      { id: 'anak-rasilah-4', name: 'Sudiartini', photo: '/placeholder.svg', birthYear: '2004', role: 'child' },
      { id: 'anak-rasilah-5', name: 'Sabdi', photo: '/placeholder.svg', birthYear: '2004', role: 'child' },
      { id: 'anak-rasilah-6', name: 'Murdiono', photo: '/placeholder.svg', birthYear: '2004', role: 'child' },
    ],
  },
  'child-3': {
    id: 'child-3',
    father: { id: 'child-3', name: 'Muhammad', photo: '/placeholder.svg', birthYear: '1979', role: 'parent' },
    mother: { id: 'spouse-3', name: 'Ratna', photo: '/placeholder.svg', birthYear: '1982', role: 'parent' },
    children: [
      { id: 'grandchild-3-1', name: 'Dimas', photo: '/placeholder.svg', birthYear: '2005', role: 'child' },
      { id: 'grandchild-3-2', name: 'Citra', photo: '/placeholder.svg', birthYear: '2008', role: 'child' },
      { id: 'grandchild-3-3', name: 'Eka', photo: '/placeholder.svg', birthYear: '2010', role: 'child' },
      { id: 'grandchild-3-4', name: 'Fani', photo: '/placeholder.svg', birthYear: '2012', role: 'child' },
    ],
  },
  'child-4': {
    id: 'child-4',
    father: { id: 'spouse-4', name: 'Hendra', photo: '/placeholder.svg', birthYear: '1979', role: 'parent' },
    mother: { id: 'child-4', name: 'Aisyah', photo: '/placeholder.svg', birthYear: '1981', role: 'parent' },
    children: [{ id: 'grandchild-4-1', name: 'Gilang', photo: '/placeholder.svg', birthYear: '2006', role: 'child' }],
  },
  'child-5': {
    id: 'child-5',
    father: { id: 'child-5', name: 'Yusuf', photo: '/placeholder.svg', birthYear: '1983', role: 'parent' },
    mother: { id: 'spouse-5', name: 'Indah', photo: '/placeholder.svg', birthYear: '1986', role: 'parent' },
    children: [
      { id: 'grandchild-5-1', name: 'Hafiz', photo: '/placeholder.svg', birthYear: '2008', role: 'child' },
      { id: 'grandchild-5-2', name: 'Jasmine', photo: '/placeholder.svg', birthYear: '2011', role: 'child' },
    ],
  },
  'child-6': {
    id: 'child-6',
    father: { id: 'spouse-6', name: 'Kevin', photo: '/placeholder.svg', birthYear: '1983', role: 'parent' },
    mother: { id: 'child-6', name: 'Khadijah', photo: '/placeholder.svg', birthYear: '1985', role: 'parent' },
    children: [
      { id: 'grandchild-6-1', name: 'Luthfi', photo: '/placeholder.svg', birthYear: '2010', role: 'child' },
      { id: 'grandchild-6-2', name: 'Maya', photo: '/placeholder.svg', birthYear: '2013', role: 'child' },
      { id: 'grandchild-6-3', name: 'Nadia', photo: '/placeholder.svg', birthYear: '2016', role: 'child' },
    ],
  },
  'child-7': {
    id: 'child-7',
    father: { id: 'child-7', name: 'Ibrahim', photo: '/placeholder.svg', birthYear: '1987', role: 'parent' },
    mother: { id: 'spouse-7', name: 'Olivia', photo: '/placeholder.svg', birthYear: '1990', role: 'parent' },
    children: [
      { id: 'grandchild-7-1', name: 'Pasha', photo: '/placeholder.svg', birthYear: '2012', role: 'child' },
      { id: 'grandchild-7-2', name: 'Qori', photo: '/placeholder.svg', birthYear: '2015', role: 'child' },
    ],
  },
  'child-8': {
    id: 'child-8',
    father: { id: 'spouse-8', name: 'Rudi', photo: '/placeholder.svg', birthYear: '1987', role: 'parent' },
    mother: { id: 'child-8', name: 'Maryam', photo: '/placeholder.svg', birthYear: '1989', role: 'parent' },
    children: [{ id: 'grandchild-8-1', name: 'Salsa', photo: '/placeholder.svg', birthYear: '2014', role: 'child' }],
  },
  'child-9': {
    id: 'child-9',
    father: { id: 'child-9', name: 'Umar', photo: '/placeholder.svg', birthYear: '1991', role: 'parent' },
    mother: { id: 'spouse-9', name: 'Tia', photo: '/placeholder.svg', birthYear: '1994', role: 'parent' },
    children: [
      { id: 'grandchild-9-1', name: 'Udin', photo: '/placeholder.svg', birthYear: '2016', role: 'child' },
      { id: 'grandchild-9-2', name: 'Vina', photo: '/placeholder.svg', birthYear: '2019', role: 'child' },
    ],
  },
  'child-10': {
    id: 'child-10',
    father: { id: 'spouse-10', name: 'Wahyu', photo: '/placeholder.svg', birthYear: '1991', role: 'parent' },
    mother: { id: 'child-10', name: 'Zainab', photo: '/placeholder.svg', birthYear: '1993', role: 'parent' },
    children: [{ id: 'grandchild-10-1', name: 'Xena', photo: '/placeholder.svg', birthYear: '2018', role: 'child' }],
  },
  'child-11': {
    id: 'child-11',
    father: { id: 'child-11', name: 'Ali', photo: '/placeholder.svg', birthYear: '1995', role: 'parent' },
    mother: { id: 'spouse-11', name: 'Yanti', photo: '/placeholder.svg', birthYear: '1998', role: 'parent' },
    children: [{ id: 'grandchild-11-1', name: 'Zahra', photo: '/placeholder.svg', birthYear: '2020', role: 'child' }],
  },
  'child-12': {
    id: 'child-12',
    father: { id: 'spouse-12', name: 'Arman', photo: '/placeholder.svg', birthYear: '1995', role: 'parent' },
    mother: { id: 'child-12', name: 'Halimah', photo: '/placeholder.svg', birthYear: '1997', role: 'parent' },
    children: [
      { id: 'grandchild-12-1', name: 'Alif', photo: '/placeholder.svg', birthYear: '2021', role: 'child' },
      { id: 'grandchild-12-2', name: 'Bunga', photo: '/placeholder.svg', birthYear: '2023', role: 'child' },
    ],
  },
};

// Contoh data cucu yang sudah berkeluarga (bisa ditambah bebas)
export const allFamilies: Record<string, Family> = {
  ...childFamilies,
  // Contoh: Rizki (cucu dari Ahmad) sudah berkeluarga
  'anak-sentok-1': {
    id: 'anak-sentok-1',
    father: { id: 'anak-sentok-1', name: 'Suliarno', photo: '/placeholder.svg', birthYear: '2000', role: 'parent' },
    mother: { id: 'spouse-gc-1-1', name: 'Inak Popi', photo: '/placeholder.svg', birthYear: '2002', role: 'parent' },
    children: [
      { id: 'anak-suliarno-1', name: 'Popi Rahayu', photo: '/placeholder.svg', birthYear: '2022', role: 'child' },
      { id: 'anak-suliarno-2', name: 'Adi Wijaya', photo: '/placeholder.svg', birthYear: '2024', role: 'child' },
    ],
  },
  'anak-sentok-2': {
    id: 'anak-sentok-2',
    father: { id: 'suami-suwartini', name: 'Rusti', photo: '/placeholder.svg', birthYear: '2000', role: 'parent' },
    mother: { id: 'anak-sentok-2', name: 'Suwartini', photo: '/placeholder.svg', birthYear: '2002', role: 'parent' },
    children: [
      { id: 'anak-suwar-1', name: 'Hendri', photo: '/placeholder.svg', birthYear: '1992', role: 'child' },
      { id: 'anak-suwar-2', name: 'Lady Diana', photo: '/placeholder.svg', birthYear: '1996', role: 'child' },
      { id: 'anak-suwar-3', name: 'Maya Trisandi', photo: '/placeholder.svg', birthYear: '1999', role: 'child' },
    ],
  },
  // Contoh: Aditya (cucu dari Siti) sudah berkeluarga
  'anak-rasilah-1': {
    id: 'anak-rasilah-1',
    father: { id: 'anak-rasilah-1', name: 'Satriadi Gotama', photo: '/placeholder.svg', birthYear: '2001', role: 'parent' },
    mother: { id: 'istri-satriadi', name: 'Sahni', photo: '/placeholder.svg', birthYear: '2003', role: 'parent' },
    children: [
      { id: 'anak-satriadi-1', name: 'Ogi Darma Tena', photo: 'https://avatars.githubusercontent.com/u/64591304?v=4', birthYear: '2001', role: 'child' },
      { id: 'anak-satriadi-2', name: 'Icha Ulan Dari', photo: '/placeholder.svg', birthYear: '2007', role: 'child' },
    ],
  },
  'anak-rasilah-2': {
    id: 'anak-rasilah-2',
    father: { id: 'anak-rasilah-2', name: 'Roy', photo: '/placeholder.svg', birthYear: '2001', role: 'parent' },
    mother: { id: 'istri-roy', name: 'Astina Putri', photo: '/placeholder.svg', birthYear: '2003', role: 'parent' },
    children: [
      { id: 'anak-astina-1', name: 'Rahula Sipanca', photo: '/placeholder.svg', birthYear: '2023', role: 'child' },
      { id: 'anak-astina-2', name: 'Wijana Wicara', photo: '/placeholder.svg', birthYear: '2023', role: 'child' },
    ],
  },
  'anak-suwar-1': {
    id: 'anak-suwar-1',
    father: { id: 'anak-pakwayan', name: 'Wayan Artana', photo: '/placeholder.svg', birthYear: '2001', role: 'parent' },
    mother: { id: 'anak-suwar-1', name: 'Hendri', photo: '/placeholder.svg', birthYear: '1999', role: 'parent' },
    children: [
      { id: 'wayan-1', name: 'Olivia', photo: '/placeholder.svg', birthYear: '2023', role: 'child' },
      { id: 'wayan-2', name: 'Divia', photo: '/placeholder.svg', birthYear: '2023', role: 'child' },
      { id: 'wayan-3', name: 'Dante', photo: '/placeholder.svg', birthYear: '2023', role: 'child' },
    ],
  },
  'anak-suwar-3': {
    id: 'anak-suwar-3',
    father: { id: 'anak-satriadi-1', name: 'Ogi Darma Tena', photo: '/placeholder.svg', birthYear: '2001', role: 'parent' },
    mother: { id: 'anak-suwar-3', name: 'Maya Trisandi', photo: '/placeholder.svg', birthYear: '1999', role: 'parent' },
    children: [{ id: 'ogi-1', name: 'Junior', photo: '/placeholder.svg', birthYear: '2023', role: 'child' }],
  },
  'anak-satriadi-1': {
    id: 'anak-satriadi-1',
    father: { id: 'anak-satriadi-1', name: 'Ogi Darma Tena', photo: 'https://avatars.githubusercontent.com/u/64591304?v=4', birthYear: '2001', role: 'parent' },
    mother: { id: 'anak-suwar-3', name: 'Maya Trisandi', photo: '/placeholder.svg', birthYear: '1999', role: 'parent' },
    children: [{ id: 'ogi-1', name: 'Junior', photo: '/placeholder.svg', birthYear: '2023', role: 'child' }],
  },
};

export const getFamily = (memberId: string): Family | null => {
  return allFamilies[memberId] || null;
};

export const hasFamily = (memberId: string): boolean => {
  return memberId in allFamilies;
};

export const getMemberName = (memberId: string): string => {
  // Cari di semua keluarga
  for (const family of Object.values(allFamilies)) {
    if (family.father.id === memberId) return family.father.name;
    if (family.mother.id === memberId) return family.mother.name;
    const child = family.children.find((c) => c.id === memberId);
    if (child) return child.name;
  }
  // Cari di keluarga utama
  if (mainFamily.father.id === memberId) return mainFamily.father.name;
  if (mainFamily.mother.id === memberId) return mainFamily.mother.name;
  const mainChild = mainFamily.children.find((c) => c.id === memberId);
  return mainChild?.name || '';
};

// Legacy functions for backward compatibility
export const getChildFamily = getFamily;
export const getChildName = getMemberName;
