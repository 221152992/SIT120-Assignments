const app2 = {
    template: '<p> Hey Im a local vue component</p>'
}

const local = new Vue({
  el: '#app2',
    components: {
        'app2': app2,
  },    
});