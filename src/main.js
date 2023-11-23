import { createApp } from 'vue'
import App from './App.vue'

import router from './routes';

/* import Bootstrap */
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBriefcase, faBuilding, faCalculator, faCheck, faClock, faDna, faFileLines, faHelmetSafety, faLaptop, faLeaf, faList, faMagnifyingGlass, faPersonRunning, faRightFromBracket, faScaleBalanced, faUpload, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faList, faLeaf, faHelmetSafety, faBuilding, faDna, faCalculator, faScaleBalanced, faLaptop, faPersonRunning, faRightFromBracket, faUser, faFileLines, faUpload, faCcVisa, faCcMastercard, faClock, faCheck, faBriefcase )

createApp(App).use(router, bootstrap).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
