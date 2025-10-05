const nMenu = document.getElementById("n-menu");
const nTog = document.getElementById("n-tog");

nTog.addEventListener("click", () => {
  nMenu.classList.toggle("open");
  nTog.classList.toggle("animate");
});

const nLink = document.querySelectorAll(".n-link");
const actLink = () => {
  const nMenu = document.getElementById("n-menu");

  nTog.classList.remove("animate");
  nMenu.classList.remove("open");
};

nLink.forEach((n) => n.addEventListener('click', actLink));



const sections = document.querySelectorAll('section[id]');

const scrActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectHeight = current.offsetHeight,
      sectTop = current.offsetTop - 58,
      sectId = current.getAttribute('id'),
      sectClass = document.querySelector('.n-menu a[href*=' + sectId + ']');

    if (scrollY > sectTop && scrollY <= sectTop + sectHeight) {
      sectClass.classList.add('active-link');
    } else {
      sectClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrActive)



var serveSwiper = new Swiper(".serve-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

var mixer = mixitup(".w-box", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 700,
  },
});

const lWork = document.querySelectorAll(".w-item");

function actWork() {
  lWork.forEach((a) => {
    a.classList.remove("active-wrk");
  });

  this.classList.add("active-wrk");
}

lWork.forEach((a) => a.addEventListener("click", actWork));

const sSwitch = document.getElementById("s-switch");
const sToggle = document.getElementById("ss-tog");
const sClose = document.getElementById("ss-close");


sToggle.addEventListener("click", () => {
  sSwitch.classList.add("switch");
  nMenu.classList.remove('open');
  nTog.classList.remove('animate');
});

sClose.addEventListener("click", () => {
  sSwitch.classList.remove("switch");
});

const cols = document.querySelectorAll(".ss-col");

cols.forEach((col) => {
  col.onclick = () => {
    const aCol = col.style.getPropertyValue("--hue");

    cols.forEach((col) => col.classList.remove("active"));
    col.classList.add("active");
    sSwitch.classList.remove("switch");

    document.documentElement.style.setProperty("--hue", aCol);
  };
});

let curTheme = "Light";
document.body.className = curTheme;

document.querySelectorAll('input[name="b-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    curTheme = input.value;
    document.body.className = curTheme;
    sSwitch.classList.remove("switch");
  });
});

const accItems = document.querySelectorAll(".res-item");

accItems.forEach((item) => {
  const head = item.querySelector(".res-head"),
    content = item.querySelector(".res-tent"),
    icon = item.querySelector(".res-icon i");

  head.addEventListener("click", () => {
    const isOpen = item.classList.toggle("acc-open");

    content.style.height = isOpen ? content.scrollHeight + "px" : "0";
    icon.className = isOpen ? "ri-add-line" : "ri-time-line";

    accItems.forEach((othItem) => {
      if (othItem !== item && othItem.classList.contains("acc-open")) {
        othItem.querySelector(".res-tent").style.height = "0";
        othItem.querySelector(".res-icon i").classList = "ri-time-line";
        othItem.classList.remove("acc-open");
      }
    });
  });
});

var serveSwiper = new Swiper(".testim-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

const contForm = document.getElementById("cont-form"),
  contName = document.getElementById("cont-name"),
  contEmail = document.getElementById("cont-email"),
  contSubj = document.getElementById("cont-sub"),
  contMess = document.getElementById("cont-message"),
  message = document.getElementById("message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contName.value === "" ||
    contEmail.value === "" ||
    contSubj.value === "" ||
    contMess.value === ""
  ) {
    message.classList.remove("first-col");
    message.classList.add("offpoint");
    message.textContent = "Please input all the fields";

    setTimeout(() => {
      message.textContent = "";
    }, 3500);
  } else {
    emailjs
      .sendForm(
        "service_hh6zrsd",
        "template_li8hrsb",
        "#cont-form",
        "HYMpduI3vPQzOcHcY"
      )
      .then(
        () => {
          message.classList.add("first-col");
          message.textContent = "Message has been delivered ✅";

          setTimeout(() => {
            message.textContent = "";
          }, 5100);
        },
        (error) => {
          alert(
            "Please check your connection, Sorry! Something went wrong..❌",
            error
          );
        }
      );
    contName.value = "";
    contEmail.value = "";
    contSubj.value = "";
    contMess.value = "";
  }
};

contForm.addEventListener("submit", sendEmail);

const sHeader = () => {
  const shead = document.getElementById("header");

  this.scrollY >= 20
    ? shead.classList.add("bgbg")
    : shead.classList.remove("bgbg");
};

window.addEventListener("scroll", sHeader);
