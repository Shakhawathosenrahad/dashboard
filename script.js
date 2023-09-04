// chart
const options = {
    series: [{
    data: [120, 90, 88, 81, 95, 89, 60]
  }],
    chart: {
    height: 350,
    type: 'area',
        toolbar: {
          show: false
        }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  grid: {
    show: false
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  }
};

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


// side NavBar logo btn clicked

const form_switch = document.querySelector(".form-switch > .form-check-input");

form_switch.addEventListener("click", () => {
  form_switch.checked ? form_switch.setAttribute("checked", true) : form_switch.removeAttribute("checked", false);

  if(form_switch.checked) {
    form_switch.parentElement.parentElement.classList.add("width");
  }
  else {
    form_switch.parentElement.parentElement.classList.remove("width");
  }
})


//   menu button

const menu = document.querySelector("nav .fa-bars");
const side_nav = document.querySelector(".side_nav");
const close = document.body.querySelector(".outside");

menu.addEventListener("click", () => {
    side_nav.style.left = 0;
    document.querySelector("body").classList.add("stopscroll");
    
    close.addEventListener("click", () => {
        side_nav.style.left = "-320px";
        document.body.classList.remove("stopscroll");
    })
})

// language, notification and profile

const btns = document.querySelectorAll(".profile div");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.classList.value;

      if(!document.getElementById(`${id}`).classList.contains("clicked")) {
        let absolute_elements = document.querySelectorAll(".absolute_elements");

        absolute_elements.forEach(element => {
          element.classList.remove("clicked");
        })
      }
      document.getElementById(`${id}`).classList.toggle("clicked");
  })
})

// dark mode

const root = document.querySelector(":root");
let style = getComputedStyle(root);
let time = new Date().getHours();


if(time >= 3 && time <= 15) {
  root.style.setProperty('--card-color-dark', "#fff");
  root.style.setProperty('--background-dark', "#fff");
  root.style.setProperty('--color-while', "#000");
  root.style.setProperty("--absolute-shadow", "0 0px 80px rgba(0, 0, 0, 0.2)")
}
else {
  root.style.setProperty('--card-color-dark', "#212b36");
  root.style.setProperty('--background-dark', "#000");
  root.style.setProperty('--color-while', "#fff");
  root.style.setProperty("--absolute-shadow", "0 0px 80px rgba(255, 255, 255, 0.2)")
}