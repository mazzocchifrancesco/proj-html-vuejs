import { createApp } from 'vue'
import App from './App.vue'

// importo bootstrap (js)
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAngleLeft, faAngleRight, faHouse, faUser, faBriefcase, faBookOpenReader, faBook, faEnvelope, faBars, faMagnifyingGlass, faAngleDown, faAngleUp, faCaretDown, faCalendarDays, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faAngleLeft, faAngleRight, faTwitter, faFacebookF, faInstagram, faYoutube, faHouse, faUser, faBriefcase, faBookOpenReader, faBook, faEnvelope, faBars, faMagnifyingGlass, faAngleDown, faAngleUp, faCaretDown, faCalendarDays, faPlay);


window.vue = {};
window.vue.App = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
