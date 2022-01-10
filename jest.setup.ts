import '@testing-library/jest-dom';

jest.mock('next/config', () => () => ({
    serverRuntimeConfig: {
        image_key: "https://somestorage.com/my-bucket/"
    },
    publicRuntimeConfig: { 
        image_key: "https://somestorage.com/my-bucket/"
     },
  }));










