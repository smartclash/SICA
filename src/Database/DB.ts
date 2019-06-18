import * as mongoose from 'mongoose';

(<any>mongoose).Promise = global.Promise;
mongoose.connect(
    'mongodb://alphaman:passwordROFL1@ds161148.mlab.com:61148/smartstats',
    { useNewUrlParser: true }
);

export default mongoose;
