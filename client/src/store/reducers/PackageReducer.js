import * as PackageTypes from '../types/PackageTypes';

const initialState = {
  packages: [
    {
      id: 1,
      title: 'Package - 011',
      description: 'Package - 01 (Without Frame)',
      price: '1500.00',
    },
    {
      id: 2,
      title: 'Package - 02',
      description: 'Package - 02 (Standard)',
      price: '1200.00',
    },
    {
      id: 3,
      title: 'Package - 03',
      description: 'Package - 03 (Premium)',
      price: '1800.00',
    },
    {
      id: 4,
      title: 'Package - 04',
      description: 'Package - 04 (Basic)',
      price: '800.00',
    },
    {
      id: 5,
      title: 'Package - 05',
      description: 'Package - 05 (Deluxe)',
      price: '2500.00',
    },
    {
      id: 6,
      title: 'Package - 06',
      description: 'Package - 06 (Exclusive)',
      price: '3500.00',
    },
    {
      id: 7,
      title: 'Package - 07',
      description: 'Package - 07 (Custom)',
      price: '2000.00',
    },
    {
      id: 8,
      title: 'Package - 08',
      description: 'Package - 08 (Premium Plus)',
      price: '2800.00',
    },
  ],
  packageTitle: '',
  packageDescription: '',
  packagePrice: '',
  packageImage: '',
  isPackageTitle: true,
  isPackageDescription: true,
  isPackagePrice: true,
  isPackageImage: true,

  events: [
    {
      name: 'SLITTE',
      description:
        'SLITTE is a national level IT competition organized by the Department of Information Technology of the University of Moratuwa.',
      duration: '2021-10-10',
      location: 'University of Moratuwa',
      date: '2021-10-10',
      time: '10.00 AM',
      status: 'Approved',
      image:
        'https://www.mrt.ac.lk/web/sites/default/files/inline-images/SLITTE%202021%20-%20Banner%20-%20Final%20%281%29.jpg',
    },
    {
      name: 'TechXpo',
      description:
        'TechXpo is an annual technology exhibition showcasing the latest innovations and advancements in various fields of technology.',
      duration: '2022-05-15',
      location: 'Convention Center',
      date: '2022-05-15',
      time: '9.00 AM',
      status: 'Reject',
      image: 'https://example.com/techxpo.jpg',
    },
    {
      name: 'HackathonX',
      description:
        'HackathonX is a 24-hour hackathon that brings together developers, designers, and entrepreneurs to create innovative solutions to real-world problems.',
      duration: '2022-08-20',
      location: 'Tech Hub',
      date: '2022-08-20',
      time: '12.00 PM',
      status: 'Pending',
      image: 'https://example.com/hackathonx.jpg',
    },
    {
      name: 'AI Summit',
      description:
        'AI Summit is a conference dedicated to artificial intelligence technologies, featuring renowned speakers and cutting-edge research presentations.',
      duration: '2022-11-05',
      location: 'Conference Center',
      date: '2022-11-05',
      time: '10.00 AM',
      status: 'Approved',
      image: 'https://example.com/aisummit.jpg',
    },
    {
      name: 'StartUp Expo',
      description:
        'StartUp Expo is a showcase event for startups to display their innovative products and services to potential investors and customers.',
      duration: '2023-02-15',
      location: 'Startup Hub',
      date: '2023-02-15',
      time: '11.00 AM',
      status: 'Approved',
      image: 'https://example.com/startupexpo.jpg',
    },
    {
      name: 'Tech Conference',
      description:
        'Tech Conference is a gathering of technology enthusiasts and professionals to discuss emerging trends and advancements in the tech industry.',
      duration: '2023-06-10',
      location: 'Conference Center',
      date: '2023-06-10',
      time: '9.00 AM',
      status: 'Pending',
      image: 'https://example.com/techconference.jpg',
    },
    // Add more dummy data entries here
    {
      name: 'CodeFest',
      description:
        'CodeFest is a coding competition where participants compete against each other to solve challenging programming problems.',
      duration: '2023-09-25',
      location: 'City Hall',
      date: '2023-09-25',
      time: '1.00 PM',
      status: 'Approved',
      image: 'https://example.com/codefest.jpg',
    },
    {
      name: 'Tech Summit',
      description:
        'Tech Summit is a technology-focused conference that brings together industry leaders and experts to share insights and knowledge.',
      duration: '2023-11-12',
      location: 'Convention Center',
      date: '2023-11-12',
      time: '10.00 AM',
      status: 'Pending',
      image: 'https://example.com/techsummit.jpg',
    },
    {
      name: 'Innovation Forum',
      description:
        'Innovation Forum is a platform for innovators and entrepreneurs to showcase their groundbreaking ideas and connect with potential partners.',
      duration: '2024-03-18',
      location: 'Innovation Center',
      date: '2024-03-18',
      time: '2.00 PM',
      status: 'Reject',
      image: 'https://example.com/innovationforum.jpg',
    },
    {
      name: 'Robotics Challenge',
      description:
        'Robotics Challenge is a competition where teams design and build autonomous robots to complete specified tasks and challenges.',
      duration: '2024-07-08',
      location: 'Robotics Arena',
      date: '2024-07-08',
      time: '9.00 AM',
      status: 'Pending',
      image: 'https://example.com/roboticschallenge.jpg',
    },
    {
      name: 'StartUp Weekend',
      description:
        'StartUp Weekend is a 54-hour event where aspiring entrepreneurs, developers, and designers come together to pitch ideas and build startup prototypes.',
      duration: '2024-02-25',
      location: 'Co-working Space',
      date: '2024-02-25',
      time: '6.00 PM',
      status: 'Approved',
      image: 'https://example.com/startupweekend.jpg',
    },
    {
      name: 'GameDev Conference',
      description:
        'The GameDev Conference is a gathering of game developers, designers, and enthusiasts to discuss the latest trends and techniques in game development.',
      duration: '2024-05-10',
      location: 'Gaming Center',
      date: '2024-05-10',
      time: '9.00 AM',
      status: 'Pending',
      image: 'https://example.com/gamedevconference.jpg',
    },
  ],
};

const PackageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PackageTypes.SET_PACKAGE:
      return {
        ...state,
        packages: action.payload,
      };
    case PackageTypes.SET_PACKAGE_TITLE:
      return {
        ...state,
        packageTitle: action.payload,
      };
    case PackageTypes.SET_PACKAGE_DESCRIPTION:
      return {
        ...state,
        packageDescription: action.payload,
      };
    case PackageTypes.SET_PACKAGE_PRICE:
      return {
        ...state,
        packagePrice: action.payload,
      };
    case PackageTypes.SET_PACKAGE_IMAGE:
      return {
        ...state,
        packageImage: action.payload,
      };
    case PackageTypes.SET_TITLE_VALIDATION:
      return {
        ...state,
        isPackageTitle: action.payload,
      };

    case PackageTypes.SET_DESCRIPTION_VALIDATION:
      return {
        ...state,
        isPackageDescription: action.payload,
      };
    case PackageTypes.SET_PRICE_VALIDATION:
      return {
        ...state,
        isPackagePrice: action.payload,
      };
    case PackageTypes.SET_IMAGE_VALIDATION:
      return {
        ...state,
        isPackageImage: action.payload,
      };
    case PackageTypes.CLEAR_PACKAGE_DETAILS:
      return {
        ...state,
        packageTitle: '',
        packageDescription: '',
        packagePrice: '',
        packageImage: '',
        isPackageTitle: true,
        isPackageDescription: true,
        isPackagePrice: true,
        isPackageImage: true,
      };
    case PackageTypes.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
};

export default PackageReducer;
