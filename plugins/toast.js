import Vue from 'vue';
import CxltToastr from 'cxlt-vue2-toastr';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

const toastrConfigs = {
    position: 'top right',
    showDuration: 1000,
    hideDuration: 1000,
    timeOut: 2500,
    progressBar: true,
    showMethod: 'slideUp',
    // hideMethod: 'slideOutDown'
}
Vue.use(CxltToastr, toastrConfigs);