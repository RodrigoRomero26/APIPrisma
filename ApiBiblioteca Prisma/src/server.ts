import prisma from '../prisma/client';
import app from './app';
import { config as configDotenv } from 'dotenv';


configDotenv();

const startServer = async () => {
	const PORT = process.env.PORT || 3000;

	try {
		await prisma.$connect();
		console.log('Base de datos conectada correctamente');

		app.listen(PORT, () => {
			console.log(`Servidor escuchando en http://localhost:${PORT}`);
		});
	} catch (error: any) {
		console.error(
			`Error conectando DB`,
		);
		process.exit(1);
	}
};


startServer();
