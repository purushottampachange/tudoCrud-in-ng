import { Imobile } from "../model/mobile";

 export const postArr = [
  { id: 1, title: "JavaScript Basics", body: "Learn variables, data types, and functions in JavaScript." },
  { id: 2, title: "Advanced JavaScript", body: "Understand closures, hoisting, and scope in depth." },
  { id: 3, title: "TypeScript Intro", body: "TypeScript adds static typing on top of JavaScript." },
  { id: 4, title: "Angular Components", body: "Components are the building blocks of Angular apps." },
  { id: 5, title: "Angular Directives", body: "Directives change the behavior or appearance of DOM elements." },
  { id: 6, title: "Angular Services", body: "Services help share logic and data across components." },
  { id: 7, title: "RxJS Basics", body: "RxJS is used to handle async data using observables." },
  { id: 8, title: "Observables", body: "Observables emit multiple values over time." },
  { id: 9, title: "Promises in JS", body: "Promises handle asynchronous operations." },
  { id: 10, title: "Async Await", body: "Async/await makes asynchronous code easier to read." },
  { id: 11, title: "REST API", body: "REST APIs use HTTP methods like GET and POST." },
  { id: 12, title: "HTTP Methods", body: "GET, POST, PUT, PATCH, and DELETE are common methods." },
  { id: 13, title: "Frontend Performance", body: "Optimizing assets improves website performance." },
  { id: 14, title: "Web Security", body: "Security helps protect applications from attacks." },
  { id: 15, title: "CSS Flexbox", body: "Flexbox helps align items in one-dimensional layouts." },
  { id: 16, title: "CSS Grid", body: "Grid is used for two-dimensional layouts." },
  { id: 17, title: "HTML5 Features", body: "HTML5 introduces semantic elements and APIs." },
  { id: 18, title: "Browser Storage", body: "LocalStorage and SessionStorage store data in browser." },
  { id: 19, title: "Authentication", body: "Authentication verifies the identity of users." },
  { id: 20, title: "Deployment", body: "Deployment makes your app live on a server." }
];


export let mobileProducts :Array<Imobile> = [
  {
    id: 1,
    name: 'iPhone 13',
    brand: 'Apple',
    price: 999,
    image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
    isAvailable: true,
    rating: 4.9,
    noOfItems: 50
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    brand: 'Samsung',
    price: 899,
    image: '',
    isAvailable: false,
    rating: 4.5,
    noOfItems: 20
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    brand: 'Google',
    price: 799,
    image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png',
    isAvailable: false,
    rating: 3.9,
    noOfItems: 10
  },
  {
    id: 4,
    name: 'OnePlus 9 Pro',
    brand: 'OnePlus',
    price: 899,
    image: '',
    isAvailable: true,
    rating: 2.9,
    noOfItems: 7
  },
  {
    id: 5,
    name: 'Xiaomi Mi 11',
    brand: 'Xiaomi',
    price: 699,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
    isAvailable: true,
    rating: 4.8,
    noOfItems: 5
  },
  {
    id: 6,
    name: 'Sony Xperia 1 III',
    brand: 'Sony',
    price: 1199,
    image: '',
    isAvailable: true,
    rating: 2.5,
    noOfItems: 100
  },
  {
    id: 7,
    name: 'LG Velvet',
    brand: 'LG',
    price: 599,
    image: '',
    isAvailable: false,
    rating: 1.5,
    noOfItems: 2
  },
  {
    id: 8,
    name: 'Huawei P40 Pro',
    brand: 'Huawei',
    price: 899,
    image: '',
    isAvailable: true,
    rating: 3.5,
    noOfItems: 45
  },
  {
    id: 9,
    name: 'Motorola Moto G Power',
    brand: 'Motorola',
    price: 249,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
    isAvailable: true,
    rating: 4.5,
    noOfItems: 500
  },
  {
    id: 10,
    name: 'Nokia 8.3',
    brand: 'Nokia',
    price: 499,
    image: '',
    isAvailable: true,
    rating: 4.5,
    noOfItems: 8
  }
];

