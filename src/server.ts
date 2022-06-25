import 'dotenv/config';
import app from './app';

const { PORT } = process.env;

app.listen(Number(PORT), () => {
  console.info(`Server run on port ${PORT}`);
});
