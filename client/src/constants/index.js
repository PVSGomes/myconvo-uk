import React from 'react';
import { IoTennisballOutline, IoPeopleOutline } from 'react-icons/io5';
import { BsSpeedometer2, BsCalendar4Event, BsCamera } from 'react-icons/bs';
import { FiLayers } from 'react-icons/fi';
import client1Image from '../assets/Images/sponsors/client-1.png';
import client2Image from '../assets/Images/sponsors/client-2.png';
import client3Image from '../assets/Images/sponsors/client-3.png';
import client4Image from '../assets/Images/sponsors/client-4.png';
import client5Image from '../assets/Images/sponsors/client-5.png';
import client6Image from '../assets/Images/sponsors/client-6.png';

export const PAGES = [
  { label: 'Home', path: '/home' },
  { label: 'Products', path: '/products' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
];

export const MENU_ITEMS = ['Dashboard', 'Logout'];

export const SPONSOR_IMAGES = [
  client1Image,
  client2Image,
  client3Image,
  client4Image,
  client5Image,
  client6Image,
];

export const SERVICES_LIST = [
  {
    title: 'Graduation Photography',
    description:
      'We provide professional photography services for your graduation ceremony. Our photographers are highly skilled and experienced in capturing the best moments of your graduation ceremony. We also provide a wide range of photography packages to suit your needs and budget.',
    icon: <IoTennisballOutline />,
    color: '#47aeff',
  },
  {
    title: 'Photography Services',
    description:
      'We offer professional photography services to capture the special moments of graduation day. Our team of experienced photographers will be on-site to take photos of graduates and their families, and we provide both digital and print copies of the photos.',
    icon: <BsCamera />,
    color: '#ffa76e',
  },
  {
    title: 'Email Notifications',
    description:
      'Our application automates the process of sending email notifications to all stakeholders involved in the graduation ceremony, including graduates, faculty, and guests. This saves universities and students time and hassle, allowing them to focus on enjoying the ceremony.',
    icon: <BsSpeedometer2 />,
    color: '#e80368',
  },
  {
    title: 'Customer Support',
    description:
      'Our team is dedicated to providing excellent customer support to ensure that universities and students have a seamless experience using our application. We are available to answer any questions or concerns and to help troubleshoot any issues that may arise.',
    icon: <FiLayers />,
    color: '#ffbb2c',
  },
  {
    title: 'Event Planning',
    description:
      'We can help plan and execute events of all sizes,Graduation and other special occasions in universities. Our team will work with you every step of the way to ensure that your event is a success.',
    icon: <BsCalendar4Event />,
    color: '#ff5828',
  },
  {
    title: 'Social Media Management',
    description:
      'In todays digital age, having a strong social media presence is essential for any business. We can help you manage your social media accounts, create content, and engage with your followers to build your brand and grow your online presence.',
    icon: <IoPeopleOutline />,
    color: '#11dbcf',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    title: 'Graduation 001',
    author: '@bkristastucchio',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Graduation 002',
    author: '@rollelflex_graphy726',
  },
  {
    id: 3,
    img: 'https://plus.unsplash.com/premium_photo-1679162280637-997008dcaf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Graduation 003',
    author: '@helloimnik',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1621376225372-c86f16f47a09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    title: 'Graduation 004',
    author: '@nolanissac',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1633061273472-7c62356c7329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=351&q=80',
    title: 'Graduation 005',
    author: '@hjrc33',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'Graduation 006',
    author: '@arwinneil',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1623461487986-9400110de28e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    title: 'Graduation 007',
    author: '@tjdragotta',
  },
];
