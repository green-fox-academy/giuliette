'use strict';
export { };

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

//helped: console.log(url.length);

let sliced = url.slice(0, 38) + "odds";
/* slice returns the SLICED part */
//half of the solution printed > console.log(sliced);

console.log( "https:" + sliced.slice(6, 42));

