var _main = document.getElementById('main');
_main.style.width = document.body.offsetWidth + 'px';
_main.style.height = document.body.offsetHeight + 'px'

var mydata = [{
    "name": "四川",
    "cityList": [{
        "cityName": "阿坝",
        "value": 1,
        "schools": [{
            "schoolName": "阿坝师范学院"
        }]
    }, {
        "cityName": "成都",
        "value": 16,
        "schools": [{
            "schoolName": "成都理工大学"
        }, {
            "schoolName": "成都师范学院"
        }, {
            "schoolName": "成都西南民族大学"
        }, {
            "schoolName": "成都信息工程大学"
        }, {
            "schoolName": "成都医学院"
        }, {
            "schoolName": "双流中学"
        }, {
            "schoolName": "四川大学"
        }, {
            "schoolName": "四川大学锦城学院"
        }, {
            "schoolName": "四川旅游学院"
        }, {
            "schoolName": "四川美术学院"
        }, {
            "schoolName": "四川师范大学"
        }, {
            "schoolName": "四川外国语大学成都学院"
        }, {
            "schoolName": "棠湖中学"
        }, {
            "schoolName": "西南交通大学"
        }, {
            "schoolName": "西南交通大学希望学院"
        }, {
            "schoolName": "西南民族大学"
        }]
    }, {
        "cityName": "乐山",
        "value": 2,
        "schools": [{
            "schoolName": "成都理工大学工程技术学院"
        }, {
            "schoolName": "乐山师范学院"
        }]
    }, {
        "cityName": "攀枝花",
        "value": 1,
        "schools": [{
            "schoolName": "攀枝花学院"
        }]
    }, {
        "cityName": "甘孜",
        "value": 1,
        "schools": [{
            "schoolName": "四川民族学院"
        }]
    }, {
        "cityName": "雅安",
        "value": 1,
        "schools": [{
            "schoolName": "四川农业大学"
        }]
    }, {
        "cityName": "自贡",
        "value": 2,
        "schools": [{
            "schoolName": "四川轻化工大学"
        }, {
            "schoolName": "四川卫生康复职业学院"
        }]
    }, {
        "cityName": "南充",
        "value": 1,
        "schools": [{
            "schoolName": "西华师范大学"
        }]
    }, {
        "cityName": "泸州",
        "value": 1,
        "schools": [{
            "schoolName": "西南医科大学"
        }]
    }]
}, {
    "name": "广东",
    "cityList": [{
        "cityName": "珠海",
        "value": 2,
        "schools": [{
            "schoolName": "UIC北京师范大学-香港浸会大学联合国际学院"
        }, {
            "schoolName": "北京师范大学珠海校区"
        }]
    }, {
        "cityName": "惠州",
        "value": 2,
        "schools": [{
            "schoolName": "博罗县华侨中学"
        }, {
            "schoolName": "惠州市第一中学"
        }]
    }, {
        "cityName": "中山",
        "value": 1,
        "schools": [{
            "schoolName": "电子科技大学中山学院"
        }]
    }, {
        "cityName": "广州",
        "value": 15,
        "schools": [{
            "schoolName": "广东财经大学华商学院"
        }, {
            "schoolName": "广东第二师范学院"
        }, {
            "schoolName": "广东金融学院"
        }, {
            "schoolName": "广东石油化工学院"
        }, {
            "schoolName": "广东实验中学"
        }, {
            "schoolName": "广东外语外贸大学"
        }, {
            "schoolName": "广州大学"
        }, {
            "schoolName": "广州华商职业学院"
        }, {
            "schoolName": "广州美术学院"
        }, {
            "schoolName": "广州市第四中学"
        }, {
            "schoolName": "华南农业大学"
        }, {
            "schoolName": "汇景实验学校"
        }, {
            "schoolName": "暨南大学"
        }, {
            "schoolName": "星海音乐学院"
        }, {
            "schoolName": "中山大学"
        }]
    }, {
        "cityName": "湛江",
        "value": 2,
        "schools": [{
            "schoolName": "广东海洋大学"
        }, {
            "schoolName": "岭南师范学院"
        }]
    }, {
        "cityName": "东莞",
        "value": 2,
        "schools": [{
            "schoolName": "广东医科大学"
        }, {
            "schoolName": "中山大学新华学院"
        }]
    }, {
        "cityName": "佛山",
        "value": 1,
        "schools": [{
            "schoolName": "华南师范大学"
        }]
    }, {
        "cityName": "深圳",
        "value": 3,
        "schools": [{
            "schoolName": "深圳大学"
        }, {
            "schoolName": "深圳市职业技术学院"
        }, {
            "schoolName": "深圳职业技术学院"
        }]
    }, {
        "cityName": "江门",
        "value": 1,
        "schools": [{
            "schoolName": "五邑大学"
        }]
    }]
}, {
    "name": "安徽",
    "cityList": [{
        "cityName": "芜湖",
        "value": 1,
        "schools": [{
            "schoolName": "安徽师范大学"
        }]
    }, {
        "cityName": "合肥",
        "value": 2,
        "schools": [{
            "schoolName": "安徽新华学院"
        }, {
            "schoolName": "合肥工业大学"
        }]
    }, {
        "cityName": "蚌埠",
        "value": 1,
        "schools": [{
            "schoolName": "蚌埠学院"
        }]
    }, {
        "cityName": "亳州",
        "value": 1,
        "schools": [{
            "schoolName": "亳州学院"
        }]
    }, {
        "cityName": "黄山",
        "value": 1,
        "schools": [{
            "schoolName": "黄山学院"
        }]
    }, {
        "cityName": "六安",
        "value": 1,
        "schools": [{
            "schoolName": "皖西学院官微"
        }]
    }, {
        "cityName": "宿州",
        "value": 1,
        "schools": [{
            "schoolName": "宿州学院"
        }]
    }]
}, {
    "name": "河南",
    "cityList": [{
        "cityName": "安阳",
        "value": 1,
        "schools": [{
            "schoolName": "安阳师范学院"
        }]
    }, {
        "cityName": "郑州",
        "value": 8,
        "schools": [{
            "schoolName": "河南财经政法大学"
        }, {
            "schoolName": "河南中医药大学"
        }, {
            "schoolName": "郑州大学"
        }, {
            "schoolName": "郑州大学国际学院"
        }, {
            "schoolName": "郑州师范学院"
        }, {
            "schoolName": "郑州市第十中学"
        }, {
            "schoolName": "中原工学院"
        }, {
            "schoolName": "中原文化艺术学院"
        }]
    }, {
        "cityName": "开封",
        "value": 1,
        "schools": [{
            "schoolName": "河南大学"
        }]
    }, {
        "cityName": "新乡",
        "value": 3,
        "schools": [{
            "schoolName": "河南工学院"
        }, {
            "schoolName": "河南师范大学"
        }, {
            "schoolName": "新乡医学院"
        }]
    }, {
        "cityName": "洛阳",
        "value": 1,
        "schools": [{
            "schoolName": "洛阳师范学院"
        }]
    }, {
        "cityName": "商丘",
        "value": 2,
        "schools": [{
            "schoolName": "商丘师范学院"
        }, {
            "schoolName": "商丘市第一高级中学"
        }]
    }]
}, {
    "name": "澳门",
    "cityList": [{
        "cityName": "澳门",
        "value": 1,
        "schools": [{
            "schoolName": "澳门城市大学"
        }]
    }]
}, {
    "name": "内蒙古",
    "cityList": [{
        "cityName": "包头",
        "value": 1,
        "schools": [{
            "schoolName": "包头师范学院"
        }]
    }, {
        "cityName": "呼和浩特",
        "value": 3,
        "schools": [{
            "schoolName": "内蒙古财经大学"
        }, {
            "schoolName": "内蒙古大学"
        }, {
            "schoolName": "内蒙古医科大学"
        }]
    }, {
        "cityName": "通辽",
        "value": 1,
        "schools": [{
            "schoolName": "内蒙古民族大学"
        }]
    }, {
        "cityName": "乌兰浩特",
        "value": 1,
        "schools": [{
            "schoolName": "乌兰浩特一中"
        }]
    }]
}, {
    "name": "河北",
    "cityList": [{
        "cityName": "保定",
        "value": 4,
        "schools": [{
            "schoolName": "保定学院音乐"
        }, {
            "schoolName": "河北保定师范附属学校"
        }, {
            "schoolName": "河北大学"
        }, {
            "schoolName": "华北电力大学保定"
        }]
    }, {
        "cityName": "黄骅",
        "value": 1,
        "schools": [{
            "schoolName": "北京交通大学海滨学院"
        }]
    }, {
        "cityName": "张家口",
        "value": 1,
        "schools": [{
            "schoolName": "河北北方学院"
        }]
    }, {
        "cityName": "石家庄",
        "value": 6,
        "schools": [{
            "schoolName": "河北地质大学"
        }, {
            "schoolName": "河北经贸大学"
        }, {
            "schoolName": "河北科技大学"
        }, {
            "schoolName": "河北师范大学"
        }, {
            "schoolName": "河北政法职业学院"
        }, {
            "schoolName": "河北中医学院"
        }]
    }, {
        "cityName": "衡水",
        "value": 1,
        "schools": [{
            "schoolName": "衡水市第二中学"
        }]
    }]
}, {
    "name": "北京",
    "cityList": [{
        "cityName": "北京",
        "value": 34,
        "schools": [{
            "schoolName": "北京第二外国语学院"
        }, {
            "schoolName": "北京工商大学"
        }, {
            "schoolName": "北京工业大学"
        }, {
            "schoolName": "北京航空航天大学"
        }, {
            "schoolName": "北京化工大学"
        }, {
            "schoolName": "北京建筑大学"
        }, {
            "schoolName": "北京交通大学"
        }, {
            "schoolName": "北京科技大学"
        }, {
            "schoolName": "北京理工大学"
        }, {
            "schoolName": "北京农学院"
        }, {
            "schoolName": "北京师范大学"
        }, {
            "schoolName": "北京体育大学"
        }, {
            "schoolName": "北京外国语大学"
        }, {
            "schoolName": "北京信息科技大学"
        }, {
            "schoolName": "北京邮电大学"
        }, {
            "schoolName": "北京语言大学 "
        }, {
            "schoolName": "北京中国地质大学"
        }, {
            "schoolName": "对外经济贸易大学"
        }, {
            "schoolName": "对外贸易经济大学"
        }, {
            "schoolName": "首都经济贸易大学"
        }, {
            "schoolName": "首都师范大学"
        }, {
            "schoolName": "首都医科大学"
        }, {
            "schoolName": "中国传媒大学"
        }, {
            "schoolName": "中国矿业大学"
        }, {
            "schoolName": "中国劳动关系学院"
        }, {
            "schoolName": "中国农业大学"
        }, {
            "schoolName": "中国人民大学"
        }, {
            "schoolName": "中国人民公安大学"
        }, {
            "schoolName": "中国社会科学院大学"
        }, {
            "schoolName": "中国政法大学 "
        }, {
            "schoolName": "中华女子学院"
        }, {
            "schoolName": "中央财经大学"
        }, {
            "schoolName": "中央美术学院"
        }, {
            "schoolName": "中央民族大学"
        }]
    }]
}, {
    "name": "山东",
    "cityList": [{
        "cityName": "威海",
        "value": 1,
        "schools": [{
            "schoolName": "北京交通大学威海校区"
        }]
    }, {
        "cityName": "菏泽",
        "value": 1,
        "schools": [{
            "schoolName": "菏泽学院"
        }]
    }, {
        "cityName": "济南",
        "value": 9,
        "schools": [{
            "schoolName": "济南大学"
        }, {
            "schoolName": "山东财经大学"
        }, {
            "schoolName": "山东大学"
        }, {
            "schoolName": "山东管理学院"
        }, {
            "schoolName": "山东女子学院 "
        }, {
            "schoolName": "山东省实验中学东校"
        }, {
            "schoolName": "山东师范大学"
        }, {
            "schoolName": "山东艺术学院"
        }, {
            "schoolName": "山东政法学院"
        }]
    }, {
        "cityName": "烟台",
        "value": 2,
        "schools": [{
            "schoolName": "鲁东大学"
        }, {
            "schoolName": "烟台大学"
        }]
    }, {
        "cityName": "青岛",
        "value": 5,
        "schools": [{
            "schoolName": "青岛大学"
        }, {
            "schoolName": "青岛理工大学"
        }, {
            "schoolName": "青岛农业大学"
        }, {
            "schoolName": "山东科技大学 "
        }, {
            "schoolName": "中国海洋大学"
        }]
    }, {
        "cityName": "曲阜",
        "value": 1,
        "schools": [{
            "schoolName": "曲阜师范大学"
        }]
    }, {
        "cityName": "泰安",
        "value": 3,
        "schools": [{
            "schoolName": "山东第一医科大学"
        }, {
            "schoolName": "山东农业大学"
        }, {
            "schoolName": "泰山学院"
        }]
    }]
}, {
    "name": "江苏",
    "cityList": [{
        "cityName": "常州",
        "value": 1,
        "schools": [{
            "schoolName": "常州大学"
        }]
    }, {
        "cityName": "南京",
        "value": 22,
        "schools": [{
            "schoolName": "东南大学"
        }, {
            "schoolName": "河海大学 "
        }, {
            "schoolName": "江苏第二师范学院"
        }, {
            "schoolName": "金陵科技学院"
        }, {
            "schoolName": "南京传媒学院"
        }, {
            "schoolName": "南京工程学院"
        }, {
            "schoolName": "南京航空航天大学"
        }, {
            "schoolName": "南京航空航天大学金城学院"
        }, {
            "schoolName": "南京理工大学"
        }, {
            "schoolName": "南京农业大学"
        }, {
            "schoolName": "南京审计大学"
        }, {
            "schoolName": "南京特殊教育师范学院"
        }, {
            "schoolName": "南京外国语学校"
        }, {
            "schoolName": "南京晓庄学院"
        }, {
            "schoolName": "南京信息工程大学"
        }, {
            "schoolName": "南京医科大学"
        }, {
            "schoolName": "南京医科大学康达学院"
        }, {
            "schoolName": "南京艺术学院"
        }, {
            "schoolName": "南京邮电大学"
        }, {
            "schoolName": "南京中医药大学"
        }, {
            "schoolName": "中国传媒大学南广学院"
        }, {
            "schoolName": "中国药科大学"
        }]
    }, {
        "cityName": "淮安",
        "value": 1,
        "schools": [{
            "schoolName": "淮阴师范学院"
        }]
    }, {
        "cityName": "无锡",
        "value": 1,
        "schools": [{
            "schoolName": "江南大学"
        }, {
            "schoolName": "无锡工艺职业技术学院"
        }]
    }, {
        "cityName": "连云港",
        "value": 1,
        "schools": [{
            "schoolName": "江苏海洋大学"
        }]
    }, {
        "cityName": "徐州",
        "value": 2,
        "schools": [{
            "schoolName": "江苏师范大学"
        }, {
            "schoolName": "徐州工程学院"
        }]
    }, {
        "cityName": "苏州",
        "value": 2,
        "schools": [{
            "schoolName": "苏州大学"
        }, {
            "schoolName": "苏州科技大学"
        }]
    }, {
        "cityName": "盐城",
        "value": 1,
        "schools": [{
            "schoolName": "盐城工学院"
        }]
    }]
}, {
    "name": "云南",
    "cityList": [{
        "cityName": "大理",
        "value": 1,
        "schools": [{
            "schoolName": "大理大学"
        }]
    }, {
        "cityName": "曲靖",
        "value": 1,
        "schools": [{
            "schoolName": "罗平县第一中学"
        }]
    }, {
        "cityName": "昆明",
        "value": 4,
        "schools": [{
            "schoolName": "云南大学"
        }, {
            "schoolName": "云南民族大学"
        }, {
            "schoolName": "云南农业大学"
        }, {
            "schoolName": "云南中医药大学"
        }]
    }]
}, {
    "name": "辽宁",
    "cityList": [{
        "cityName": "大连",
        "value": 4,
        "schools": [{
            "schoolName": "大连东软信息学院"
        }, {
            "schoolName": "大连民族大学"
        }, {
            "schoolName": "大连外国语大学"
        }, {
            "schoolName": "东北财经大学"
        }]
    }, {
        "cityName": "沈阳",
        "value": 8,
        "schools": [{
            "schoolName": "东北大学"
        }, {
            "schoolName": "辽宁大学"
        }, {
            "schoolName": "沈阳大学"
        }, {
            "schoolName": "沈阳化工大学"
        }, {
            "schoolName": "沈阳化工大学 "
        }, {
            "schoolName": "沈阳农业大学"
        }, {
            "schoolName": "沈阳师范大学"
        }, {
            "schoolName": "沈阳音乐学院"
        }]
    }]
}, {
    "name": "黑龙江",
    "cityList": [{
        "cityName": "哈尔滨",
        "value": 5,
        "schools": [{
            "schoolName": "东北林业大学"
        }, {
            "schoolName": "东北农业大学"
        }, {
            "schoolName": "哈尔滨商业大学"
        }, {
            "schoolName": "黑龙江大学"
        }, {
            "schoolName": "黑龙江科技大学"
        }]
    }, {
        "cityName": "鸡西",
        "value": 1,
        "schools": [{
            "schoolName": "黑龙江工业学院"
        }]
    }, {
        "cityName": "牡丹江",
        "value": 1,
        "schools": [{
            "schoolName": "牡丹江医学院"
        }]
    }]
}, {
    "name": "福建",
    "cityList": [{
        "cityName": "福州",
        "value": 9,
        "schools": [{
            "schoolName": "福建江夏学院"
        }, {
            "schoolName": "福建农林大学"
        }, {
            "schoolName": "福建商学院"
        }, {
            "schoolName": "福建师范大学"
        }, {
            "schoolName": "福州大学"
        }, {
            "schoolName": "福州大学至诚学院"
        }, {
            "schoolName": "福州理工学院"
        }, {
            "schoolName": "闽江师范高等专科学校"
        }, {
            "schoolName": "闽江学院"
        }]
    }, {
        "cityName": "厦门",
        "value": 3,
        "schools": [{
            "schoolName": "福州大学厦门工艺美术学院"
        }, {
            "schoolName": "集美大学"
        }, {
            "schoolName": "厦门大学"
        }]
    }, {
        "cityName": "泉州",
        "value": 2,
        "schools": [{
            "schoolName": "华侨大学"
        }, {
            "schoolName": "仰恩大学"
        }]
    }, {
        "cityName": "莆田",
        "value": 1,
        "schools": [{
            "schoolName": "湄洲湾职业技术学院"
        }]
    }]
}, {
    "name": "上海",
    "cityList": [{
        "cityName": "上海",
        "value": 19,
        "schools": [{
            "schoolName": "复旦大学"
        }, {
            "schoolName": "华东理工大学"
        }, {
            "schoolName": "华东师范大学"
        }, {
            "schoolName": "华东政法大学"
        }, {
            "schoolName": "上海财经大学"
        }, {
            "schoolName": "上海大学"
        }, {
            "schoolName": "上海第二工业大学"
        }, {
            "schoolName": "上海电力大学"
        }, {
            "schoolName": "上海对外经贸大学"
        }, {
            "schoolName": "上海工程技术大学"
        }, {
            "schoolName": "上海立信会计金融学院"
        }, {
            "schoolName": "上海领科双语学校"
        }, {
            "schoolName": "上海商学院"
        }, {
            "schoolName": "上海师范大学"
        }, {
            "schoolName": "上海体育学院"
        }, {
            "schoolName": "上海外国语大学"
        }, {
            "schoolName": "上海应用技术大学"
        }, {
            "schoolName": "上海政法学院 "
        }, {
            "schoolName": "同济大学"
        }]
    }]
}, {
    "name": "广西",
    "cityList": [{
        "cityName": "南宁",
        "value": 2,
        "schools": [{
            "schoolName": "广西大学"
        }, {
            "schoolName": "广西医科大学"
        }]
    }, {
        "cityName": "桂林",
        "value": 1,
        "schools": [{
            "schoolName": "广西师范大学"
        }]
    }, {
        "cityName": "梧州",
        "value": 2,
        "schools": [{
            "schoolName": "梧州高级中学"
        }, {
            "schoolName": "梧州学院"
        }]
    }]
}, {
    "name": "贵州",
    "cityList": [{
        "cityName": "贵阳",
        "value": 1,
        "schools": [{
            "schoolName": "贵州大学"
        }]
    }, {
        "cityName": "遵义",
        "value": 1,
        "schools": [{
            "schoolName": "余庆中学"
        }]
    }]
}, {
    "name": "海南",
    "cityList": [{
        "cityName": "海口",
        "value": 1,
        "schools": [{
            "schoolName": "海南大学"
        }]
    }, {
        "cityName": "三亚",
        "value": 3,
        "schools": [{
            "schoolName": "海南热带海洋学院"
        }, {
            "schoolName": "海南省三亚市第一中学"
        }, {
            "schoolName": "三亚学院"
        }]
    }]
}, {
    "name": "浙江",
    "cityList": [{
        "cityName": "杭州",
        "value": 11,
        "schools": [{
            "schoolName": "杭州师范大学"
        }, {
            "schoolName": "浙大城市学院"
        }, {
            "schoolName": "浙江传媒学院"
        }, {
            "schoolName": "浙江工商大学"
        }, {
            "schoolName": "浙江理工大学"
        }, {
            "schoolName": "浙江旅游职业学院"
        }, {
            "schoolName": "浙江旅游职业学院千岛湖校区"
        }, {
            "schoolName": "浙江农林大学"
        }, {
            "schoolName": "浙江音乐学院"
        }, {
            "schoolName": "中国计量大学"
        }, {
            "schoolName": "中国美术学院"
        }]
    }, {
        "cityName": "湖州",
        "value": 1,
        "schools": [{
            "schoolName": "湖州师范学院"
        }]
    }, {
        "cityName": "温州",
        "value": 2,
        "schools": [{
            "schoolName": "温州肯恩大学"
        }, {
            "schoolName": "温州医科大学"
        }]
    }, {
        "cityName": "嘉兴",
        "value": 1,
        "schools": [{
            "schoolName": "秀州中学"
        }]
    }, {
        "cityName": "宁波",
        "value": 1,
        "schools": [{
            "schoolName": "浙大宁波理工学院"
        }]
    }, {
        "cityName": "海宁",
        "value": 1,
        "schools": [{
            "schoolName": "浙江财经大学东方学院"
        }]
    }, {
        "cityName": "绍兴",
        "value": 2,
        "schools": [{
            "schoolName": "浙江理工大学科技与艺术学院"
        }, {
            "schoolName": "浙江越秀外国语学院"
        }]
    }]
}, {
    "name": "湖南",
    "cityList": [{
        "cityName": "衡阳",
        "value": 2,
        "schools": [{
            "schoolName": "衡阳师范学院"
        }, {
            "schoolName": "南华大学"
        }]
    }, {
        "cityName": "长沙",
        "value": 8,
        "schools": [{
            "schoolName": "湖南财政经济学院"
        }, {
            "schoolName": "湖南大学"
        }, {
            "schoolName": "湖南工商大学"
        }, {
            "schoolName": "湖南农业大学"
        }, {
            "schoolName": "湖南师范大学"
        }, {
            "schoolName": "长沙理工大学"
        }, {
            "schoolName": "中南大学"
        }, {
            "schoolName": "中南林业科技大学"
        }]
    }, {
        "cityName": "株洲",
        "value": 1,
        "schools": [{
            "schoolName": "湖南工业大学"
        }]
    }, {
        "cityName": "永州",
        "value": 1,
        "schools": [{
            "schoolName": "湖南科技学院"
        }]
    }, {
        "cityName": "岳阳",
        "value": 1,
        "schools": [{
            "schoolName": "湖南理工学院南湖学院"
        }]
    }, {
        "cityName": "怀化",
        "value": 1,
        "schools": [{
            "schoolName": "怀化学院"
        }]
    }]
}, {
    "name": "湖北",
    "cityList": [{
        "cityName": "武汉",
        "value": 17,
        "schools": [{
            "schoolName": "湖北大学"
        }, {
            "schoolName": "湖北第二师范学院"
        }, {
            "schoolName": "湖北工业大学"
        }, {
            "schoolName": "湖北经济学院"
        }, {
            "schoolName": "湖北美术学院"
        }, {
            "schoolName": "湖北中医药大学"
        }, {
            "schoolName": "华中科技大学"
        }, {
            "schoolName": "华中农业大学"
        }, {
            "schoolName": "江汉大学"
        }, {
            "schoolName": "武汉传媒学院"
        }, {
            "schoolName": "武汉大学"
        }, {
            "schoolName": "武汉工程大学"
        }, {
            "schoolName": "武汉理工大学"
        }, {
            "schoolName": "武汉商学院"
        }, {
            "schoolName": "中国地质大学武汉"
        }, {
            "schoolName": "中南财经政法大学"
        }, {
            "schoolName": "中南民族大学"
        }]
    }, {
        "cityName": "咸宁",
        "value": 1,
        "schools": [{
            "schoolName": "湖北科技学院"
        }]
    }, {
        "cityName": "荆州",
        "value": 2,
        "schools": [{
            "schoolName": "湖北省沙市中学"
        }, {
            "schoolName": "长江大学"
        }]
    }, {
        "cityName": "宜昌",
        "value": 1,
        "schools": [{
            "schoolName": "三峡大学"
        }]
    }]
}, {
    "name": "吉林",
    "cityList": [{
        "cityName": "长春",
        "value": 2,
        "schools": [{
            "schoolName": "吉林大学"
        }, {
            "schoolName": "长春财经学院"
        }]
    }, {
        "cityName": "四平",
        "value": 1,
        "schools": [{
            "schoolName": "吉林师范大学"
        }]
    }]
}, {
    "name": "江西",
    "cityList": [{
        "cityName": "南昌",
        "value": 5,
        "schools": [{
            "schoolName": "江西财经大学"
        }, {
            "schoolName": "江西师范大学"
        }, {
            "schoolName": "南昌大学"
        }, {
            "schoolName": "南昌航空大学"
        }, {
            "schoolName": "南昌市第一中学"
        }]
    }]
}, {
    "name": "新疆",
    "cityList": [{
        "cityName": "喀什",
        "value": 1,
        "schools": [{
            "schoolName": "喀什大学"
        }]
    }, {
        "cityName": "石河子",
        "value": 1,
        "schools": [{
            "schoolName": "石河子大学"
        }]
    }, {
        "cityName": "乌鲁木齐",
        "value": 2,
        "schools": [{
            "schoolName": "乌鲁木齐市高级中学"
        }, {
            "schoolName": "新疆大学"
        }]
    }]
}, {
    "name": "甘肃",
    "cityList": [{
        "cityName": "兰州",
        "value": 5,
        "schools": [{
            "schoolName": "兰州财经大学"
        }, {
            "schoolName": "兰州大学"
        }, {
            "schoolName": "兰州工业学院"
        }, {
            "schoolName": "兰州交通大学"
        }, {
            "schoolName": "兰州理工大学"
        }]
    }]
}, {
    "name": "天津",
    "cityList": [{
        "cityName": "天津",
        "value": 15,
        "schools": [{
            "schoolName": "南开大学"
        }, {
            "schoolName": "天津财经大学珠江学院"
        }, {
            "schoolName": "天津大学"
        }, {
            "schoolName": "天津工业大学"
        }, {
            "schoolName": "天津科技大学"
        }, {
            "schoolName": "天津理工大学"
        }, {
            "schoolName": "天津美术学院"
        }, {
            "schoolName": "天津商业大学"
        }, {
            "schoolName": "天津师范大学"
        }, {
            "schoolName": "天津市大学软件学院"
        }, {
            "schoolName": "天津外国语大学"
        }, {
            "schoolName": "天津外国语大学滨海外事学院"
        }, {
            "schoolName": "天津音乐学院 "
        }, {
            "schoolName": "天津职业技术师范大学"
        }, {
            "schoolName": "天津中医药大学"
        }]
    }]
}, {
    "name": "山西",
    "cityList": [{
        "cityName": "晋中",
        "value": 4,
        "schools": [{
            "schoolName": "山西传媒学院"
        }, {
            "schoolName": "山西农业大学信息学院"
        }, {
            "schoolName": "山西医科大学晋祠学院"
        }, {
            "schoolName": "太原师范学院"
        }]
    }, {
        "cityName": "太原",
        "value": 1,
        "schools": [{
            "schoolName": "山西工商学院"
        }]
    }]
}, {
    "name": "陕西",
    "cityList": [{
        "cityName": "西安",
        "value": 14,
        "schools": [{
            "schoolName": "陕西国防工业职业技术学院"
        }, {
            "schoolName": "陕西师范大学"
        }, {
            "schoolName": "西安财经大学"
        }, {
            "schoolName": "西安电子科技大学"
        }, {
            "schoolName": "西安翻译学院"
        }, {
            "schoolName": "西安工业大学"
        }, {
            "schoolName": "西安建筑科技大学"
        }, {
            "schoolName": "西安交通大学"
        }, {
            "schoolName": "西安石油大学"
        }, {
            "schoolName": "西安外国语大学"
        }, {
            "schoolName": "西安文理学院"
        }, {
            "schoolName": "西北大学"
        }, {
            "schoolName": "西北工业大学"
        }, {
            "schoolName": "西北政法大学"
        }]
    }, {
        "cityName": "汉中",
        "value": 1,
        "schools": [{
            "schoolName": "陕西理工大学"
        }]
    }, {
        "cityName": "咸阳",
        "value": 1,
        "schools": [{
            "schoolName": "咸阳师范学院"
        }]
    }, {
        "cityName": "榆林",
        "value": 1,
        "schools": [{
            "schoolName": "榆林学院"
        }]
    }]
}, {
    "name": "重庆",
    "cityList": [{
        "cityName": "重庆",
        "value": 12,
        "schools": [{
            "schoolName": "四川外国语大学"
        }, {
            "schoolName": "四川外国语大学重庆南方翻译学院"
        }, {
            "schoolName": "西南财经大学"
        }, {
            "schoolName": "西南大学"
        }, {
            "schoolName": "西南科技大学"
        }, {
            "schoolName": "西南石油大学"
        }, {
            "schoolName": "西南政法大学"
        }, {
            "schoolName": "重庆大学"
        }, {
            "schoolName": "重庆交通大学"
        }, {
            "schoolName": "重庆师范大学涉外商贸学院"
        }, {
            "schoolName": "重庆文理学院"
        }, {
            "schoolName": "重庆邮电大学移通学院"
        }]
    }]
}, {
    "name": "宁夏",
    "cityList": [{
        "cityName": "银川",
        "value": 1,
        "schools": [{
            "schoolName": "银川六中"
        }]
    }]
}];

