import mongoose from 'mongoose';
import Event from './models/event';
import Person from './models/person';
import assert from 'assert';
import _ from 'lodash';


handleError = (err) => {
  console.log(err);
}

mongoose.connect('mongodb://localhost/events', {
  useMongoClient: true,
  /* other options */
});


// mongoose.connection.collections['events'].drop( function(err) {
//   console.log('collection dropped');
// });


const organizer = new Person ({
  oauth_id: '12312312113',
  name: 'testname',
  avatar: 'https://i.imgur.com/po7UezG.jpg',
  age: '24',
  gender: 2,
  likes: {},
  phoneNumber: '+79260263311',
  events: [],
  matches: []
});

organizer.save(function (err) {
  let manage_ids = [];
  manage_ids.push(organizer._id);

  if (err) return handleError(err);
  var event = new Event({
    title: "Название первого мероприятия",
    _creator: organizer._id,    // assign the _id from the person
    photo : 'http://housediz.com/img/foto/full/img/foto/26/bbefaf8dd7ea453e64c1e576a8013767.jpg',
    description: 'Подробное описание для первого мероприятия будет расположено тут', 
    places_max: 20,
    cost_men: 1500,
    cost_women: 900,
    date : Date.now(),
    show_manage: true,
    manage_ids: manage_ids,
    participant_ids: [],
    participants: [],
    likes: [],
    matches: {},
    table_max: 10
    // tables: _.range(1, 11)
  });

  event.save(function (err) {
    if (err) return handleError(err);
    console.log('event1 saved')
  });
//////////
  var event2 = new Event({
    title: "Название второго мероприятия",
    _creator: organizer._id,    // assign the _id from the person
    photo : 'http://fotointerierov.ru/wp-content/uploads/%D0%9B%D0%B0%D0%B9%D0%BD-%D0%BA%D0%B0%D1%84%D0%B5-%D0%BD%D0%B0-%D0%9B%D0%B8%D0%B3%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%BC.jpg',
    description: 'Подробное описание для второго мероприятия будет расположено тут', 
    places_max: 30,
    cost_men: 2000,
    cost_women: 1000,
    date : Date.now(),
    show_manage: true,
    manage_ids: manage_ids,
    participant_ids: [],
    participants: [],
    likes: [],
    matches: {},
    table_max: 15
  });

  event2.save(function (err) {
    if (err) return handleError(err);
    console.log('event2 saved')
  });


});
 