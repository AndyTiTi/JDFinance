<template lang="html">
    <Panel title="更多服务" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.img">
                <img :src="item.img" alt="item.title">
                <p>{{item.title}}</p>
            </div>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel"
    export default {
        components: {
            Panel
        },
        data(){
            return {
                items:[{
                    href:'home3',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
                    title:'优惠券'
                },{
                    href:'home4',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                    title:'领红包'
                },{
                    href:'home5',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                    title:'抢钢镚'
                },{
                    href:'home6',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                    title:'抢京豆'
                },{
                    href:'home7',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                    title:'白条提额'
                },{
                    href:'home7',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                    title:'白条提额'
                }]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element";
    .panel {
        @include panel;
        .content {
            @include flex(row);
            .item{
                width: 160px;
                height: 144px;
                text-align: center;
                margin-bottom: 40px;
                img{
                    width: 90px;
                    height:90px;
                }
                p{
                    font-size: 26px;
                    color: #666;
                    margin-top: 12px;
                }
            }
        }
    }
</style>