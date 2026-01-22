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
    role: 'parent'
  },
  mother: {
    id: 'mother-main',
    name: 'Ibu Fatimah',
    photo: '/placeholder.svg',
    birthYear: '1955',
    role: 'parent'
  },
  children: [
    { id: 'child-1', name: 'Ahmad', photo: '/placeholder.svg', birthYear: '1975', role: 'child' },
    { id: 'child-2', name: 'Siti', photo: '/placeholder.svg', birthYear: '1977', role: 'child' },
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
  ]
};

// Data keluarga dari masing-masing anak
export const childFamilies: Record<string, Family> = {
  'child-1': {
    id: 'child-1',
    father: { id: 'child-1', name: 'Ahmad', photo: '/placeholder.svg', birthYear: '1975', role: 'parent' },
    mother: { id: 'spouse-1', name: 'Dewi', photo: '/placeholder.svg', birthYear: '1978', role: 'parent' },
    children: [
      { id: 'grandchild-1-1', name: 'Rizki', photo: '/placeholder.svg', birthYear: '2000', role: 'child' },
      { id: 'grandchild-1-2', name: 'Putri', photo: '/placeholder.svg', birthYear: '2003', role: 'child' },
      { id: 'grandchild-1-3', name: 'Fajar', photo: '/placeholder.svg', birthYear: '2006', role: 'child' },
    ]
  },
  'child-2': {
    id: 'child-2',
    father: { id: 'spouse-2', name: 'Budi', photo: '/placeholder.svg', birthYear: '1975', role: 'parent' },
    mother: { id: 'child-2', name: 'Siti', photo: '/placeholder.svg', birthYear: '1977', role: 'parent' },
    children: [
      { id: 'grandchild-2-1', name: 'Aditya', photo: '/placeholder.svg', birthYear: '2001', role: 'child' },
      { id: 'grandchild-2-2', name: 'Bella', photo: '/placeholder.svg', birthYear: '2004', role: 'child' },
    ]
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
    ]
  },
  'child-4': {
    id: 'child-4',
    father: { id: 'spouse-4', name: 'Hendra', photo: '/placeholder.svg', birthYear: '1979', role: 'parent' },
    mother: { id: 'child-4', name: 'Aisyah', photo: '/placeholder.svg', birthYear: '1981', role: 'parent' },
    children: [
      { id: 'grandchild-4-1', name: 'Gilang', photo: '/placeholder.svg', birthYear: '2006', role: 'child' },
    ]
  },
  'child-5': {
    id: 'child-5',
    father: { id: 'child-5', name: 'Yusuf', photo: '/placeholder.svg', birthYear: '1983', role: 'parent' },
    mother: { id: 'spouse-5', name: 'Indah', photo: '/placeholder.svg', birthYear: '1986', role: 'parent' },
    children: [
      { id: 'grandchild-5-1', name: 'Hafiz', photo: '/placeholder.svg', birthYear: '2008', role: 'child' },
      { id: 'grandchild-5-2', name: 'Jasmine', photo: '/placeholder.svg', birthYear: '2011', role: 'child' },
    ]
  },
  'child-6': {
    id: 'child-6',
    father: { id: 'spouse-6', name: 'Kevin', photo: '/placeholder.svg', birthYear: '1983', role: 'parent' },
    mother: { id: 'child-6', name: 'Khadijah', photo: '/placeholder.svg', birthYear: '1985', role: 'parent' },
    children: [
      { id: 'grandchild-6-1', name: 'Luthfi', photo: '/placeholder.svg', birthYear: '2010', role: 'child' },
      { id: 'grandchild-6-2', name: 'Maya', photo: '/placeholder.svg', birthYear: '2013', role: 'child' },
      { id: 'grandchild-6-3', name: 'Nadia', photo: '/placeholder.svg', birthYear: '2016', role: 'child' },
    ]
  },
  'child-7': {
    id: 'child-7',
    father: { id: 'child-7', name: 'Ibrahim', photo: '/placeholder.svg', birthYear: '1987', role: 'parent' },
    mother: { id: 'spouse-7', name: 'Olivia', photo: '/placeholder.svg', birthYear: '1990', role: 'parent' },
    children: [
      { id: 'grandchild-7-1', name: 'Pasha', photo: '/placeholder.svg', birthYear: '2012', role: 'child' },
      { id: 'grandchild-7-2', name: 'Qori', photo: '/placeholder.svg', birthYear: '2015', role: 'child' },
    ]
  },
  'child-8': {
    id: 'child-8',
    father: { id: 'spouse-8', name: 'Rudi', photo: '/placeholder.svg', birthYear: '1987', role: 'parent' },
    mother: { id: 'child-8', name: 'Maryam', photo: '/placeholder.svg', birthYear: '1989', role: 'parent' },
    children: [
      { id: 'grandchild-8-1', name: 'Salsa', photo: '/placeholder.svg', birthYear: '2014', role: 'child' },
    ]
  },
  'child-9': {
    id: 'child-9',
    father: { id: 'child-9', name: 'Umar', photo: '/placeholder.svg', birthYear: '1991', role: 'parent' },
    mother: { id: 'spouse-9', name: 'Tia', photo: '/placeholder.svg', birthYear: '1994', role: 'parent' },
    children: [
      { id: 'grandchild-9-1', name: 'Udin', photo: '/placeholder.svg', birthYear: '2016', role: 'child' },
      { id: 'grandchild-9-2', name: 'Vina', photo: '/placeholder.svg', birthYear: '2019', role: 'child' },
    ]
  },
  'child-10': {
    id: 'child-10',
    father: { id: 'spouse-10', name: 'Wahyu', photo: '/placeholder.svg', birthYear: '1991', role: 'parent' },
    mother: { id: 'child-10', name: 'Zainab', photo: '/placeholder.svg', birthYear: '1993', role: 'parent' },
    children: [
      { id: 'grandchild-10-1', name: 'Xena', photo: '/placeholder.svg', birthYear: '2018', role: 'child' },
    ]
  },
  'child-11': {
    id: 'child-11',
    father: { id: 'child-11', name: 'Ali', photo: '/placeholder.svg', birthYear: '1995', role: 'parent' },
    mother: { id: 'spouse-11', name: 'Yanti', photo: '/placeholder.svg', birthYear: '1998', role: 'parent' },
    children: [
      { id: 'grandchild-11-1', name: 'Zahra', photo: '/placeholder.svg', birthYear: '2020', role: 'child' },
    ]
  },
  'child-12': {
    id: 'child-12',
    father: { id: 'spouse-12', name: 'Arman', photo: '/placeholder.svg', birthYear: '1995', role: 'parent' },
    mother: { id: 'child-12', name: 'Halimah', photo: '/placeholder.svg', birthYear: '1997', role: 'parent' },
    children: [
      { id: 'grandchild-12-1', name: 'Alif', photo: '/placeholder.svg', birthYear: '2021', role: 'child' },
      { id: 'grandchild-12-2', name: 'Bunga', photo: '/placeholder.svg', birthYear: '2023', role: 'child' },
    ]
  },
};

export const getChildFamily = (childId: string): Family | null => {
  return childFamilies[childId] || null;
};

export const getChildName = (childId: string): string => {
  const child = mainFamily.children.find(c => c.id === childId);
  return child?.name || '';
};
