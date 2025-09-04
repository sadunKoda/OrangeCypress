import { ordinoSuite } from "@ordino.ai/ordino-engine";
import { OrdinoLoginPage } from "../../pages/OrdinoLoginPage";

const loginPage = new OrdinoLoginPage();

ordinoSuite(
  "OrangeHRM Home Dashboard 2- Test Suite 4",
  { tags: ["@reg", "@home"] },
  () => {
    it("Test - Verify Dashboard Logout", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        .step_profileOption("Logout");
    });

    it("Test - Verify Given Dashboard Search Selection", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        .step_searchOption("Leave")
        .step_profileOption("Logout");
    });

    //-----------------

    it("Test - Verify Given Dashboard Selection fail", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123sdfd")
        .step_clickLogin()
        .step_searchOption("Leave")
        .step_profileOption("Logout");
    });
    
    it("Test - Verify Given Dashboard Selection fail", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123sdfd")
        .step_clickLogin()
        .step_searchOption("Leave")
        .step_profileOption("Logout");
    });
    
    it("Test - Verify Given Dashboard Selection fail", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123sdfd")
        .step_clickLogin()
        .step_searchOption("Leave")
        .step_profileOption("Logout");
    });
    
    it("Test - Verify Given Dashboard Selection fail", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123sdfd")
        .step_clickLogin()
        .step_searchOption("Leave")
        .step_profileOption("Logout");
    });
   

    

  }
);
