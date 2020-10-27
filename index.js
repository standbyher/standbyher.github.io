var _main = document.getElementById('main');
_main.style.width = document.body.offsetWidth + 'px';
_main.style.height = document.body.offsetHeight + 'px'

var mydata = [{
        name: '北京',
        value: 12,
        cityList: [{
            cityName: '北京',
            schools: [{
                    schoolName: '北京化工大学',
                },
                {
                    schoolName: '北京师范大学',
                },
                {
                    schoolName: '北京语言大学',
                },
                {
                    schoolName: '北京中国地质大学',
                },
                {
                    schoolName: '对外贸易经济大学',
                },
                {
                    schoolName: '中国人民大学',
                },
                {
                    schoolName: '中国社会科学院大学',
                },
                {
                    schoolName: '中国政法大学',
                },
                {
                    schoolName: '中央民族大学',
                },
                {
                    schoolName: '首都师范大学',
                },
                {
                    schoolName: '首都医科大学',
                },
                {
                    schoolName: '北京理工大学',
                },
            ]
        }]
    }, {
        name: '天津',
        value: 6,
        cityList: [{
            cityName: '天津',
            schools: [{
                schoolName: '南开大学',
            }, {
                schoolName: '天津师范大学',
            }, {
                schoolName: '天津外国语大学',
            }, {
                schoolName: '天津音乐学院',
            }, {
                schoolName: '天津中医药大学',
            }, {
                schoolName: '天津工业大学',
            }]
        }]
    },
    {
        name: '上海',
        value: 11,
        cityList: [{
            cityName: '上海',
            schools: [{
                schoolName: '华东师范大学',
            }, {
                schoolName: '华东政法大学',
            }, {
                schoolName: '上海对外经贸大学',
            }, {
                schoolName: '上海师范大学',
            }, {
                schoolName: '上海政法学院',
            }, {
                schoolName: '上海财经大学',
            }, {
                schoolName: '上海电力大学',
            }, {
                schoolName: '上海工程技术大学',
            }, {
                schoolName: '华东理工大学',
            }, {
                schoolName: '上海立信会计金融学院',
            }, {
                schoolName: '上海商学院',
            }, ]
        }]
    }, {
        name: '重庆',
        value: 6,
        cityList: [{
            cityName: '重庆',
            schools: [{
                schoolName: '西南政法大学',
            }, {
                schoolName: '重庆交通大学',
            }, {
                schoolName: '重庆师范大学-涉外商贸学院',
            }, {
                schoolName: '西南科技大学',
            }, {
                schoolName: '西南财经大学',
            }, {
                schoolName: '西南石油大学',
            }, ]
        }]
    },
    {
        name: '河北',
        value: 2,
        cityList: [{
            cityName: '保定',
            schools: [{
                schoolName: '保定学院音乐',
            }, {
                schoolName: '河北保定师范附属学校',
            }]
        }]
    }, {
        name: '河南',
        value: 3,
        cityList: [{
            cityName: '开封',
            schools: [{
                schoolName: '河南大学',
            }]
        }, {
            cityName: '郑州',
            schools: [{
                schoolName: '河南中医药大学',
            }]
        }, {
            cityName: '新乡',
            schools: [{
                schoolName: '河南师范大学',
            }]
        }]
    },
    {
        name: '云南',
        value: 1,
        cityList: [{
            cityName: '昆明',
            schools: [{
                schoolName: '云南大学',
            }]
        }]
    }, {
        name: '辽宁',
        value: 5,
        cityList: [{
            cityName: '沈阳',
            schools: [{
                schoolName: '东北大学',
            }, {
                schoolName: '辽宁大学',
            }, {
                schoolName: '沈阳化工大学',
            }, {
                schoolName: '沈阳农业大学',
            }, {
                schoolName: '沈阳师范大学',
            }, ]
        }]
    },
    {
        name: '黑龙江',
        value: 0
    }, {
        name: '湖南',
        value: 3,
        cityList: [{
            cityName: '长沙',
            schools: [{
                schoolName: '湖南大学',
            }, {
                schoolName: '中南林业科技大学',
            }, {
                schoolName: '中南大学',
            }]
        }]
    },
    {
        name: '安徽',
        value: 1,
        cityList: [{
            cityName: '六安',
            schools: [{
                schoolName: '皖西学院',
            }]
        }]
    }, {
        name: '山东',
        value: 8,
        cityList: [{
            cityName: '济南',
            schools: [{
                schoolName: '山东财经大学',
            }, {
                schoolName: '山东女子学院',
            }, {
                schoolName: '山东大学',
            }]
        }, {
            cityName: '青岛',
            schools: [{
                schoolName: '山东科技大学',
            }, {
                schoolName: '中国海洋大学 ',
            }, {
                schoolName: '青岛大学',
            }]
        }, {
            cityName: '泰安',
            schools: [{
                schoolName: '山东第一医科大学',
            }]
        }, {
            cityName: '曲阜',
            schools: [{
                schoolName: '曲阜师范大学',
            }]
        }]
    },
    {
        name: '新疆',
        value: 0
    }, {
        name: '江苏',
        value: 8,
        cityList: [{
            cityName: '南京',
            schools: [{
                schoolName: '河海大学',
            }, {
                schoolName: '南京理工大学',
            }, {
                schoolName: '南京医科大学康达学院',
            }, {
                schoolName: '南京特殊教育师范学院',
            }, {
                schoolName: '南京医科大学',
            }, {
                schoolName: '中国传媒大学南广学院',
            }, ]
        }, {
            cityName: '苏州',
            schools: [{
                schoolName: '苏州科技大学',
            }]
        }, {
            cityName: '无锡',
            schools: [{
                schoolName: '江南大学',
            }]
        }]
    },
    {
        name: '浙江',
        value: 2,
        cityList: [{
            cityName: '杭州',
            schools: [{
                schoolName: '浙江传媒学院',
            }, ]
        }, {
            cityName: '绍兴',
            schools: [{
                schoolName: '浙江越秀外国语学院',
            }, ]
        }]
    }, {
        name: '江西',
        value: 2,
        cityList: [{
            cityName: '南昌',
            schools: [{
                schoolName: '江西师范大学',
            }, {
                schoolName: '南昌航空大学',
            }]
        }]
    },
    {
        name: '湖北',
        value: 6,
        cityList: [{
            cityName: '武汉',
            schools: [{
                schoolName: '湖北美术学院',
            }, {
                schoolName: '华中农业大学',
            }, {
                schoolName: '武汉大学',
            }, {
                schoolName: '湖北经济学院',
            }, {
                schoolName: '中南财经政法大学',
            }, ]
        }, {
            cityName: '宜昌',
            schools: [{
                schoolName: '三峡大学',
            }]
        }]
    }, {
        name: '广西',
        value: 0
    },
    {
        name: '甘肃',
        value: 1,
        cityList: [{
            cityName: '兰州',
            schools: [{
                schoolName: '兰州理工大学',
            }]
        }]
    }, {
        name: '山西',
        value: 0
    },
    {
        name: '内蒙古',
        value: 0
    }, {
        name: '陕西',
        value: 1,
        cityList: [{
            cityName: '西安',
            schools: [{
                schoolName: '西安电子科技大学',
            }]
        }]
    },
    {
        name: '吉林',
        value: 0
    }, {
        name: '福建',
        value: 4,
        cityList: [{
            cityName: '福州',
            schools: [{
                schoolName: '福建商学院',
            }, {
                schoolName: '福建师范大学',
            }, {
                schoolName: '福建农林大学',
            }]
        }, {
            cityName: '泉州',
            schools: [{
                schoolName: '华侨大学',
            }]
        }]
    },
    {
        name: '贵州',
        value: 0
    }, {
        name: '广东',
        value: 4,
        cityList: [{
            cityName: '广州',
            schools: [{
                schoolName: '中山大学',
            }, {
                schoolName: '暨南大学',
            }, {
                schoolName: '广州大学',
            }, {
                schoolName: '华南师范大学',
            }]
        }]
    },
    {
        name: '青海',
        value: 0
    }, {
        name: '西藏',
        value: 0
    },
    {
        name: '四川',
        value: 3,
        cityList: [{
            cityName: '阿坝',
            schools: [{
                schoolName: '阿坝师范学院',
            }]
        }, {
            cityName: '成都',
            schools: [{
                schoolName: '成都西南民族大学',
            }]
        }, {
            cityName: '雅安',
            schools: [{
                schoolName: '四川农业大学',
            }]
        }]
    }, {
        name: '宁夏',
        value: 0
    },
    {
        name: '海南',
        value: 0
    }, {
        name: '台湾',
        value: 0
    },
    {
        name: '香港',
        value: 0
    }, {
        name: '澳门',
        value: 0
    }
];

