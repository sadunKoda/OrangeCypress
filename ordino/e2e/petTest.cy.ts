import { ordinoSuite } from "@ordino.ai/ordino-engine";
import PetService from "../service/requests/PetService";

ordinoSuite("API Tests", () => {
  it("Should add a new pet and validate in sequence", () => {
    PetService.addPet()
  });

  it("Should retrieve pets by status", () => {
    PetService.findPetsByStatus("available")
  });

});
