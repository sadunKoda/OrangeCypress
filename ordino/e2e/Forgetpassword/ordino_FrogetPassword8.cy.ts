import { ordinoSuite } from "@ordino.ai/ordino-engine";
import { OrdinoLoginPage } from "../../pages/OrdinoLoginPage";

const loginPage = new OrdinoLoginPage();

ordinoSuite(
  "OrangeHRM FrogetPassword - Test Suite 8",
  { tags: ["@reg", "@home"] },
  () => {
    it("Test - Verify FrogetPassword Logout", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        .step_profileOption("Logout");
    });

    it("Test - Verify Given Menu Search FrogetPassword", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        .step_searchOption("Leave")
        .step_profileOption("Logout");
    });

    //-----------------

   

    

  }
);
