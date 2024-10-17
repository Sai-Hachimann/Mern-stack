import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { GrUserAdmin } from 'react-icons/gr';

const links = [
  { text: 'add job', path: '.', icon: <FaWpforms /> }, //. is to direct to parent page
  { text: 'all job', path: 'all-jobs', icon: <MdQueryStats /> },
  { text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
  { text: 'profile', path: 'profile', icon: <ImProfile /> },
  { text: 'admin', path: 'admin', icon: <GrUserAdmin /> },
];

export default links;
