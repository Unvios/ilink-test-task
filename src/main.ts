import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap () {
    const app = await NestFactory.create(AppModule);

    await app.listen(process.env.APP_PORT, () => {
        console.info(`Started on ${ process.env.APP_PORT } port.`);
    });
}

bootstrap();
