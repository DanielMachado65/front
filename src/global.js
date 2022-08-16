import Vue from 'vue';

export function showError(e) {
    if (e && e.response && e.response.data) {
        if (typeof e.response.data === 'object' && e.response.data.data)
            return Object.keys(e.response.data.data).map(i => {
                Vue.toasted.global.defaultError({ msg: e.response.data.data[i] })
            })
        else if (typeof e.response.data === 'object')
            return Object.keys(e.response.data).map(i => {
                Vue.toasted.global.defaultError({ msg: e.response.data[i] })
            }) 
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export function showSuccess(e) {
    if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultSuccess({ msg: e.response.data })
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultSuccess({ msg: e })
    } else {
        Vue.toasted.global.defaultSuccess()
    }
}