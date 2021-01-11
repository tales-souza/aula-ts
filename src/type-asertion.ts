// type assertion
const body = document.querySelector('body') as HTMLBodyElement;
body.style.background = 'red';


const body2 = document.querySelector('body')!;
body2.style.background = 'red';
