// db.books.find({"pages" : {$lte:209}})

// db.books.aggregate([
//     { $match: {"pages" : {$lte:209}, "language" : "English"}}
//     ])
    
// db.books.find({},{author:1,country:1,pages:1,title:1,_id:0})  
// db.books.find({}).projection({author:1,country:1,pages:1,title:1,_id:0})
// db.books.find({"pages" : {$lte:209}}).select({author:1, country:1,pages:1,title:1,_id

// db.books.aggregate([
//     {$match: {"pages": {$lte:209}, "language" : "English" } },
//     {$project: {author:1, pages:1}}
//     ])

// db.books.find().limit(12)
// db.books.aggregate([
//     {$match: {"pages" :{$lte:209}}},
//     {$project: {author:1, pages:1}},
//     {$limit: 15}
//     ])

// db.books.find().select({author:1, contry:1, pages:1}).skip(50).limit(10)
// db.books.aggregate([
//     {$skip: 5}
//     ])

// db.books.find({"pages" : {$lte:209}}).count()

// db.books.aggregate([
//     {$match: { "pages" : { $lte: 209 } } },
//     {$count: "total count"}
//     ])
    
// db.books.find({"pages" : {$lte:209}}).sort({pages:1, author:1})
// db.books.aggregate([
//     {$sort: {author:1} }
//     ])    