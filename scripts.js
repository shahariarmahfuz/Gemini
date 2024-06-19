const express = require('express');
const app = express();
const port = 3000;

// আপনার API কী
const apiKey = 'AIzaSyB4X2HbcaBxnP8WdL7dlMVnFYM3Smyl7es';

// মিডলওয়্যার ফাংশন যা প্রতিটি অনুরোধের সাথে আপনার API কী চেক করে
const checkApiKey = (req, res, next) => {
  const userKey = req.query.api_key;
  if (userKey && userKey === apiKey) {
    next();
  } else {
    res.status(403).send('Unauthorized');
  }
};

app.use(checkApiKey);

app.get('/api/:prompt', (req, res) => {
  const prompt = req.params.prompt;
  // এখানে আপনার লজিক যোগ করুন
  const response = `Your prompt was ${prompt}`;
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
