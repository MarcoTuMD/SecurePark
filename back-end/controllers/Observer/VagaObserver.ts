import { Observer } from "./Observer";

export class VagaObserver implements Observer {
    update(): void {
        console.log("Vagas foram atualizadas!");
    }
}