window.addEventListener('load', function () {
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        title: {
            show: true,
            text: '月经安心行动',
            subtext: '卫生巾互助盒高校地图展示',
            x: 'center',
            y: 'top',
            textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                fontFamily: 'Arial, Verdana',
                fontSize: 21,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
            subtextStyle: { //副标题文本样式{"color": "#aaa"}
                fontFamily: 'Arial, Verdana',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
        },
        //左侧小导航图标
        visualMap: {
            show: true,
            x: 'left',
            y: 'center',
            splitList: [{
                    start: 10,
                    end: 12
                }, {
                    start: 7,
                    end: 9
                }, {
                    start: 4,
                    end: 6
                },
                {
                    start: 1,
                    end: 3
                }, {
                    start: 0,
                    end: 0
                },
            ],
            color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#9fb5ea']
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                var value = params.data.value;
                if (value) {
                    var cityList = params.data.cityList;
                    var formatStr = '';
                    cityList.forEach(function (item) {
                        formatStr += item.cityName + ':<br/>';
                        var schools = item.schools;
                        schools.forEach(function (school) {
                            formatStr += school.schoolName + '<br/>';
                        });
                        formatStr += '<br/>';
                    });

                    formatStr = formatStr.substring(0, formatStr.length - 5);

                    return formatStr;
                }

                return params.data.name + ':' + params.data.value;
            }
        },
        series: [{
            type: 'map',
            map: 'china',
            label: {
                normal: {
                    show: true //省份名称  
                },
                emphasis: {
                    show: false
                }
            },
            data: mydata //数据
        }]
    });
});