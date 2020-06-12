import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems, {accordian: true});
  let day1 = M.Collapsible.getInstance(elems[0]);

  // const day1Head = document.getElementById('day--header');
  // let dayState = day1Head.dataset.state;
  // const day1Cards = document.querySelectorAll('.day-');
  // day1Head.addEventListener('click', () => {
  //   if(dayState === 'closed'){
  //     anime({
  //       targets: day1Cards,
  //       rotateX: [0,360],
  //       delay: anime.stagger(150),
  //       duration: 500,
  //       easing: 'linear'
  //     });
  //     dayState = 'open';
  //   } else {
  //     dayState = 'closed';
  //   }
  // });

  let all5Days = document.getElementsByTagName('li');


  async function delNodes(nList){
    await nList.forEach(n => n.remove());
  }
  const day1Links = document.querySelectorAll('.day- > .card-action > a');
  let today = new Date();

  if(!(today.getDate() !== 12 && today.getMonth() !== 5)){
    delNodes(day1Links);
  }

  const activities = document.querySelectorAll('.sched-item > .card-content');
  for(let act of activities){
    let actSize = parseInt(act.querySelector('.hidden').innerText);
    let increase = 60*((actSize / 15)-1);
    act.style.height = `${120+increase}px`;
  }
  // console.log(activities);

});
