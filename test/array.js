let a = {
    "msg": "ok",
    "code": 200,
    "data": {
        "author_id": "1126",
        "author_name": "曾議鋒",
        "domain_list": [{
                "groups": {
                    "id": 3,
                    "name": "新聞處",
                    "subList": [{
                            "id": 4,
                            "name": "新聞一部",
                            "subList": [{
                                    "id": 10,
                                    "name": "政治中心",
                                    "subList": []
                                },
                                {
                                    "id": 11,
                                    "name": "財經中心",
                                    "subList": []
                                },
                                {
                                    "id": 12,
                                    "name": "生活中心",
                                    "subList": []
                                },
                                {
                                    "id": 13,
                                    "name": "地方中心",
                                    "subList": []
                                },
                                {
                                    "id": 22,
                                    "name": "國際名家中心",
                                    "subList": []
                                }
                            ]
                        },
                        {
                            "id": 5,
                            "name": "新聞二部",
                            "subList": [{
                                    "id": 14,
                                    "name": "娛樂中心",
                                    "subList": []
                                },
                                {
                                    "id": 15,
                                    "name": "流行中心",
                                    "subList": []
                                },
                                {
                                    "id": 16,
                                    "name": "在地生活中心",
                                    "subList": []
                                }
                            ]
                        },
                        {
                            "id": 6,
                            "name": "新聞三部",
                            "subList": [{
                                    "id": 17,
                                    "name": "節目中心",
                                    "subList": []
                                },
                                {
                                    "id": 18,
                                    "name": "影像中心",
                                    "subList": []
                                }
                            ]
                        },
                        {
                            "id": 7,
                            "name": "新聞四部",
                            "subList": [{
                                    "id": 19,
                                    "name": "China Post",
                                    "subList": []
                                },
                                {
                                    "id": 20,
                                    "name": "四方報",
                                    "subList": []
                                }
                            ]
                        },
                        {
                            "id": 8,
                            "name": "新聞五部",
                            "subList": [{
                                    "id": 21,
                                    "name": "編輯中心",
                                    "subList": []
                                },
                                {
                                    "id": 23,
                                    "name": "運動中心",
                                    "subList": []
                                }
                            ]
                        },
                        {
                            "id": 9,
                            "name": "數位行銷部",
                            "subList": [{
                                    "id": 24,
                                    "name": "社群中心",
                                    "subList": []
                                },
                                {
                                    "id": 25,
                                    "name": "電競中心",
                                    "subList": []
                                }
                            ]
                        }
                    ]
                },
                "domain_web": "www.nownews",
                "author_id": "1126",
                "view_ga_scope": "1"
            },
            {
                "groups": null,
                "domain_web": "babyou.nownews",
                "author_id": "1126",
                "view_ga_scope": "1"
            },
            {
                "groups": null,
                "domain_web": "chinapost.nownews",
                "author_id": "1126",
                "view_ga_scope": "1"
            },
            {
                "groups": null,
                "domain_web": "petsmao.nownews",
                "author_id": "1126",
                "view_ga_scope": "4"
            }
        ]
    }
}
for (var b of a.data.domain_list) {
    // console.log(b.domain_web)
}
let c = a.data.domain_list[0].groups.subList[0].subList;
// console.log(c)
let dpt = ["新聞一部", "新聞二部", "新聞三部", "新聞四部", "新聞五部"];
let domain = a.data.domain_list[0].domain_web;
// let domain = a.data.domain_list[0].groups;
// console.log(a.data.domain_list[0].groups.subList)
for (var i of a.data.domain_list[0].groups.subList) {
    // console.log(i.name)
    // console.log(i.subList[0].name)
}
for (var b of a.data.domain_list[0].groups.subList) {
    // var d = b.subList
    // console.log(b)
    for (d of b.subList) {
        // console.log(d.name)
    }
}

let deptListArray = {
    "新聞一部": ['政治中心', '財金中心', '生活中心', '地方中心', '國際名家中心'],
    "新聞二部": ['娛樂中心', '流行中心', '在地生活中心'],
    "新聞三部": ['節目中心', '影像中心'],
    "新聞四部": ['China Post', '四方報'],
    "新聞五部": ['編輯中心', '運動中心'],
    "數位行銷部": ['這群中心', '電競中心']
}
for (let a in deptListArray) {
    // console.log(deptListArray[a])
    // console.log(a)
}


// console.log(Object.keys(deptListArray))
let f = ['']
if (f == '')
    console.log("asd")
    // let a = [
    //         ['/news/5184272', 1, 2],
    //         ['/news/5184222', 3, 5],
    //         ['/news/5184232', 6, 7]
    //     ]
    //     // a[0][0].fill(String(a[0]).match(/\d{7}/)[0])
    //     // console.log(String(a[0]).match(/\d{7}/)[0])
    // for (var i = 0; i < a.length; i++)
    //     a[i][0] = String(a[i][0]).match(/\d{7}/)[0]
    //     // console.log(a)

// let b = [1, 2, 1];
// let c = [
//     [1, "21"],
//     [1, "21"],
//     [1, "21"]
// ]

// let d = []
// console.log(d[0])
// if (d[0] == null)
//     console.log("tes")