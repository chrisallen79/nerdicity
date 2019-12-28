import App from './App';
import CONFIG from '../config/config';

const app = new App().express;

app.listen(CONFIG.api_port, () => console.log(`Server started on port ${CONFIG.api_port}`));
