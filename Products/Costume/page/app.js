let productsListArray = [
  {
    name: "Trang phục thợ săn ma",
    id: 1,
    image:
      "../../Costume/img/1.webp",
    outOfStock: false,
    user: null,
    rank: "../../Ranking img/4.png",
    price: "500k/bộ"

  },
  {

    name: "Trang phục leatherface",
    image:
    "../../Costume/img/3.jpg",
    price: "450k/bộ",
    id: 2,
    user: {
      nick: "Trường",
    },
    rank: "../../Ranking img/r.png",
    outOfStock: true,
  },

  {
    name: "Trang phục jason",
    id: 4,
    image:
    "../../Costume/img/4.jpg",
    outOfStock: false,
    user: null,
    rank: "../../Ranking img/3.png",
    price: "350k/bộ"

  },
  {
    name: "Kit tự làm trang phục",
    id: 5,
    image:
    "../../Costume/img/6.jpg",
    outOfStock: false,
    user: null,
    rank: "../../Ranking img/4.png",
    price: "200k/bộ"

  },
  {
    name: "Trang phục ghostface",
    id: 3,
    image:
    "../../Costume/img/2.jpg",
    outOfStock: false,
    user: null,
    rank: "../../Ranking img/5.png",
    price: "300k/bộ"

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