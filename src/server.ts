import 'dotenv/config';
import app from './app';

const { SERVER_PORT } = process.env;
const PORT = Number(SERVER_PORT);

app.listen(PORT, () => {
  console.info(`Server run on port ${PORT}`);
});
