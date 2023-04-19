import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    img: "https://images.uzum.uz/cgjbepvg49devoac8bb0/t_product_540_high.jpg#1681574198058",
    price: "22 000 сум",
    desc: "Финики Date Bam, 650г газированный напиток Pepsi, 260 мл",
    isLiked: false
  },
  {
    id: 2,
    img: "https://images.uzum.uz/cgs139j57mg9720esj6g/t_product_540_high.jpg#1681574198053",
    price: "5000 сум",
    desc: "Мука пшеничная Melek первый сорт, 1 кг",
  },
  {
    id: 3,
    img: "https://images.uzum.uz/cf9r2b0l08k0o9qiiid0/t_product_540_high.jpg#1681574198103",
    price: "1 762 000 сум",
    desc: "Пылесос Bosch BGC21X300",
  },
  {
    id: 4,
    img: "https://images.uzum.uz/cf1u4tol08k0o9qhq5n0/t_product_540_high.jpg#1681574198156",
    price: "55 000 сум",
    desc: "Беспроводные наушники TWS i11 Bluetooth 5.0",
  },
  {
    id: 5,
    img: "https://images.uzum.uz/cf3a5cgl08k0o9qhugr0/t_product_540_high.jpg#1681574198150",
    price: "56 000 сум",
    desc: "Кухонные электронные весы, до 10 кг",
  },
  {
    id: 6,
    img: "https://images.uzum.uz/cgnq1eng49devoacuku0/t_product_540_high.jpg#1681574198503",
    price: "3 348 000 сум",
    desc: "Телевизор TCL 43 4K HDR 10+ SMART P635 ",
  },
  {
    id: 7,
    img: "https://images.uzum.uz/cgqfkvnhj8j9g69cpip0/t_product_540_high.jpg#1681574201835",
    price: "55 000 сум",
    desc: "Бумага листовая для офисной техники Sylvamo Svetocopy",
  },
  {
    id: 8,
    img: "https://images.uzum.uz/ceo0n5ov1htd23ak63ng/t_product_540_high.jpg#1681574201869",
    price: "25 000 сум",
    desc: "Зубные щетки бамбуковые, в наборе, 4 шт",
  },
  {
    id: 9,
    img: "https://images.uzum.uz/cg021n7g49devoa9h2b0/t_product_540_high.jpg#1681574201874",
    price: "174 000 сум",
    desc: "Набор для уборки Vileda Super Mocio Completo 1+1",
  },
  {
    id: 10,
    img: "https://images.uzum.uz/cg63ql7hgiov1qie60sg/t_product_540_high.jpg#1681574920688",
    price: "12 000 сум",
    desc: "Сахар Chempion, 900 гр",
  },
  {
    id: 11,
    img: "https://images.uzum.uz/cg7bmq7g49devoaaest0/t_product_540_high.jpg#1681574920726",
    price: "169 000 сум",
    desc: "Беспроводные наушники bluetooth Premium Pods 3 c микрофоном",
  },
  {
    id: 12,
    img: "https://images.uzum.uz/cg5jc7vg49devoaa81ug/t_product_540_high.jpg#1681574920737",
    price: "202 000 сум",
    desc: "Игровая приставка Ретро Denty из 90-х 8 bit, 620 игр",
  },
  {
    id: 13,
    img: "https://images.uzum.uz/cfmcu6fhgiopn8lcdgu0/t_product_540_high.jpg#1681574920814",
    price: "77 000 сум",
    desc: "Освежитель воздуха для автомобиля",
  },
  {
    id: 14,
    img: "https://images.uzum.uz/cgibmqr57mg9720d45og/t_product_540_high.jpg#1681574920860",
    price: "279 000 сум",
    desc: "Умные смарт-часы/Smart Watch Hi Ulta Max, 49 mm",
  },
  {
    id: 15,
    img: "https://images.uzum.uz/cf3c52ol08k0o9qhuuf0/t_product_540_high.jpg#1681575468765",
    price: "26 000 сум",
    desc: "Проводные наушники с разъемом 3.5 для любых...",
  },
  {
    id: 16,
    img: "https://images.uzum.uz/ceshl60l08k0o9qhc5hg/t_product_540_high.jpg#1681575547767",
    price: "30 000 сум",
    desc: "Чистящий спрей для экранов и стекла",
  },
  {
    id: 17,
    img: "https://images.uzum.uz/cg45h4vhgiov1qidu2i0/t_product_540_high.jpg#1681575547856",
    price: "147 000 сум",
    desc: "Сетчатые мокасины для мужчин",
  },
  {
    id: 18,
    img: "https://images.uzum.uz/cfh3l3l40v9uauhi4fu0/t_product_540_high.jpg#1681575547884",
    price: "539 000 сум",
    desc: "Увлажнитель воздуха Deerma Xiaomi",
  },
  {
    id: 19,
    img: "https://images.uzum.uz/cgintofg49devoac5dgg/t_product_540_high.jpg#1681575547895",
    price: "129 000 сум",
    desc: "Классическая мужская рубашка Slim fit",
  },
  {
    id: 20,
    img: "https://images.uzum.uz/ccs23en0tgqvlm57n310/t_product_540_high.jpg#1681575547915",
    price: "84 000 сум",
    desc: "Турбо лейка массажная для душа",
  },
];

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;