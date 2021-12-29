// Import stylesheets
import './style.css';
import { BallBase } from './ball-base.model';
import { HandBall } from './ball-base.model';
import { FootBall } from './ball-base.model';
import { PlayGroundBase } from './play-ground-base.model';
import { Players } from './players.model';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// let obj = new BallBase();
// obj.ball();

// let obj1 = new PlayGroundBase();
// obj1.ground();

// let obj2 = new Players();

//create an object 

let handBallObj = new HandBall(5674, 598, 'handBall');
handBallObj.ballInfo();
handBallObj.hballMaterial();

let footBallObj = new FootBall(54, 98, 'footBall');
footBallObj.ballInfo();
footBallObj.ballMaterial();
