import './style.css';
import DomEvent from './modules/DomEvents';
import { refresh } from './modules/apiActions';

DomEvent(document,'DOMContentLoaded',()=>{
    refresh()
})

