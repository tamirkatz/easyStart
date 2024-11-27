import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./app.module.scss";
import SideBar from "./navBar"; // Make sure the path is correct
// import Roadmap from "./roadmap";
import FoundersAgreementForm from "./foundersAgreementForm";
import {
  FINANCIAL_PLAN_NODES,
  HIRING_NODES,
  IDEA_VALIDATION_NODES,
  MAIN_PAGE_NODES,
} from "./config";
import CreateLinkedInPost from "./hiring/createLinkedinPost";
import CreateHiringPlatformAccount from "./hiring/platformCreation";
import FormEmployeeContract from "./hiring/formEmployeeContract";
import DefineCoreIdea from "./ideaValidation/DefineCoreIdea";
import MainPage from "./MainPage";
import Roadmap from "./newRoadMap";
import RevenueModel from "./RevenueModel";
import SWOTAnalysis from "./ideaValidation/SWOTAnalysis";
import FeatureMatrix from "./FeatureMatrix";

function App() {
  return (
    <Router>
      <div className={styles.col}>
        <SideBar />
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/matrix" element={<FeatureMatrix />} />
            {/* <Route path="/revenue-model" element={<RevenueModel />} /> */}
            {/* <Route path="/swot" element={<SWOTAnalysis />} /> */}

            <Route
              path="/righttoleft"
              element={<Roadmap nodes={MAIN_PAGE_NODES} />}
            />
            <Route
              path="/business-plan"
              element={<Roadmap nodes={FINANCIAL_PLAN_NODES} />}
            />
            <Route
              path="/founders-agreement"
              element={<FoundersAgreementForm />}
            />
            <Route
              path="/hire-your-first-employee"
              element={<Roadmap nodes={HIRING_NODES} />}
            />
            <Route
              path="/idea-validation"
              element={<Roadmap nodes={IDEA_VALIDATION_NODES} />}
            />
            <Route
              path="/Create-LinkedInPost"
              element={<CreateLinkedInPost />}
            />
            <Route
              path="/platform-creation"
              element={<CreateHiringPlatformAccount />}
            />
            <Route
              path="/form-employee-contract"
              element={<FormEmployeeContract />}
            />
            <Route path="/define-core-idea" element={<DefineCoreIdea />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
