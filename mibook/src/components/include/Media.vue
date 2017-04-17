<template>
    <div class="media" @click="clickHandle">
        <div class="media-left">
            <a href="javascript:;"><img :src="imgSrc" alt=""></a>
        </div>
        <div class="media-center">
            <h4>{{title}}</h4>
            <p>{{author}}</p>            
            <p>{{description}}</p>
        </div>
        <!--<div class="media-right"></div>-->

    </div>
</template>

<script>
    import Router from 'vue-router'
    const router = new Router();

    export default {
        name: 'media',
        props: ['imgSrc', 'title', 'author', 'description', 'class'],
        data() {
            return {

            }
        },
        methods: {
            clickHandle() {
                this.$emit('clickHandle')
            },
        }

    }

</script>

<!--注意：这里使用 scoped的话，即使此组件作为子组件分配给其他组件，在其他组件中这里的样式也无效-->
<style scoped lang="scss">
    .media {
        background-color: #fff;
        padding: 8px 0;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        position: relative;
        &:not(:last-child):before {
            content: ' ';
            display: block;
            height: 1px;
            width: 100%;
            background-color: #ddd;
            transform: scaleY(.5);
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }
        .media-left {
            flex: .5;
            a {
                display: block;
                padding: 10px 0 0 0;
            }
            img {
                width: 80%;
                max-width: 100%;
            }
        }
        .media-center {
            flex: 1;
            text-align: left;
            h4 {
                font-size: 17px;
                font-weight: 500;
                margin: 0;
            }
            p {
                font-size: 13px;
                color: #a8a8a8;
                overflow: hidden;
                text-overflow: ellipsis;
                /*width: 56vw;*/
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin: 0;
            }
        }
        /*.media-right{
            flex: 1;
        }*/
    }
</style>