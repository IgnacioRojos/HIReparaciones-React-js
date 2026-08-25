// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Polyfill: el jsdom que trae react-scripts 5 no expone TextEncoder/TextDecoder,
// pero react-router-dom v7 los necesita al importarse. Sin esto, cualquier test
// que use react-router-dom falla con "TextEncoder is not defined".
import { TextEncoder, TextDecoder } from 'util';
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
