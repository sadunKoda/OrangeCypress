import { newPet } from "../payloads/PetPayloads";
import { oi, ApiServiceType } from "@ordino.ai/ordino-engine";

const http = oi.api(ApiServiceType.HTTP);

class PetService {
    static addPet() {
        http.BaseUrl("https://petstore.swagger.io/v2/");
        http.setUrl("pet");
        http.requestPost(newPet).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(newPet.name);
            expect(response.body.status).to.eq(newPet.status);
            expect(response.body.category.name).to.eq(newPet.category.name);
            http.setValue("petId", response.body.id);
        });
    }

    static findPetsByStatus(status: string) {
        http.setUrl(`pet/findByStatus?status=${status}`);
        http.requestGet().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an("array");
            expect(response.body.length).to.be.greaterThan(0);

        });
    }
}

export default PetService;