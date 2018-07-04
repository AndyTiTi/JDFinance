<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>
        <Footer cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import Footer from '../public/footer'
    import Navbar from '../public/navbar'
    import Slider from './mslider'
    import Ada from './ada'
    import Adb from './adb'
    import Adc from './adc'
    import Finance from './finance'
    import Money from './money'
    export default {
        components:{
            Heador,
            Slider,
            Footer,
            Navbar,
            Ada,
            Adb,
            Adc,
            Finance,
            Money
        }
    }
</script>

<style lang="scss">
    .mfooter{
        margin-top: 0!important;
        ul{
            li:first-child{
                display: none;
            }
        }
    }
</style>
