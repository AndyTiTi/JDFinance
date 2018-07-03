<template lang="html">
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <Slider :options="options" :items="items" cname="product-slider"/>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel"
    import Slider from "../core/slider"

    export default {
        components: {
            Panel,
            Slider
        },
        data() {
            return {
                items: [{
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t20368/53/1699227456/59616/e6a80ca4/5b30a580N130c8dfc.jpg?width=335&height=421"
                }, {
                    href: "home1",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t23338/182/473320295/44592/4835b8d8/5b30a593N32e80321.jpg?width=335&height=421"
                }, {
                    href: "home2",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t23323/199/462493049/28263/3d0f7cbf/5b30a5a5N3dec8fdc.jpg?width=335&height=421"
                }],
                options: {
                    slidesPerview: 2.3,
                    spaceBetween: 30,
                    freeMode: true
                }
            }
        }
    }
</script>

<style lang="scss">
    .product-slider {
        .swiper-container {
            box-sizing: border-box;
            padding: 0 24px;
            .swiper-slide {
                a {
                    display: inline-block;
                    width: 100%;
                    img {
                        width: 100%;
                        height: 314px;
                        display: block;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element";
    .panel {
        @include panel;
        .content{
            padding-bottom: 40px;
        }
    }
</style>