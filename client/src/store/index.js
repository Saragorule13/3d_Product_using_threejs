import {proxy} from 'valtio';

const state = proxy({
    intro: true, //are we currently on homepage
    color: '#EFBD48',
    isLogoTexture: true, //logo on shirt
    isFullTexture: false,
    logoDecal: './threejs.png', //default logo
    fullDecal: './threejs.png', //default full texture
});

export default state;