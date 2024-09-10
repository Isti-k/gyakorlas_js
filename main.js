import { kutyaLISTA } from "./adatok.js"
import Kartyak from "./view/Kartyak.js"
 
const taroloElem=$(".tartalom")
 
new Kartyak(kutyaLISTA, taroloElem)