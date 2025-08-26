import { ordinoSuite } from "@ordino.ai/ordino-engine";
import { OrdinoLoginPage } from "../pages/OrdinoLoginPage";

const loginPage = new OrdinoLoginPage();

ordinoSuite(
  "OrangeHRM Home Dashboard - Test Suite 4",
  { tags: ["@reg", "@home"] },
  () => {
    it("Test - Verify Profile Logout", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        .step_profileOption("Logout");
    });

    it("Test - Verify Given Menu Search Selection", { tags: "@smk" }, () => {
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
