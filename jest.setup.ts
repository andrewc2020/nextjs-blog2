import '@testing-library/jest-dom';

jest.mock('next/config', () => () => ({
    publicRuntimeConfig: { 
        image_key: "https://somestorage.com/my-bucket/"
     },
  }));










