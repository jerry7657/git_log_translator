const log = document.getElementById('git');
const trans = document.getElementById('trans');
// const result = document.getElementById('result');
const clean = document.getElementById('clean');
const date = document.getElementById('date');
const state = document.getElementById('state');

let data = [];
let dateValue = '';

const fetchText = () => {
  let text = log.value.split(/\n/);
  console.log(text);
  let result = '';
  let ifOnTime = [''];
  dateValue = date.value;

  for (let i = 0; i < text.length; i++) {
    const detail = text[i].split(' ').filter((item) => item);
    let time = 'time' + i;

    result += `<div>
        <p>題號 : ${detail[8]}</p>
         <p>上傳時間 : <input type="text" value=${
           detail[5]
         } id=${time}></input></p>
         <button id=${'copy' + i}>copy</button>
         <hr>
    </div>
     `;
  }
  console.log(result);
  document.getElementById('result').innerHTML = result;

  const detail0 = text[0]
    .split(' ')
    .filter((item) => item)
    .slice(3, 5)
    .join(' ');

  if (detail0 !== dateValue) {
    ifOnTime += '<p style="color:red;">遲交</p>';
  } else {
    ifOnTime += '<p style="color:green;">準時交</p>';
  }

  console.log('date', dateValue);
  state.innerHTML = ifOnTime;
  console.log(ifOnTime);
  data = text;

  console.log('detail0_date', detail0);

  for (let i = 0; i < data.length; i++) {
    const copyText = () => {
      let time = document.getElementById('time' + i);
      time.select();
      navigator.clipboard.writeText(time.value);
    };
    let copy = document.getElementById('copy' + i);
    copy.addEventListener('click', () => {
      copyText();
    });
  }
};

trans.addEventListener('click', () => {
  fetchText();
});

clean.addEventListener('click', () => {
  log.value = '';
});
