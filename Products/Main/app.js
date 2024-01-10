let productsListArray = [
  {
    name: "Kẹo ngô",
    id: 1,
    image:
      "../Candy/img/1.jpg",
    outOfStock: false,
    user: null,
    rank: "../Ranking img/5.png",
    price: "50k/1kg"

  },
  {

    name: "Trang trí mô hình vải hình ma",
    image:
      "../Ghost/img/3.webp",
    price: " 30k/cái",
    id: 9,
    user: null,
    rank: "../Ranking img/4.png",
    outOfStock: false,
  },


  {

    name: "Kẹo tinh thể",
    image:
      "../Candy/img/3.jpg",
    price: "20k/cái ",
    id: 3,
    user: null,
    rank: "../Ranking img/4.png",
    outOfStock: false,
  },

  {

    name: "Kẹo lollipop",
    image:
      "../Candy/img/4.webp",
    price: "15k/cái ",
    id: 4,
    user: null,
    rank: "../Ranking img/5.png",
    outOfStock: false,
  },
  {

    name: "Kẹo hình mắt",
    image:
      "../Candy/img/5.jpg",
    price: "10k/cái",
    id: 5,
    user: {
      nick: "Huy",
    },
    rank: "../Ranking img/r.png",
    outOfStock: true,
  },

  {

    name: "Thập cẩm",
    image:
      "../Candy/img/6.jpg",
    price: " 100k/kg ",
    id: 6,
    user: null,
    rank: "../Ranking img/5.png",
    outOfStock: false,
  },
  {

    name: "Trang trí bìa giấy hình ma",
    image:
      "../Ghost/img/1.webp",
    price: " 10k/cái",
    id: 7,
    user: null,
    rank: "../Ranking img/3.png",
    outOfStock: false,
  },
  {

    name: "Trang trí mô hình nhựa hình ma",
    image:
      "../Ghost/img/2.jpg",
    price: " 50k/cái",
    id: 8,
    user: null,
    rank: "../Ranking img/5.png",
    outOfStock: false,
  },
  {

    name: "Trang trí mô hình vải hình ma dạ quang",
    image:
      "../Ghost/img/4.jpg",
    price: " 50k/cái",
    id: 10,
    user: null,
    rank: "../Ranking img/5.png",
    outOfStock: false,
  },
  {

    name: "Trang phục thợ săn ma",
    image:
      "../Costume/img/1.webp",
    price: " 1.000k/bộ",
    id: 11,
    user: null,
    rank: "../Ranking img/5.png",
    outOfStock: false,
  },
  {
    name: "Kẹo sâu",
    id: 2,
    image:
      "../Candy/img/2.webp",
    outOfStock: true,
    user: {
      nick: "Trung",
    },
    rank: "../Ranking img/r.png",
    price: "60k/kg",
  },
  
];


const renderSeats = (productsListArray) => {
  const seatList = document.querySelector(".seat-list");
  productsListArray.forEach(product => {
    const seatContainer = document.createElement("div");
    seatContainer.classList.add("seat-container");
    seatContainer.setAttribute("onclick", `bookSeat(${product.id})`);
    seatContainer.innerHTML +=
      `
      <div class="product-item">
            <div class="minicol1">
              <img
                  src="${product.image}"
                  alt=""
               />
            </div>
            <div class="minicol2">
            <br>
              <h3>${product.name}</h3>
              <p>${product.price}</p>
              <div class="call-to-action">
              <p>Giao hàng trong 24 giờ</p>
              </div>
              <br><br><br><br>
              <img
              src="${product.rank}"
              alt=""
              />

              </div>
          </div>
      `






    if (product.outOfStock) {
      seatContainer.classList.add("booked");
    }
    seatList.appendChild(seatContainer);
  });
}

renderSeats(productsListArray);

const modal = document.getElementById("myModal");


const span = document.getElementsByClassName("close")[0];


span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let nickVal = document.getElementById("nick");
let nameVal = document.getElementById("name");
const saveBtn = document.getElementById("save");

const seatContainer = document.querySelectorAll(".seat-container");
saveBtn.addEventListener('click', () => {
  const index = productsListArray.findIndex(x => x.id == seatID.value);
  if (index !== -1) {
    productsListArray[index] = {
      ...productsListArray[index],
      outOfStock: true,
      user: {
        nick: nickVal.value
      },
      name: nameVal.value,
    };
    seatContainer[index].classList.add("booked");
    nickVal.value = "";
    nameVal.value = seatObj.name;
    modal.style.display = "none";
  }
})

const title = document.getElementById("title");
const seatID = document.getElementById("seatID");
const bookSeat = (id) => {
  modal.style.display = "block";
  seatID.value = id;

  let seatObj = productsListArray.find(x => x.id == id);
  if (seatObj.outOfStock && seatObj.user != null) {
    title.innerText = "Sản phẩm này đã hết hàng";
    nickVal.value = seatObj.user.nick;
    nameVal.value = seatObj.name;
    saveBtn.setAttribute("disabled", "true");
  }
  else {
    title.innerText = "Đặt mua sản phẩm";
    nickVal.value = "";
    nameVal.value = seatObj.name;
    saveBtn.removeAttribute("disabled");
  }
}