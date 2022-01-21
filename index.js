

const express = require('express')
const md5 = require('blueimp-md5')
const UserModel = require('../models//UserModel')


const app = express()

app.use(express.json())
 
const router = express.Router()

let KG = {
  documents: [
    {
      key:'1',
      document_key: '1993-DQ12-5',
      year: 1993,
      title:'中国科技大学关于发布《处级以上干部廉政规定》的通知',
      url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
      start_date: '1993/9/23',
      end_date: '1993/9/23',
      archives:'纪检监察处',
      archive_date: '1994/9/12',
      number: 1,
      pages: 6,
      category:1,
      symbolSize:70,
    },
    {   
        key:'2',
        document_key: '1993-DQ12-6',
        year: 1993,
        title:'中国科技大学纪委关于严禁赌博通知',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/1/13',
        end_date: '1993/1/13',
        archives:'纪检监察处',
        archive_date: '1994/6/1',
        number: 1,
        pages: 2,
        category:1,
        symbolSize:70,
      },
      {
        key:'3',
        document_key: '1993-DQ12-7',
        year: 1993,
        title:'中国科技大学关于对马连海通知党内警告处分的批复',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/2/24',
        end_date: '1993/2/24',
        archives:'纪检监察处',
        archive_date: '1994/6/1',
        number: 1,
        pages: 2,
        category:1,
        symbolSize:70,
      },
      {
        key:'4',
        document_key: '1993-DQ13-1',
        year: 1993,
        title:'中科院党组织关于贯彻全国组织工作会议精神、做好选拔年轻干部工作的通知',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/1/20',
        end_date: '1993/9/10',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 2,
        pages: 18,
        category:1,
        symbolSize:70,
      },
      {
        key:'5',
        document_key: '1993-DQ13-2',
        year: 1993,
        title:'中科院党组、中国科技大学党委关于转发中组部对余翔林等同志职务任免的通知',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/8/24',
        end_date: '1993/10/25',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 4,
        pages: 9,
        category:1,
        symbolSize:50,
      },
      {
        key:'6',
        document_key: '1993-DQ13-3',
        year: 1993,
        title:'中国科技大学党委关于李龙泉等同志职务任免的通知',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 6,
        pages: 12,
        category:1,
        symbolSize:50,
      },
      {
        key:'7',
        document_key: '1993-DQ13-4',
        year: 1993,
        title:'中国科技大学党委关于成立科技开发院直属党支部的通知',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 1,
        pages: 2,
        category:1,
        symbolSize:50,
      },
      {
        key:'8',
        document_key: '1993-DQ13-5',
        year: 1993,
        title:'中国科技大学党委组织部一九九三年工作要点',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 1,
        pages: 6,
        category:1,
        symbolSize:50,
      },
      {
        key:'9',
        document_key: '1993-DQ13-6',
        year: 1993,
        title:'中国科技大学关于九九三年发展党员工作计划的报告、通知',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 2,
        pages: 11,
        category:1,
        symbolSize:50,
      },
      {
        key:'10',
        document_key: '1993-DQ13-7',
        year: 1993,
        title:'中国科技大学关于完善当的组织生活制度做好民主评议党员工作的通知',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 2,
        pages: 11,
        category:1,
        symbolSize:50,
      },
      {
        key:'11',
        document_key: '1993-DQ13-8',
        year: 1993,
        title:'中国科技大学关于举党支部书记培训班和招收普及班学员的通知、名册、校领导在结业典礼上的报告',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 5,
        pages: 38,
        category:1,
        symbolSize:50,
      },
      {
        key:'12',
        document_key: '1993-DQ13-9',
        year: 1993,
        title:'中国科技大学一九九三年党员转入组织关系介绍信及存根',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 57,
        pages: 58,
        category:2,
        symbolSize:50,
      },
      {
        key:'13',
        document_key: '1993-DQ13-10',
        year: 1993,
        title:'中国科技大学一九九三年党员转出组织关系介绍信及存根',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 78,
        pages: 83,
        category:2,
        symbolSize:50,
      },
      {
        key:'14',
        document_key: '1993-DQ13-11',
        year: 1993,
        title:'中国科技大学一九九三年党内统计年表',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 0,
        pages: 33,
        category:2,
        symbolSize:50,
      },
      {
        key:'15',
        document_key: '1993-DQ13-12',
        year: 1993,
        title:'中国科技大学一九九三年党员名册',
        url:"https://gimg2.bakeyu.com/image_search/src=http%3A%2F%2Fahqfjs.com%2Fupload%2Fimage%2F20181219%2F20181219105598169816.jpg&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
        start_date: '1993/9/23',
        end_date: '1993/9/23',
        archives:'组织部',
        archive_date: '1994/9/12',
        number: 2,
        pages: 120,
        category:2,
        symbolSize:50,
      },
     
  ],
  relations: [
    {
      source: "1",
      target: "10"
      },
      {
      source: "2",
      target: "10"
      },
      {
      source: "3",
      target: "10"
      },
      {
      source: "3",
      target: "2"
      },
      {
      source: "4",
      target: "10"
      },
      {
      source: "5",
      target: "10"
      },
      {
      source: "6",
      target: "10"
      },
      {
      source: "7",
      target: "10"
      },
      {
      source: "8",
      target: "10"
      },
      {
      source: "9",
      target: "10"
      },

  ]

}

//Login
router.post('login', (req,res) => {
  const {username, password} = req.body
  UserModel.findOne({username, password: md5(password)})
    .then(user => {
      if(user){
        //生成cookie
        res.cookie('userid', user._id, {maxAge: 1000 *60 * 60 *24})
        if (user.role._id) {
          RoleModel
        }
      }
    })
  
} )




app.get('/all', (req,res) => {
    console.log("success")
    res.json(documents)
  
})


app.get('/search', (req,res) => {
    const {q} = req.query
    console.log(q)
    const searchList = KG.documents.filter( item => item.title.includes(q) === true)
    const relations =  KG.relations
    if (searchList) {
        res.json({documents:searchList, relations:relations})
    } else {
        res.json({})
    }
})



const generatekey = () => {
    const maxkey = notes.length > 0 
        ? Math.max(...notes.map(n => n.key)) 
        : 0
    return maxkey + 1
}

app.post('/api/notes', (req, res) => {
    const body = req.body

    if(!body.content) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    
    const note  = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        key: generatekey(),
    }
    
    notes = notes.concat(note)

    res.json(note)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)