var geoCoordMap = {
    '亳州': [115.785041, 33.849923],
    '黄骅': [117.337052, 38.376816],
    '莆田': [119.012796, 25.460126],
    '永州': [111.620604, 26.427029],
    '咸宁': [114.326794, 29.84881],
    '乐山': [103.77139, 29.558694],
    '甘孜': [101.962221, 30.054528],
    '蚌埠': [117.393214, 32.921281],
    '宿州': [116.971118, 33.651856],
    '商丘': [115.661299, 34.419487],
    '乌兰浩特': [122.070304, 46.076854],
    '大理': [100.256905, 25.595233],
    '鸡西': [130.97562, 45.301483],
    '四平': [124.355908, 43.172205],
    '石河子': [86.068493, 44.27543],
    '榆林': [109.732994, 38.291562],
    '梧州': [111.284943, 23.48142],
    '黄山': [118.345437, 29.72189],
    '六安': [116.525837, 31.740224],
    '海宁': [120.687139, 30.518173],
    '怀化': [110.009089, 27.574392],
    '衡阳': [112.577874, 26.898286],
    '晋中': [112.756718, 37.69444],
    '汉中': [107.028277, 33.074526],
    '通辽': [122.249948, 43.658189],
    '喀什': [75.99352, 39.477212],
    '澳门': [113.57861, 22.141481],
    '曲阜': [116.993989, 35.590427],
    '福州': [119.304045, 26.080689],
    '新乡': [113.931872, 35.309876],
    '阿坝': [102.231416, 31.909681],
    '雅安': [103.049539, 30.01404],
    '海门': [121.15, 31.89],
    '鄂尔多斯': [109.781327, 39.608266],
    '招远': [120.38, 37.35],
    '舟山': [122.207216, 29.985295],
    '齐齐哈尔': [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64],
    '东莞': [113.75, 23.04],
    '河源': [114.68, 23.73],
    '淮安': [119.15, 33.5],
    '泰州': [119.9, 32.49],
    '南宁': [108.33, 22.84],
    '营口': [122.18, 40.65],
    '惠州': [114.4, 23.09],
    '江阴': [120.26, 31.91],
    '蓬莱': [120.75, 37.8],
    '韶关': [113.62, 24.84],
    '嘉峪关': [98.289152, 39.77313],
    '广州': [113.23, 23.16],
    '延安': [109.47, 36.6],
    '太原': [112.53, 37.87],
    '清远': [113.01, 23.7],
    '中山': [113.38, 22.52],
    '昆明': [102.73, 25.04],
    '寿光': [118.73, 36.86],
    '盘锦': [122.070714, 41.119997],
    '长治': [113.08, 36.18],
    '深圳': [114.07, 22.62],
    '珠海': [113.52, 22.3],
    '宿迁': [118.3, 33.96],
    '咸阳': [108.72, 34.36],
    '铜川': [109.11, 35.09],
    '平度': [119.97, 36.77],
    '佛山': [113.11, 23.05],
    '海口': [110.35, 20.02],
    '江门': [113.06, 22.61],
    '章丘': [117.53, 36.72],
    '肇庆': [112.44, 23.05],
    '大连': [121.62, 38.92],
    '临汾': [111.5, 36.08],
    '吴江': [120.63, 31.16],
    '石嘴山': [106.39, 39.04],
    '沈阳': [123.38, 41.8],
    '苏州': [120.62, 31.32],
    '茂名': [110.88, 21.68],
    '嘉兴': [120.76, 30.77],
    '长春': [125.35, 43.88],
    '胶州': [120.03336, 36.264622],
    '银川': [106.27, 38.47],
    '张家港': [120.555821, 31.875428],
    '三门峡': [111.19, 34.76],
    '锦州': [121.15, 41.13],
    '南昌': [115.89, 28.68],
    '柳州': [109.4, 24.33],
    '三亚': [109.511909, 18.252847],
    '自贡': [104.778442, 29.33903],
    '吉林': [126.57, 43.87],
    '阳江': [111.95, 21.85],
    '泸州': [105.39, 28.91],
    '西宁': [101.74, 36.56],
    '宜宾': [104.56, 29.77],
    '呼和浩特': [111.65, 40.82],
    '成都': [104.06, 30.67],
    '大同': [113.3, 40.12],
    '镇江': [119.44, 32.2],
    '桂林': [110.28, 25.29],
    '张家界': [110.479191, 29.117096],
    '宜兴': [119.82, 31.36],
    '北海': [109.12, 21.49],
    '西安': [108.95, 34.27],
    '金坛': [119.56, 31.74],
    '东营': [118.49, 37.46],
    '牡丹江': [129.58, 44.6],
    '遵义': [106.9, 27.7],
    '绍兴': [120.58, 30.01],
    '扬州': [119.42, 32.39],
    '常州': [119.95, 31.79],
    '潍坊': [119.1, 36.62],
    '重庆': [106.54, 29.59],
    '台州': [121.420757, 28.656386],
    '南京': [118.78, 32.04],
    '滨州': [118.03, 37.36],
    '贵阳': [106.71, 26.57],
    '无锡': [120.29, 31.59],
    '本溪': [123.73, 41.3],
    '克拉玛依': [84.77, 45.59],
    '渭南': [109.5, 34.52],
    '马鞍山': [118.48, 31.56],
    '宝鸡': [107.15, 34.38],
    '焦作': [113.21, 35.24],
    '句容': [119.16, 31.95],
    '北京': [116.46, 39.92],
    '徐州': [117.2, 34.26],
    '衡水': [115.72, 37.72],
    '包头': [110, 40.58],
    '绵阳': [104.73, 31.48],
    '乌鲁木齐': [87.68, 43.77],
    '枣庄': [117.57, 34.86],
    '杭州': [120.19, 30.26],
    '淄博': [118.05, 36.78],
    '鞍山': [122.85, 41.12],
    '溧阳': [119.48, 31.43],
    '库尔勒': [86.06, 41.68],
    '安阳': [114.35, 36.1],
    '开封': [114.35, 34.79],
    '济南': [117, 36.65],
    '德阳': [104.37, 31.13],
    '温州': [120.65, 28.01],
    '九江': [115.97, 29.71],
    '邯郸': [114.47, 36.6],
    '临安': [119.72, 30.23],
    '兰州': [103.73, 36.03],
    '沧州': [116.83, 38.33],
    '临沂': [118.35, 35.05],
    '南充': [106.110698, 30.837793],
    '天津': [117.2, 39.13],
    '富阳': [119.95, 30.07],
    '泰安': [117.13, 36.18],
    '诸暨': [120.23, 29.71],
    '郑州': [113.65, 34.76],
    '哈尔滨': [126.63, 45.75],
    '聊城': [115.97, 36.45],
    '芜湖': [118.38, 31.33],
    '唐山': [118.02, 39.63],
    '平顶山': [113.29, 33.75],
    '邢台': [114.48, 37.05],
    '德州': [116.29, 37.45],
    '济宁': [116.59, 35.38],
    '荆州': [112.239741, 30.335165],
    '宜昌': [111.3, 30.7],
    '义乌': [120.06, 29.32],
    '丽水': [119.92, 28.45],
    '洛阳': [112.44, 34.7],
    '秦皇岛': [119.57, 39.95],
    '株洲': [113.16, 27.83],
    '石家庄': [114.48, 38.03],
    '莱芜': [117.67, 36.19],
    '常德': [111.69, 29.05],
    '保定': [115.48, 38.85],
    '湘潭': [112.91, 27.87],
    '金华': [119.64, 29.12],
    '岳阳': [113.09, 29.37],
    '长沙': [113, 28.21],
    '衢州': [118.88, 28.97],
    '廊坊': [116.7, 39.53],
    '菏泽': [115.480656, 35.23375],
    '合肥': [117.27, 31.86],
    '武汉': [114.31, 30.52],
    '大庆': [125.03, 46.58]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var cityList = data[i].cityList;
        if (cityList) {
            for (var j = 0; j < cityList.length; j++) {
                var city = cityList[j];
                var geoCoord = geoCoordMap[city.cityName];
                if (geoCoord) {
                    res.push({
                        name: city.cityName,
                        value: geoCoord.concat(city.value),
                        schools: city.schools
                    });
                }
            }
        }
    }
    return res;
};

