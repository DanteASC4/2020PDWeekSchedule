import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems)

  async function delNodes(nList){
    await nList.forEach(n => n.remove());
  }

  const day1Links = document.querySelectorAll('.day-1 > .card-action > a');
  const day2Links = document.querySelectorAll('.day-2 > .card-action > a');
  const day3Links = document.querySelectorAll('.day-3 > .card-action > a');
  const day4Links = document.querySelectorAll('.day-4 > .card-action > a');
  const day5Links = document.querySelectorAll('.day-5 > .card-action > a');
  let now = new Date();
  let today = now.getDate();
  let thisMonth = now.getMonth();
  // console.log(today, thisMonth);
  // console.log((today !== 16 && thisMonth !== 5));

  if(thisMonth === 5){
    if(today < 22){
      delNodes(day1Links);
      delNodes(day2Links);
      delNodes(day3Links);
      delNodes(day4Links);
      delNodes(day5Links);
    } else if(today < 23) {
      delNodes(day2Links);
      delNodes(day3Links);
      delNodes(day4Links);
      delNodes(day5Links);
    } else if(today < 24) {
      delNodes(day3Links);
      delNodes(day4Links);
      delNodes(day5Links);
    } else if(today < 25) {
      delNodes(day4Links);
      delNodes(day5Links);
    } else if(today < 26) {
      delNodes(day5Links);
    } else {
      // do nothing
    }
  }

  const activities = document.querySelectorAll('.sched-item > .card-content');
  for(let act of activities){
    let actSize = parseInt(act.querySelector('.hidden').innerText);
    let increase = 60*((actSize / 15)-1);
    act.style.height = `${120+increase}px`;
  }

});
