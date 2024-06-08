import { CountUp } from '../../node_modules/countup.js/dist/countUp.min.js';

window.addEventListener('load', () => {
  const option1 = {
    duration: 3,
    useGrouping: false,
    enableScrollSpy: true
  }

  let countup1 = new CountUp('countup1', 10, option1)
  let countup2 = new CountUp('countup2', 70, option1)
  let countup3 = new CountUp('countup3', 5, option1)
  countup1.start()
  countup2.start()
  countup3.start()
})
