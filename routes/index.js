var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var mongodbUri = "mongodb://beshutaf:jerucoop@ds129442.mlab.com:29442/beshutaf-shifts-test"

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get-month', function (req, res) {
  res.json(genrateMonthJson(req.query.year, req.query.month));
});

router.post("/save-user-preferences", function(req, res) {
  MongoClient.connect(mongodbUri, function(err, db) {
    db.collection('user-preferences').insertOne(req.body);
  db.close();
});
});

function genrateMonthJson(year, month) {
  let result = [];
  let firstOfMonth = new Date(year, month, 1);
  if (firstOfMonth.getDay() !== 0 && firstOfMonth.getDay() !== 6) {
    result.push([]);
    for (var i = 0; i < firstOfMonth.getDay(); i++) {
      result[0].push({});
    }
  }
  for (var i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
    let current = new Date(year, month, i);
    let weekday = current.getDay();
    if (weekday === 6) continue;
    else if (weekday === 0) {
      result.push([]);
    }
    result[result.length - 1].push({
      date: `${i}/${parseInt(month) + 1}`,
      shifts: getShiftsByWeekday(weekday)
    });
  }
  return result;
}

function getShiftsByWeekday(weekday) {
  switch (weekday) {
    case 0: return ["19:00-22:00"];
    case 1: return ["16:00-19:00", "19:00-22:00"];
    case 2: return ["16:00-19:00", "19:00-22:00"];
    case 3: return ["16:00-19:00", "19:00-22:00"];
    case 4: return ["13:00-16:00", "16:00-19:00", "19:00-22:00", "21:00-00:00"];
    case 5: return ["08:00-11:00", "11:00-14:00", "13:00-16:00"];
    default: return [];
  }
}

module.exports = router;