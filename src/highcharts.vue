<template>
    <div :style="styles" :id="id"> </div>
</template>

<script>
    import Highcharts from 'highcharts'
    import Highmaps from 'highcharts/highmaps'
    import Hightstock from 'highcharts/highstock'

    export default {
        props: {
            options: {
                type: Object,
                required: true
            },
            type: {
                type: String,
                default: 'highcharts'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '250px'
            }
        },

        data() {
            return {
                id: 'highcharts-' + new Date().getTime()
            }
        },

        watch: {
            options() {
                this.buildChart();
            },
            width() {
                this.buildChart();
            },
            height() {
                this.buildChart();
            }
        },

        computed: {
            styles() {
                return {
                    width: isNaN(this.width) ? this.width : this.width + '%',
                    height: isNaN(this.height) ? this.height : this.height + '%'
                }
            }
        },

        methods: {
            buildChart() {
                switch (this.type) {
                    case 'stock':
                    case 'highstock':
                        Hightstock.chart(this.id, this.options);
                        break;
                    case 'maps':
                    case 'highmaps':
                        Highmaps.chart(this.id, this.options);
                        break;

                    default:
                        Highcharts.chart(this.id, this.options);
                        break;
                }
            }
        },
        mounted() {
            this.buildChart();
        }
        // created() {
        //     this.buildChart();
        // },
    }

</script>