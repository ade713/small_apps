import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = jsdom.defaultView;

global.document = doc;
global.window = win;

