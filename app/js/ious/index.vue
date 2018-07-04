<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Welfare/>
        <Service/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import Footer from '../public/footer'
    import Navbar from '../public/navbar'
    import Slider from './islider'
    import Welfare from './welfare'
    import Service from './service'
    export default {
        components:{
            Heador,
            Slider,
            Footer,
            Navbar,
            Service
        }
    }
</script>
