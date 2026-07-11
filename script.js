function rest(...arr){
    console.log(arr);
}
const a = [9,9,9];
rest(2,3,4,4,5, ...a);

console.log('Hello!');
let count = 0;
const button = document.getElementById("number");
const counter = document.getElementById("counter");

button.addEventListener("click", function(){
  count++;
  counter.textContent = count;
});

const password = document.getElementById("password")
const toggle = document.getElementById("toggle");

toggle.addEventListener('click',() => {
  if(password.type === 'password'){
    password.type = "text";
    toggle.textContent ="Hide";
  }else{
    password.type = 'password';
    toggle.textContent = "Show";
  }
});

const prev = document.getElementById("prev");
const next = document.getElementById("next"); 

const images = [
  "https://picsum.photos/id/1015/400/250",
  "https://picsum.photos/id/1016/400/250",
  "https://picsum.photos/id/1018/400/250",
  "https://picsum.photos/id/1020/400/250"
];

let currentIndex = 0;

slider.src = images[currentIndex];

next.addEventListener('click', () => {
  currentIndex++;
  if(currentIndex >= images.length) currentIndex = 0;
  slider.src = images[currentIndex];
})
prev.addEventListener('click', () => {
  currentIndex--;
  if(currentIndex < 0) currentIndex = images.length-1;
  slider.src = images[currentIndex];
})

const theme = document.getElementById("themeToggle");

theme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    theme.textContent = "Light";
  }else{
    theme.textContent = "Dark";
  }
});

