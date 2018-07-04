<template lang="html">
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <Slider :items="items" :cname="$style.slider" />
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel"
    import Slider from "../core/slider"
    export default {
        components:{
            Panel,
            Slider
        },
        data(){
            return {
                items:[{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t20011/85/2322479753/20750/9069e473/5b3b52a0N8d5aaecf.jpg?width=750&height=400'
                },{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t24190/21/680807859/36445/94572ab8/5b3b529bNa729d22c.jpg?width=750&height=400'
                },{
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t22096/20/1666226416/32130/4fcb9327/5b3b52aaN2714ffca.jpg?width=750&height=400'
                }]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element";
    .panel{
        @include panel;
        margin-top: 100px;
        >h4{
            display: none;
        }
        .content{
            .slider{
                img{
                    width:100%;
                }
            }
        }
    }
</style>