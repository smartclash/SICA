import * as AYLIEN from 'aylien_textapi';

const textApi = new AYLIEN({
    application_id: 'f7cbfd42',
    application_key: '3a78d46a42732f957c09b745b8cd8360'
});

const checkSentiment = text => new Promise((resolve, reject) => {
    textApi.sentiment(
        { text }, (error, response) => {
            if (error)
                return reject(error);
            
            resolve(response);
        }
    );
});

export default checkSentiment;
