Ext.define('extdemo.store.CompanyStore',{
	extend:'Ext.data.Store',
	alias:'store.company',
	model:'extdemo.model.Company',
	data:[{
        "id": 1,
        "name": "Roodel",
        "phone": "602-736-2835",
        "price": 59.47,
        "change": 1.23,
        "lastChange": "10/8",
        "industry": "Manufacturing",
        "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "pctChange": 2.11
    }, {
        "id": 2,
        "name": "Voomm",
        "phone": "662-254-4213",
        "price": 41.31,
        "change": 2.64,
        "lastChange": "10/18",
        "industry": "Services",
        "desc": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "pctChange": 6.83
    }, {
        "id": 3,
        "name": "Dabvine",
        "phone": "745-225-8364",
        "price": 29.94,
        "change": 3.55,
        "lastChange": "10/11",
        "industry": "Finance",
        "desc": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "pctChange": 13.45
    }, {
        "id": 4,
        "name": "Twitterbeat",
        "phone": "862-540-4332",
        "price": 89.96,
        "change": -3.82,
        "lastChange": "10/2",
        "industry": "Computer",
        "desc": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "pctChange": -4.07
    }, {
        "id": 5,
        "name": "Lajo",
        "phone": "351-170-1070",
        "price": 65.51,
        "change": 1.48,
        "lastChange": "10/14",
        "industry": "Manufacturing",
        "desc": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "pctChange": 2.31
    }, {
        "id": 6,
        "name": "Livetube",
        "phone": "745-259-7013",
        "price": 52.34,
        "change": 0.91,
        "lastChange": "10/3",
        "industry": "Automotive",
        "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "pctChange": 1.77
    }, {
        "id": 7,
        "name": "Flipstorm",
        "phone": "255-457-6789",
        "price": 41.81,
        "change": -1.58,
        "lastChange": "10/9",
        "industry": "Retail",
        "desc": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "pctChange": -3.64
    }, {
        "id": 8,
        "name": "Oloo",
        "phone": "862-723-7988",
        "price": 53.27,
        "change": 2.06,
        "lastChange": "10/14",
        "industry": "Finance",
        "desc": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "pctChange": 4.02
    }, {
        "id": 9,
        "name": "Roombo",
        "phone": "622-156-8067",
        "price": 21.53,
        "change": -4.04,
        "lastChange": "10/13",
        "industry": "Services",
        "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "pctChange": -15.8
    }, {
        "id": 10,
        "name": "Ntags",
        "phone": "482-558-5069",
        "price": 34.31,
        "change": 2.94,
        "lastChange": "10/14",
        "industry": "Food",
        "desc": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "pctChange": 9.37
    }, {
        "id": 11,
        "name": "Shuffletag",
        "phone": "145-574-5042",
        "price": 25.92,
        "change": 0.77,
        "lastChange": "10/2",
        "industry": "Food",
        "desc": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "pctChange": 3.06
    }, {
        "id": 12,
        "name": "Skivee",
        "phone": "812-555-0295",
        "price": 50.61,
        "change": -3.11,
        "lastChange": "10/4",
        "industry": "Manufacturing",
        "desc": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "pctChange": -5.79
    }, {
        "id": 13,
        "name": "Tanoodle",
        "phone": "221-841-0818",
        "price": 64.26,
        "change": -2.91,
        "lastChange": "10/1",
        "industry": "Finance",
        "desc": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "pctChange": -4.33
    }, {
        "id": 14,
        "name": "Buzzster",
        "phone": "542-221-3452",
        "price": 37.16,
        "change": -1.09,
        "lastChange": "10/14",
        "industry": "Computer",
        "desc": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "pctChange": -2.85
    }, {
        "id": 15,
        "name": "Topicblab",
        "phone": "632-732-0112",
        "price": 80.68,
        "change": -3.68,
        "lastChange": "10/12",
        "industry": "Food",
        "desc": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "pctChange": -4.36
    }, {
        "id": 16,
        "name": "Thoughtworks",
        "phone": "622-654-8350",
        "price": 64.59,
        "change": -2.68,
        "lastChange": "10/16",
        "industry": "Manufacturing",
        "desc": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "pctChange": -3.98
    }, {
        "id": 17,
        "name": "Feedfire",
        "phone": "622-744-0512",
        "price": 21.51,
        "change": -3.72,
        "lastChange": "10/12",
        "industry": "Food",
        "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        "pctChange": -14.74
    }, {
        "id": 18,
        "name": "Thoughtstorm",
        "phone": "622-479-3734",
        "price": 80.48,
        "change": -2.77,
        "lastChange": "10/18",
        "industry": "Automotive",
        "desc": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "pctChange": -3.33
    }, {
        "id": 19,
        "name": "Agivu",
        "phone": "358-757-5355",
        "price": 74.05,
        "change": 0.14,
        "lastChange": "10/4",
        "industry": "Manufacturing",
        "desc": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "pctChange": 0.19
    }]
});