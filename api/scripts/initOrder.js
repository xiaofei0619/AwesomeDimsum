const shortid = require('shortid');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.ADDB_URL;

const ORDERS = [
  {
    id: 1,
    orderId: shortid.generate(),
    status: 'Complete',
    name: 'Xiaofei Chen',
    phone: '(415) 666-5555',
    created: new Date('2020-12-17T08:24:00'),
    pickup: new Date('2020-12-17T13:15:00'),
    subtotal: 39.50,
    tax: 3.95,
    total: 43.45,
    items: JSON.stringify({
      101: 1,
      102: 1,
      104: 1,
      106: 1,
      201: 1,
      307: 1,
      401: 1,
    }),
    request: '',
  },
  {
    id: 2,
    orderId: shortid.generate(),
    status: 'Complete',
    name: 'Nate Qin',
    phone: '(412) 616-5555',
    created: new Date('2021-1-1T04:10:30'),
    pickup: new Date('2021-1-1T05:30:00'),
    subtotal: 42.00,
    tax: 4.20,
    total: 46.20,
    items: JSON.stringify({
      101: 1,
      102: 1,
      103: 1,
      301: 2,
      306: 1,
      506: 1,
    }),
    request: 'Need 2 pairs of chopsticks',
  },
  {
    id: 3,
    orderId: shortid.generate(),
    status: 'ReadyForPickup',
    name: 'Kelvin',
    phone: '(720) 609-5555',
    created: new Date('2021-7-30T02:50:50'),
    pickup: new Date('2021-7-30T06:45:00'),
    subtotal: 35.00,
    tax: 3.50,
    total: 38.50,
    items: JSON.stringify({
      101: 2,
      204: 1,
      205: 1,
      505: 2,
    }),
    request: 'Please give some chili oil.',
  },
  {
    id: 4,
    orderId: shortid.generate(),
    status: 'InProgress',
    name: 'Nina Z',
    phone: '(203) 609-5566',
    created: new Date('2021-7-30T02:14:50'),
    pickup: new Date('2021-7-30T08:00:00'),
    subtotal: 35.00,
    tax: 3.50,
    total: 38.50,
    items: JSON.stringify({
      101: 2,
      204: 1,
      205: 1,
      505: 2,
    }),
    request: 'Please seperate the 2 Shrimp Dumplings into 2 packages',
  },
  {
    id: 5,
    orderId: shortid.generate(),
    status: 'Complete',
    name: 'Floria Zhang',
    phone: '(406) 611-5599',
    created: new Date('2021-7-21T03:59:02'),
    pickup: new Date('2021-7-21T05:00:00'),
    subtotal: 35.00,
    tax: 3.50,
    total: 38.50,
    items: JSON.stringify({
      101: 2,
      204: 1,
      205: 1,
      505: 2,
    }),
    request: '',
  },
  {
    id: 6,
    orderId: shortid.generate(),
    status: 'Complete',
    name: 'Xiaofei Chen',
    phone: '(415) 666-5555',
    created: new Date('2021-6-1T05:24:00'),
    pickup: new Date('2021-6-1T11:30:00'),
    subtotal: 39.50,
    tax: 3.95,
    total: 43.45,
    items: JSON.stringify({
      101: 1,
      102: 1,
      104: 1,
      106: 1,
      201: 1,
      307: 1,
      401: 1,
    }),
    request: '',
  },
  {
    id: 7,
    orderId: shortid.generate(),
    status: 'Complete',
    name: 'Xiaofei Chen',
    phone: '(415) 666-5555',
    created: new Date('2021-6-17T05:24:00'),
    pickup: new Date('2021-6-17T11:30:00'),
    subtotal: 39.50,
    tax: 3.95,
    total: 43.45,
    items: JSON.stringify({
      101: 1,
      102: 1,
      104: 1,
      106: 1,
      201: 1,
      307: 1,
      401: 1,
    }),
    request: '',
  },
  {
    id: 8,
    orderId: shortid.generate(),
    status: 'Complete',
    name: 'Xiaofei Chen',
    phone: '(415) 666-5555',
    created: new Date('2021-6-21T05:24:00'),
    pickup: new Date('2021-6-21T11:30:00'),
    subtotal: 39.50,
    tax: 3.95,
    total: 43.45,
    items: JSON.stringify({
      101: 1,
      102: 1,
      104: 1,
      106: 1,
      201: 1,
      307: 1,
      401: 1,
    }),
    request: '',
  },
  {
    id: 9,
    orderId: shortid.generate(),
    status: 'Complete',
    name: 'Xiaofei Chen',
    phone: '(415) 666-5555',
    created: new Date('2021-6-23T05:24:00'),
    pickup: new Date('2021-6-23T11:30:00'),
    subtotal: 39.50,
    tax: 3.95,
    total: 43.45,
    items: JSON.stringify({
      101: 1,
      102: 1,
      104: 1,
      106: 1,
      201: 1,
      307: 1,
      401: 1,
    }),
    request: '',
  },
  {
    id: 10,
    orderId: shortid.generate(),
    status: 'Complete',
    name: 'Xiaofei Chen',
    phone: '(415) 666-5555',
    created: new Date('2021-6-25T05:24:00'),
    pickup: new Date('2021-6-25T11:30:00'),
    subtotal: 39.50,
    tax: 3.95,
    total: 43.45,
    items: JSON.stringify({
      101: 1,
      102: 1,
      104: 1,
      106: 1,
      201: 1,
      307: 1,
      401: 1,
    }),
    request: '',
  },
  {
    id: 11,
    orderId: shortid.generate(),
    status: 'Complete',
    name: 'Xiaofei Chen',
    phone: '(415) 666-5555',
    created: new Date('2021-6-29T05:24:00'),
    pickup: new Date('2021-6-29T11:30:00'),
    subtotal: 39.50,
    tax: 3.95,
    total: 43.45,
    items: JSON.stringify({
      101: 1,
      102: 1,
      104: 1,
      106: 1,
      201: 1,
      307: 1,
      401: 1,
    }),
    request: '',
  },
  {
    id: 12,
    orderId: shortid.generate(),
    status: 'New',
    name: 'Xiaofei Chen',
    phone: '(415) 666-5555',
    created: new Date('2021-7-30T05:24:00'),
    pickup: new Date('2021-7-30T12:30:00'),
    subtotal: 39.50,
    tax: 3.95,
    total: 43.45,
    items: JSON.stringify({
      101: 1,
      102: 1,
      104: 1,
      106: 1,
      201: 1,
      307: 1,
      401: 1,
    }),
    request: '',
  },
  {
    id: 13,
    orderId: shortid.generate(),
    status: 'InProgress',
    name: 'Floria Zhang',
    phone: '(406) 611-5599',
    created: new Date('2021-7-30T02:14:02'),
    pickup: new Date('2021-7-30T08:15:00'),
    subtotal: 35.00,
    tax: 3.50,
    total: 38.50,
    items: JSON.stringify({
      101: 2,
      204: 1,
      205: 1,
      505: 2,
    }),
    request: '',
  },
];

async function testWithAsync() {
  console.log('\n--- Initiating Orders ---');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB URL', url);
    const db = client.db();
    const collection = db.collection('orders');
    const counterCollection = db.collection('counters');

    if (collection !== undefined) {
      await collection.deleteMany({});
    }
    await collection.insertMany(ORDERS);
    const orderCount = await collection.countDocuments();
    console.log('Inserted ', orderCount, ' orders');

    await counterCollection.deleteOne({ _id: 'orders' });
    await counterCollection.insertOne({ _id: 'orders', current: orderCount });

    await collection.createIndex({ id: 1 }, { unique: true });
    await collection.createIndex({ orderId: 1 }, { unique: true });
    await collection.createIndex({ status: 1 });
    await collection.createIndex({ pickup: 1 });
    await collection.createIndex({ name: 'text', orderId: 'text' });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

testWithAsync();
