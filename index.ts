import express from 'express';

const app = express();

const port = '3001';

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Now listening to ${port}`));