window.addEventListener('load', function () {
    var chart = echarts.init(document.getElementById('main'));
    chart.showLoading()
    chart.setOption({
        title: {
            show: true,
            text: '月经安心行动',
            subtext: '卫生巾互助盒学校地图展示',
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
                    start: 31,
                    end: 40
                }, {
                    start: 21,
                    end: 30
                }, {
                    start: 11,
                    end: 20
                }, {
                    start: 6,
                    end: 10
                },
                {
                    start: 1,
                    end: 5
                }
            ],
            color: ['#8a0808', '#b70908', '#e54545', '#f57667', '#ffc4b4'] //, '#ffc4b4'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                var value = params.data;
                if (value) {
                    var formatStr = value.name + ':<br/>';
                    var schools = value.schools;
                    schools.forEach(function (school, index) {
                        if (index % 2 == 0) {
                            formatStr += school.schoolName + ' | ';
                        } else {
                            formatStr += school.schoolName + '<br/>';
                        }
                    });
                    if (schools.length % 2 === 1) {
                        formatStr = formatStr.substring(0, formatStr.length - 3);
                    }

                    return formatStr;
                }

                return params.data.name + ': 0';
            }
        },
        geo: {
            map: 'china',
            zoom: 1.1,
            roma: true,
            scaleLimit: { //滚轮缩放的极限控制
                min: 1,
                max: 3
            },
            label: {
                normal: {
                    show: false //省份名称  
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                show: false,
                normal: {
                    areaColor: '#f8f9fb', //地图颜色
                    borderColor: '#333', //省份边界颜色
                },
                emphasis: {
                    areaColor: "#f8f9fb", //选中省份颜色
                    borderColor: '#333', //选中省份边界颜色
                    shadowColor: 'rgba(0, 0, 0, 0.1)', //选中省份投影
                    shadowBlur: 1
                }
            }
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(mydata),
            rippleEffect: {
                //涟漪特效
                period: 8, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 5 //波纹圆环最大限制，值越大波纹越大
            },
            hoverAnimation: true,
            symbolSize: 8,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            }

        }]
    });

    chart.on('georoam', function (params) {
        console.log(params)
    })
    chart.hideLoading()
});