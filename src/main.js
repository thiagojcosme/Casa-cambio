import { getImporteData } from './services/api';
import './style.css'

const inputMoeda = document.querySelector('#inputMoeda');
const buttonpesquis = document.querySelector('#buttonpesquise');
const createLi = document.querySelector('#criateli');


buttonpesquis.addEventListener('click', function () {
  let valor = inputMoeda.value;
  // getImporteData(valor);
  console.log(getImporteData(valor));
});

// const objetcData = () => {
//   const resultdata = getImporteData();

//     console.log(resultdata);
// }
  
//   // return


// objetcData()
// console.log(getImporteData('USD'))
