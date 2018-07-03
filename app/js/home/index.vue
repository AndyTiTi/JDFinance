<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import Slider from './hslider'
    import Novice from './novice'
    import Borrow from './borrow'
    import Money from './money'
    import Product from './product'
    import Life from './life'
export default {
        components:{
            Heador,
            Slider,
            Novice,
            Borrow,
            Money,
            Product,
            Life
        }
}
</script>

<style lang="scss" module>

</style>
