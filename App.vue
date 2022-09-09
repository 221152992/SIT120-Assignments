<template>
<Props : TestPropBool="TestPropBool"/>
</template>

<script>
import Props from './Props.vue'

export default {
    data(){
        return{
            TestPropBool: true
        }
    },
    components: {
        Props
    }
}
</script>